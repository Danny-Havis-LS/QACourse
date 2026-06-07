export const DEFAULT_MODEL = "gemini-2.0-flash";

export const GEMINI_MODELS = [
  { id: "gemini-2.5-flash", label: "Gemini 2.5 Flash" },
  { id: "gemini-2.5-pro", label: "Gemini 2.5 Pro" },
  { id: "gemini-2.0-flash", label: "Gemini 2.0 Flash" },
  { id: "gemini-2.0-flash-lite", label: "Gemini 2.0 Flash Lite" },
  { id: "gemini-1.5-flash", label: "Gemini 1.5 Flash" },
  { id: "gemini-1.5-pro", label: "Gemini 1.5 Pro" },
];

export function isValidModel(model) {
  return GEMINI_MODELS.some((m) => m.id === model);
}

export function resolveModel(model) {
  if (model && isValidModel(model)) return model;
  return DEFAULT_MODEL;
}
