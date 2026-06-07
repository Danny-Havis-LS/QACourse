import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { chatWithGemini } from "./gemini.js";
import {
  clearMessages,
  getAllMessages,
  getRecentMessages,
  saveMessage,
} from "./db.js";
import { DEFAULT_MODEL, GEMINI_MODELS, isValidModel, resolveModel } from "./models.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/messages", (_req, res) => {
  res.json(getAllMessages());
});

app.post("/api/chat", async (req, res) => {
  const { message, apiKey, model } = req.body;

  if (!apiKey || typeof apiKey !== "string" || !apiKey.trim()) {
    return res.status(400).json({ error: "API key is required" });
  }

  if (!message || typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "Message is required" });
  }

  if (model !== undefined && (typeof model !== "string" || !isValidModel(model))) {
    return res.status(400).json({ error: "Invalid model selected" });
  }

  const trimmed = message.trim();
  const selectedModel = resolveModel(model);

  try {
    const history = getRecentMessages();
    const reply = await chatWithGemini(apiKey, history, trimmed, selectedModel);

    const userMsg = saveMessage("user", trimmed);
    const assistantMsg = saveMessage("assistant", reply);

    res.json({ user: userMsg, assistant: assistantMsg });
  } catch (err) {
    console.error("Chat error:", err.message);
    res.status(500).json({
      error: err.message || "Failed to get response from Gemini",
    });
  }
});

app.delete("/api/messages", (_req, res) => {
  clearMessages();
  res.status(204).end();
});

app.get("/api/models", (_req, res) => {
  res.json({ models: GEMINI_MODELS, default: DEFAULT_MODEL });
});

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    defaultModel: DEFAULT_MODEL,
  });
});

app.listen(PORT, () => {
  console.log(`Gemini chat running at http://localhost:${PORT}`);
});
