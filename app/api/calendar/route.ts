export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";

function toICSDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  if (!y || !m || !d) return null;
  return `${y}${String(m).padStart(2, "0")}${String(d).padStart(2, "0")}T090000`;
}

function generateICS(tasks: any[]) {
  const events = tasks
    .map((t) => {
      const dt = toICSDate(t.date);
      if (!dt) return "";
      const summary = `${t.course || "Course"}: ${t.title || "Task"} (P${t.priority ?? ""})`;
      const desc = (t.notes || "").replace(/\n/g, "\\n");

      return `BEGIN:VEVENT
DTSTART:${dt}
SUMMARY:${summary}
DESCRIPTION:${desc}
END:VEVENT`;
    })
    .filter(Boolean)
    .join("\n");

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Unibuddy//AI Calendar//EN
${events}
END:VCALENDAR`;
}

export async function POST(req: NextRequest) {
  try {
    const { tasks } = await req.json();

    if (!Array.isArray(tasks)) {
      return NextResponse.json({ error: "tasks must be an array" }, { status: 400 });
    }

    const ics = generateICS(tasks);

    return new NextResponse(ics, {
      headers: {
        "Content-Type": "text/calendar",
        "Content-Disposition": 'attachment; filename="unibuddy-calendar.ics"',
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Calendar error" }, { status: 500 });
  }
}