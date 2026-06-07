const API_KEY_STORAGE = "gemini-chat-api-key";
const MODEL_STORAGE = "gemini-chat-model";
const MESSAGES_STORAGE = "gemini-chat-messages";

const DEFAULT_MODEL = "gemini-2.0-flash";
const MODELS = [
  { id: "gemini-2.5-flash", label: "Gemini 2.5 Flash" },
  { id: "gemini-2.5-pro", label: "Gemini 2.5 Pro" },
  { id: "gemini-2.0-flash", label: "Gemini 2.0 Flash" },
  { id: "gemini-2.0-flash-lite", label: "Gemini 2.0 Flash Lite" },
  { id: "gemini-1.5-flash", label: "Gemini 1.5 Flash" },
  { id: "gemini-1.5-pro", label: "Gemini 1.5 Pro" },
];

function loadMessages() {
  try {
    const raw = localStorage.getItem(MESSAGES_STORAGE);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveMessages(messages) {
  localStorage.setItem(MESSAGES_STORAGE, JSON.stringify(messages));
}

function nextId(messages) {
  return messages.length ? Math.max(...messages.map((m) => m.id)) + 1 : 1;
}

async function callGemini(apiKey, model, history, userMessage) {
  const contents = [
    ...history.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    })),
    { role: "user", parts: [{ text: userMessage }] },
  ];

  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/" +
    encodeURIComponent(model) +
    ":generateContent?key=" +
    encodeURIComponent(apiKey);

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contents }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error?.message || "Gemini request failed");
  }

  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Empty response from Gemini");
  return text;
}

function chatApp() {
  return {
    messages: [],
    input: "",
    apiKey: "",
    selectedModel: DEFAULT_MODEL,
    models: MODELS,
    showKey: false,
    loading: false,
    error: null,

    get hasApiKey() {
      return this.apiKey.trim().length > 0;
    },

    init() {
      this.apiKey = localStorage.getItem(API_KEY_STORAGE) || "";
      this.selectedModel = localStorage.getItem(MODEL_STORAGE) || DEFAULT_MODEL;
      if (!MODELS.some((m) => m.id === this.selectedModel)) {
        this.selectedModel = DEFAULT_MODEL;
      }
      this.messages = loadMessages();
      this.$nextTick(() => this.scrollToBottom());
    },

    saveApiKey() {
      if (this.apiKey.trim()) {
        localStorage.setItem(API_KEY_STORAGE, this.apiKey.trim());
      } else {
        localStorage.removeItem(API_KEY_STORAGE);
      }
    },

    clearApiKey() {
      this.apiKey = "";
      localStorage.removeItem(API_KEY_STORAGE);
    },

    saveModel() {
      localStorage.setItem(MODEL_STORAGE, this.selectedModel);
    },

    async sendMessage() {
      const text = this.input.trim();
      if (!text || this.loading || !this.hasApiKey) return;

      this.input = "";
      this.loading = true;
      this.error = null;

      try {
        const reply = await callGemini(
          this.apiKey.trim(),
          this.selectedModel,
          this.messages,
          text
        );

        const now = new Date().toISOString();
        const userMsg = { id: nextId(this.messages), role: "user", content: text, createdAt: now };
        const assistantMsg = {
          id: userMsg.id + 1,
          role: "assistant",
          content: reply,
          createdAt: new Date().toISOString(),
        };

        this.messages.push(userMsg, assistantMsg);
        saveMessages(this.messages);
        this.$nextTick(() => this.scrollToBottom());
      } catch (err) {
        this.error = err.message;
        this.input = text;
      } finally {
        this.loading = false;
      }
    },

    clearHistory() {
      if (!confirm("Clear all chat history?")) return;
      this.messages = [];
      localStorage.removeItem(MESSAGES_STORAGE);
      this.error = null;
    },

    scrollToBottom() {
      const el = this.$refs.messagesEl;
      if (el) el.scrollTop = el.scrollHeight;
    },

    formatTime(iso) {
      if (!iso) return "";
      const d = new Date(iso);
      return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    },
  };
}
