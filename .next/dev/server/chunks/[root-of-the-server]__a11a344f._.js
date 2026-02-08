module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/app/api/parse/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/client.mjs [app-route] (ecmascript) <export OpenAI as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mammoth/lib/index.js [app-route] (ecmascript)");
const runtime = "nodejs";
;
;
;
const openai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__["default"]({
    apiKey: process.env.OPENAI_API_KEY
});
function ext(name) {
    const n = name.toLowerCase();
    if (n.endsWith(".pdf")) return "pdf";
    if (n.endsWith(".docx")) return "docx";
    if (n.endsWith(".txt")) return "txt";
    return "other";
}
async function parsePdf(data) {
    const pdfjs = await __turbopack_context__.A("[project]/node_modules/pdfjs-dist/legacy/build/pdf.mjs [app-route] (ecmascript, async loader)");
    // ✅ MUST be a non-empty string (prevents "No workerSrc specified")
    // With disableWorker:true, it should not actually spin up the worker,
    // but pdf.js still wants a valid workerSrc for "fake worker" init.
    pdfjs.GlobalWorkerOptions.workerSrc = "pdfjs-dist/legacy/build/pdf.worker.mjs";
    const loadingTask = pdfjs.getDocument({
        data,
        disableWorker: true
    });
    const pdf = await loadingTask.promise;
    let fullText = "";
    for(let pageNum = 1; pageNum <= pdf.numPages; pageNum++){
        const page = await pdf.getPage(pageNum);
        const content = await page.getTextContent();
        const strings = content.items.map((it)=>it.str);
        fullText += strings.join(" ") + "\n";
    }
    await pdf.destroy?.();
    return fullText;
}
async function fileToText(file) {
    const ab = await file.arrayBuffer();
    const type = ext(file.name);
    if (type === "pdf") {
        const data = new Uint8Array(ab);
        return await parsePdf(data);
    }
    const buffer = Buffer.from(ab);
    if (type === "docx") {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].extractRawText({
            buffer
        });
        return result?.value || "";
    }
    if (type === "txt") {
        return buffer.toString("utf-8");
    }
    return "";
}
async function POST(req) {
    try {
        const formData = await req.formData();
        const files = formData.getAll("files");
        if (!files?.length) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No files uploaded"
            }, {
                status: 400
            });
        }
        if (files.length > 6) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Max 6 files"
            }, {
                status: 400
            });
        }
        const parts = [];
        for (const f of files){
            const type = ext(f.name);
            if (![
                "pdf",
                "docx",
                "txt"
            ].includes(type)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Only PDF, DOCX, or TXT files are supported."
                }, {
                    status: 400
                });
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
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ]
        });
        const raw = completion.choices[0]?.message?.content?.trim() || "[]";
        let tasks = [];
        try {
            tasks = JSON.parse(raw);
        } catch  {
            const first = raw.indexOf("[");
            const last = raw.lastIndexOf("]");
            tasks = first !== -1 && last !== -1 ? JSON.parse(raw.slice(first, last + 1)) : [];
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            tasks
        });
    } catch (error) {
        console.error("Parse error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || "Parse failed"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a11a344f._.js.map