/**
 * Syntax highlighting for code blocks (Shiki).
 * Only the languages used in the docs are loaded, to keep the site small.
 * Need another language? Add one line to `langs`.
 */
import { createHighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

export type CodeLanguage = "tsx" | "bash" | "css" | "json";

// Created once and shared by every <CodeBlock>.
const highlighterPromise = createHighlighterCore({
  themes: [import("shiki/themes/github-light.mjs")],
  langs: [
    import("shiki/langs/tsx.mjs"),
    import("shiki/langs/bash.mjs"),
    import("shiki/langs/css.mjs"),
    import("shiki/langs/json.mjs"),
  ],
  engine: createJavaScriptRegexEngine(),
});

/** Returns the code as highlighted HTML. */
export async function highlightCode(code: string, language: CodeLanguage) {
  const highlighter = await highlighterPromise;
  return highlighter.codeToHtml(code, { lang: language, theme: "github-light" });
}
