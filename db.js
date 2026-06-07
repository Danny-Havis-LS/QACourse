import Database from "better-sqlite3";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, "data");
const DB_PATH = path.join(DATA_DIR, "chat.db");

let db = null;

function getDb() {
  if (!db) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    db = new Database(DB_PATH);
    db.pragma("journal_mode = WAL");
    db.exec(`
      CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
        content TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      )
    `);
  }
  return db;
}

export function getAllMessages() {
  return getDb()
    .prepare("SELECT id, role, content, created_at AS createdAt FROM messages ORDER BY id ASC")
    .all();
}

export function saveMessage(role, content) {
  const row = getDb()
    .prepare(
      "INSERT INTO messages (role, content) VALUES (?, ?) RETURNING id, role, content, created_at AS createdAt"
    )
    .get(role, content);
  return row;
}

export function clearMessages() {
  getDb().prepare("DELETE FROM messages").run();
}

export function getRecentMessages(limit = 40) {
  return getDb()
    .prepare(
      `SELECT role, content FROM messages
       ORDER BY id DESC LIMIT ?
       `
    )
    .all(limit)
    .reverse();
}
