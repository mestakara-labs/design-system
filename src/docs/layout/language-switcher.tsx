import { LanguagesIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import { LANGUAGES } from "../i18n/languages";

/**
 * Language picker in the header. Options come from `i18n/languages.ts`.
 * It shows "ID" on phones and "ID — Bahasa Indonesia" on wider screens. The real control is an
 * invisible native <select> on top, so the browser shows its own (accessible) list.
 */
export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const current =
    LANGUAGES.find((language) => language.code === i18n.resolvedLanguage) ?? LANGUAGES[0];

  return (
    <label className="relative inline-flex h-9 shrink-0 items-center gap-2 rounded-sm border border-border bg-surface px-2.5 typo-label-s whitespace-nowrap text-fg-primary focus-within:outline-2 focus-within:outline-focus hover:bg-subtle">
      <LanguagesIcon className="size-4 text-fg-secondary" />
      <span aria-hidden="true">
        {current.shortLabel}
        <span className="hidden sm:inline"> — {current.label}</span>
      </span>
      <select
        aria-label={t("header.language")}
        value={current.code}
        onChange={(event) => i18n.changeLanguage(event.target.value)}
        className="absolute inset-0 cursor-pointer opacity-0"
      >
        {LANGUAGES.map((language) => (
          <option key={language.code} value={language.code}>
            {language.shortLabel} — {language.label}
          </option>
        ))}
      </select>
    </label>
  );
}
