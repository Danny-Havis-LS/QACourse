import { GoogleGenerativeAI } from "@google/generative-ai";
import { DEFAULT_MODEL } from "./models.js";

export async function chatWithGemini(apiKey, history, userMessage, modelName = DEFAULT_MODEL) {
  if (!apiKey || typeof apiKey !== "string" || !apiKey.trim()) {
    throw new Error("API key is required");
  }

  const genAI = new GoogleGenerativeAI(apiKey.trim());
  const model = genAI.getGenerativeModel({ model: modelName });

  const contents = [
    ...history.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    })),
    { role: "user", parts: [{ text: userMessage }] },
  ];

  const result = await model.generateContent({ contents });
  const text = result.response.text();

  if (!text) {
    throw new Error("Empty response from Gemini");
  }

  return text;
}
