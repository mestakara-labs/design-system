import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type Heading = { id: string; text: string };

/**
 * "On this page" menu on the right.
 * It reads every <Section> heading of the current page, so pages never list them by hand.
 */
export function TableOfContents() {
  const { t } = useTranslation();
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    function collectHeadings(container: HTMLElement) {
      const found: Heading[] = [];
      container.querySelectorAll<HTMLElement>("section[id]").forEach((section) => {
        const h2 = section.querySelector(":scope > div > h2");
        if (h2) found.push({ id: section.id, text: h2.textContent ?? "" });
      });
      setHeadings(found);
    }

    // Re-read whenever the page content changes (navigation, language switch, lazy loading).
    collectHeadings(main);
    const observer = new MutationObserver(() => collectHeadings(main));
    observer.observe(main, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="flex flex-col gap-2 py-10 pr-4">
      <p className="typo-label-s text-fg-primary">{t("toc.onThisPage")}</p>
      {headings.map((heading) => (
        <a
          key={heading.id}
          href={`#${heading.id}`}
          className="typo-body-s text-fg-secondary hover:text-fg-primary"
        >
          {heading.text}
        </a>
      ))}
    </nav>
  );
}
