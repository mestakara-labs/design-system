import { useEffect, useState } from "react";

import { highlightCode, type CodeLanguage } from "../lib/highlighter";
import { CopyButton } from "./copy-button";

type CodeBlockProps = {
  code: string;
  language?: CodeLanguage;
};

/** Highlighted code with a copy button. */
export function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  const cleanCode = code.trim();
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    highlightCode(cleanCode, language).then((result) => {
      if (!cancelled) setHtml(result);
    });
    return () => {
      cancelled = true;
    };
  }, [cleanCode, language]);

  return (
    <div className="relative rounded-md border border-border bg-subtle">
      {/* Own background, so long lines that scroll underneath stay readable. */}
      <div className="absolute top-2 right-2 z-10 rounded-sm bg-subtle">
        <CopyButton text={cleanCode} />
      </div>

      {html ? (
        // Shiki returns a ready-made <pre>. Its own background is removed in docs.css.
        <div className="code-block" dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        // Plain text while the highlighter loads.
        <pre className="code-block">
          <code>{cleanCode}</code>
        </pre>
      )}
    </div>
  );
}
