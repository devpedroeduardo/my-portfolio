// src/i18n/index.ts
// Idiomas do site. Português fica na raiz (/) e inglês em /en/.
export type Lang = "pt" | "en";

export const langs: Lang[] = ["pt", "en"];

export const homePath: Record<Lang, string> = {
  pt: "/",
  en: "/en/",
};

/** Escolhe o texto do idioma atual a partir de um objeto { pt, en }. */
export function pick<T>(lang: Lang, text: Record<Lang, T>): T {
  return text[lang] ?? text.pt;
}
