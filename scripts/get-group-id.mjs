#!/usr/bin/env node
/**
 * One-time helper: get Telegram group chat ID.
 * 1. Add @Nova_leadhelper_bot to your group
 * 2. Send any message in the group
 * 3. Run: npm run telegram:group-id
 */

import { readFileSync } from "fs";
import { resolve } from "path";

function loadEnv() {
  const envPath = resolve(process.cwd(), ".env.local");
  const text = readFileSync(envPath, "utf8");
  const env = {};

  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    env[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
  }

  return env;
}

const { TELEGRAM_BOT_TOKEN: token } = loadEnv();

if (!token) {
  console.error("TELEGRAM_BOT_TOKEN not found in .env.local");
  process.exit(1);
}

const response = await fetch(
  `https://api.telegram.org/bot${token}/getUpdates?limit=50`
);
const data = await response.json();

if (!data.ok) {
  console.error("Telegram API error:", data.description ?? data);
  process.exit(1);
}

const chats = new Map();

for (const update of data.result ?? []) {
  const chat =
    update.message?.chat ??
    update.my_chat_member?.chat ??
    update.chat_member?.chat;

  if (!chat?.id) continue;

  chats.set(String(chat.id), {
    id: chat.id,
    type: chat.type,
    title: chat.title ?? chat.first_name ?? chat.username ?? "—",
  });
}

if (chats.size === 0) {
  console.log("No chats found.");
  console.log("");
  console.log("Do this first:");
  console.log("1. Add the bot to your Telegram group");
  console.log("2. Send any message in the group");
  console.log("3. Run this script again");
  process.exit(0);
}

console.log("Found chats:\n");

for (const chat of chats.values()) {
  const marker =
    chat.type === "group" || chat.type === "supergroup" ? " ← use this for group" : "";
  console.log(`  ${chat.type.padEnd(12)} ${chat.id}  ${chat.title}${marker}`);
}

const group = [...chats.values()].find(
  (c) => c.type === "group" || c.type === "supergroup"
);

if (group) {
  console.log("\nAdd to .env.local:");
  console.log(`TELEGRAM_CHAT_ID=${group.id}`);
}
