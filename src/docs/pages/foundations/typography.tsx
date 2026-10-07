/**
 * Docs page: Foundations → Typography
 * Styles mirror `src/styles/typography.css` (DESIGN.md §3).
 */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { PageHeader } from "../../page-parts/page-header";
import { Section } from "../../page-parts/section";

const TEXT_STYLES = [
  { className: "typo-display-xl", figma: "Display/XL", spec: "Fraunces SemiBold · 48/56 · -1" },
  { className: "typo-display-l", figma: "Display/L", spec: "Fraunces SemiBold · 36/44 · -0.5" },
  { className: "typo-display-m", figma: "Display/M", spec: "Fraunces SemiBold · 28/36 · 0" },
  { className: "typo-h1", figma: "Heading/H1", spec: "Plus Jakarta Sans Bold · 28/36 · -0.3" },
  { className: "typo-h2", figma: "Heading/H2", spec: "Plus Jakarta Sans Bold · 22/30 · -0.2" },
  { className: "typo-h3", figma: "Heading/H3", spec: "Plus Jakarta Sans SemiBold · 18/26 · 0" },
  { className: "typo-body-l", figma: "Body/L", spec: "Plus Jakarta Sans Regular · 16/24 · 0" },
  { className: "typo-body-m", figma: "Body/M", spec: "Plus Jakarta Sans Regular · 14/20 · 0" },
  { className: "typo-body-s", figma: "Body/S", spec: "Plus Jakarta Sans Regular · 12/16 · 0" },
  { className: "typo-label-l", figma: "Label/L", spec: "Plus Jakarta Sans SemiBold · 16/24 · 0" },
  { className: "typo-label-m", figma: "Label/M", spec: "Plus Jakarta Sans SemiBold · 14/20 · 0" },
  { className: "typo-label-s", figma: "Label/S", spec: "Plus Jakarta Sans SemiBold · 12/16 · 0.2" },
  {
    className: "typo-overline",
    figma: "Caption/Overline",
    spec: "Plus Jakarta Sans Bold · 11/14 · 1.2",
  },
  {
    className: "typo-field",
    figma: "Body/M (Body/L < 768px)",
    spec: "Plus Jakarta Sans Regular · 14/20 · 16/24 on phones",
  },
];

/**
 * Which text style each kind of component part uses (same scale as shadcn/ui).
 * `key` points to the description in foundations.json → typography.components.rows.
 */
const COMPONENT_STYLES = [
  { key: "field", className: "typo-field" },
  { key: "body", className: "typo-body-m" },
  { key: "label", className: "typo-label-m" },
  { key: "small", className: "typo-body-s · typo-label-s" },
  { key: "panelTitle", className: "typo-label-l" },
  { key: "dialogTitle", className: "typo-h3" },
] as const;

const USAGE_CODE = `
<p className="typo-overline text-fg-accent">Rancabali Tea Valley</p>
<h1 className="typo-display-m text-fg-brand">Paket Petik Teh & Sarapan</h1>
<p className="typo-body-m text-fg-secondary">Sabtu, 17 Okt 2026 · 08.00–11.00</p>
`;

export default function TypographyPage() {
  const { t } = useTranslation("foundations");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("nav.foundations")}
        title={tCommon("nav.typography")}
        description={t("typography.description")}
      />

      <Section id="fonts" title={t("typography.fonts.title")}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2 rounded-lg border border-border bg-surface p-5">
            <p className="font-display text-[40px] leading-none text-fg-brand">Aa</p>
            <p className="typo-label-l">Fraunces</p>
            <p className="typo-body-s text-fg-secondary">{t("typography.fonts.fraunces")}</p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border border-border bg-surface p-5">
            <p className="font-sans text-[40px] leading-none font-bold text-fg-heading">Aa</p>
            <p className="typo-label-l">Plus Jakarta Sans</p>
            <p className="typo-body-s text-fg-secondary">{t("typography.fonts.jakarta")}</p>
          </div>
        </div>
      </Section>

      <Section
        id="text-styles"
        title={t("typography.styles.title")}
        description={t("typography.styles.description")}
      >
        <div className="overflow-hidden rounded-md border border-border bg-surface">
          {TEXT_STYLES.map((style) => (
            <div
              key={style.className}
              className="flex flex-col gap-2 border-b border-border px-4 py-4 last:border-b-0 sm:flex-row sm:items-center sm:gap-6"
            >
              <div className="w-48 shrink-0">
                <code className="block font-mono text-[12px] text-fg-link">{style.className}</code>
                <p className="typo-body-s text-fg-tertiary">{style.figma}</p>
                <p className="typo-body-s text-fg-tertiary">{style.spec}</p>
              </div>
              <p className={`${style.className} min-w-0 truncate text-fg-primary`}>
                Gunung Mas Tea Hills
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="components"
        title={t("typography.components.title")}
        description={t("typography.components.description")}
      >
        <div className="overflow-hidden rounded-md border border-border bg-surface">
          {COMPONENT_STYLES.map((row) => (
            <div
              key={row.key}
              className="flex flex-col gap-1 border-b border-border px-4 py-3 last:border-b-0 sm:flex-row sm:gap-6"
            >
              <code className="w-56 shrink-0 font-mono text-[12px] text-fg-link">
                {row.className}
              </code>
              <p className="typo-body-m text-fg-secondary">
                {t(`typography.components.rows.${row.key}`)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <ul className="list-disc pl-5 typo-body-m text-fg-secondary">
          <li>{t("typography.rules.oneFraunces")}</li>
          <li>{t("typography.rules.overline")}</li>
          <li>{t("typography.rules.noColor")}</li>
        </ul>
      </Section>
    </div>
  );
}
