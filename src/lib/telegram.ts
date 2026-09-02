type ConsultationPayload = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function formatConsultationMessage(data: ConsultationPayload) {
  const now = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const blocks = [
    "📋 <b>New Consultation Request</b>",
    `<i>${now} ET · ClearPath Books</i>`,
    "",
    "─────────────────",
    "",
    `👤 <b>Name</b>\n${escapeHtml(data.name.trim())}`,
    "",
    `✉️ <b>Email</b>\n${escapeHtml(data.email.trim())}`,
  ];

  if (data.phone?.trim()) {
    blocks.push("", `📞 <b>Phone</b>\n${escapeHtml(data.phone.trim())}`);
  }

  if (data.message?.trim()) {
    blocks.push("", `💬 <b>Message</b>\n${escapeHtml(data.message.trim())}`);
  }

  blocks.push("", "─────────────────", "", "🌐 Sent from website contact form");

  return blocks.join("\n");
}

export async function sendTelegramMessage(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!token || !chatId) {
    throw new Error("Telegram is not configured");
  }

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.ok) {
    throw new Error(data.description ?? "Telegram API error");
  }

  return data;
}
