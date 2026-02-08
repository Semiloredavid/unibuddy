export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import mammoth from "mammoth";



const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

function ext(name: string) {
  const n = name.toLowerCase();
  if (n.endsWith(".pdf")) return "pdf";
  if (n.endsWith(".docx")) return "docx";
  if (n.endsWith(".txt")) return "txt";
  return "other";
}

async function parsePdf(data: Uint8Array): Promise<string> {
  const pdfjs: any = await import("pdfjs-dist/legacy/build/pdf.mjs");

  // ✅ MUST be a non-empty string (prevents "No workerSrc specified")
  // With disableWorker:true, it should not actually spin up the worker,
  // but pdf.js still wants a valid workerSrc for "fake worker" init.
  pdfjs.GlobalWorkerOptions.workerSrc =
    "pdfjs-dist/legacy/build/pdf.worker.mjs";

  const loadingTask = pdfjs.getDocument({
    data,
    disableWorker: true,
  });

  const pdf = await loadingTask.promise;

  let fullText = "";
  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const content = await page.getTextContent();
    const strings = content.items.map((it: any) => it.str);
    fullText += strings.join(" ") + "\n";
  }

  await pdf.destroy?.();
  return fullText;
}
async function fileToText(file: File): Promise<string> {
  const ab = await file.arrayBuffer();
  const type = ext(file.name);

  if (type === "pdf") {
    const data = new Uint8Array(ab);
    return await parsePdf(data);
  }

  const buffer = Buffer.from(ab);

  if (type === "docx") {
    const result = await mammoth.extractRawText({ buffer });
    return result?.value || "";
  }

  if (type === "txt") {
    return buffer.toString("utf-8");
  }

  return "";
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("files") as File[];

    if (!files?.length) {
      return NextResponse.json({ error: "No files uploaded" }, { status: 400 });
    }
    if (files.length > 6) {
      return NextResponse.json({ error: "Max 6 files" }, { status: 400 });
    }

    const parts: string[] = [];
    for (const f of files) {
      const type = ext(f.name);
      if (!["pdf", "docx", "txt"].includes(type)) {
        return NextResponse.json(
          { error: "Only PDF, DOCX, or TXT files are supported." },
          { status: 400 }
        );
      }

      const text = await fileToText(f);
      parts.push(`--- FILE: ${f.name} ---\n${text}`);
    }

    const combinedText = parts.join("\n\n").slice(0, 180000);

    const prompt = `
Extract ALL dated items (assignments, quizzes, labs, midterms, finals, projects).
Return STRICT JSON ARRAY ONLY. No markdown. No explanation.

Schema:
[
  { "priority": 1, "title": "Assignment 1", "course": "COMP 2540", "date": "2026-02-15", "notes": "" }
]

Rules:
- date must be YYYY-MM-DD
- priority: 1=high, 2=medium, 3=low
- include every dated assessment you can find

Text:
"""${combinedText}"""
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      temperature: 0.2,
      messages: [{ role: "user", content: prompt }],
    });

    const raw = completion.choices[0]?.message?.content?.trim() || "[]";

    let tasks: any[] = [];
    try {
      tasks = JSON.parse(raw);
    } catch {
      const first = raw.indexOf("[");
      const last = raw.lastIndexOf("]");
      tasks = first !== -1 && last !== -1 ? JSON.parse(raw.slice(first, last + 1)) : [];
    }

    return NextResponse.json({ success: true, tasks });
  } catch (error: any) {
    console.error("Parse error:", error);
    return NextResponse.json({ error: error.message || "Parse failed" }, { status: 500 });
  }
}