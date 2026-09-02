import { NextResponse } from "next/server";
import { formatConsultationMessage, sendTelegramMessage } from "@/lib/telegram";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name : "";
    const email = typeof body.email === "string" ? body.email : "";
    const phone = typeof body.phone === "string" ? body.phone : "";
    const message = typeof body.message === "string" ? body.message : "";

    if (!name.trim() || !email.trim()) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const text = formatConsultationMessage({ name, email, phone, message });
    await sendTelegramMessage(text);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Consultation request failed:", error);
    return NextResponse.json(
      { error: "Could not send your request. Please try again." },
      { status: 500 }
    );
  }
}
