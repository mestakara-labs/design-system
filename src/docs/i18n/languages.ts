/**
 * Languages of the documentation site.
 *
 * To add a language:
 *   1. Copy `locales/en` to `locales/<code>` and translate the JSON files.
 *   2. Add it to the list below.
 * The language picker in the header updates automatically.
 */
export const LANGUAGES = [
  { code: "id", label: "Bahasa Indonesia", shortLabel: "ID" },
  { code: "en", label: "English", shortLabel: "EN" },
] as const;

/** Used on the first visit, and whenever a translation is missing. */
export const DEFAULT_LANGUAGE = "id";
