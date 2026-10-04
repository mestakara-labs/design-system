import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

/** Small icon button that copies `text` to the clipboard. */
export function CopyButton({ text }: { text: string }) {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? t("preview.copied") : t("preview.copy")}
      title={copied ? t("preview.copied") : t("preview.copy")}
      className="inline-flex size-8 cursor-pointer items-center justify-center rounded-sm text-fg-secondary hover:bg-muted hover:text-fg-primary focus-visible:outline-2 focus-visible:outline-focus"
    >
      {copied ? <CheckIcon className="size-4" /> : <CopyIcon className="size-4" />}
    </button>
  );
}
