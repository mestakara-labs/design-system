/**
 * `npm run i18n:check`
 * Makes sure every language has exactly the same translation files and keys as Indonesian (`id`).
 * Prints what is missing or extra, and fails (exit code 1) if anything is wrong.
 */
import fs from "node:fs";
import path from "node:path";

const LOCALES_DIR = path.resolve(import.meta.dirname, "../src/docs/i18n/locales");
const REFERENCE_LANGUAGE = "id";

/** { a: { b: "x" }, c: "y" }  →  ["a.b", "c"] */
function listKeys(object, prefix = "") {
  return Object.entries(object).flatMap(([key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    return typeof value === "object" && value !== null ? listKeys(value, fullKey) : [fullKey];
  });
}

function readKeys(language, file) {
  const content = fs.readFileSync(path.join(LOCALES_DIR, language, file), "utf8");
  return new Set(listKeys(JSON.parse(content)));
}

const languages = fs.readdirSync(LOCALES_DIR).filter((name) => name !== REFERENCE_LANGUAGE);
const referenceFiles = fs.readdirSync(path.join(LOCALES_DIR, REFERENCE_LANGUAGE));
const problems = [];

for (const language of languages) {
  const files = fs.readdirSync(path.join(LOCALES_DIR, language));

  for (const file of referenceFiles) {
    if (!files.includes(file)) {
      problems.push(`[${language}] missing file: ${file}`);
      continue;
    }
    const expected = readKeys(REFERENCE_LANGUAGE, file);
    const actual = readKeys(language, file);
    for (const key of expected)
      if (!actual.has(key)) problems.push(`[${language}] ${file} missing key: ${key}`);
    for (const key of actual)
      if (!expected.has(key)) problems.push(`[${language}] ${file} extra key: ${key}`);
  }

  for (const file of files) {
    if (!referenceFiles.includes(file)) problems.push(`[${language}] extra file: ${file}`);
  }
}

if (problems.length > 0) {
  console.error(`i18n check failed (${problems.length} problem(s)):\n` + problems.join("\n"));
  process.exit(1);
}
console.log(
  `i18n check passed: ${languages.length + 1} languages, ${referenceFiles.length} files each.`,
);
