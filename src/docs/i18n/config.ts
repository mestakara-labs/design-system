/**
 * i18next setup for the documentation site (NOT part of the npm package).
 *
 * Translations live in `locales/<language>/<namespace>.json`, for example:
 *   locales/id/common.json   → shared site texts (menu, buttons)
 *   locales/id/button.json   → texts of the Button page
 *
 * In a component:  const { t } = useTranslation("button");  t("description")
 */
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { DEFAULT_LANGUAGE, LANGUAGES } from "./languages";

// Load every JSON file inside `locales/`, so new files never need to be registered by hand.
const files = import.meta.glob<Record<string, unknown>>("./locales/*/*.json", {
  eager: true,
  import: "default",
});

// Turn the file list into the shape i18next expects: { id: { common: {...}, button: {...} }, en: {...} }
const resources: Record<string, Record<string, Record<string, unknown>>> = {};
for (const [path, content] of Object.entries(files)) {
  // path looks like "./locales/id/button.json"
  const [, language, namespace] = path.split("/").slice(1);
  resources[language] ??= {};
  resources[language][namespace.replace(".json", "")] = content;
}

void i18n
  .use(LanguageDetector) // remembers the chosen language in localStorage
  .use(initReactI18next) // connects i18next to React (`useTranslation`)
  .init({
    resources,
    supportedLngs: LANGUAGES.map((language) => language.code),
    fallbackLng: DEFAULT_LANGUAGE,
    defaultNS: "common",
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
      lookupLocalStorage: "mestakara-docs-language",
    },
    interpolation: { escapeValue: false }, // React already escapes text
  });

// Keep <html lang="…"> in sync for screen readers and SEO.
i18n.on("languageChanged", (language) => {
  document.documentElement.lang = language;
});

export default i18n;
