/**
 * Docs page: Foundations → Radius
 * Values mirror the `--radius-*` tokens in `src/styles/theme.css` (DESIGN.md §4).
 */
import { useTranslation } from "react-i18next";

import { PageHeader } from "../../page-parts/page-header";
import { Section } from "../../page-parts/section";

const RADII = [
  { className: "rounded-xs", value: "4px", usageKey: "xs" },
  { className: "rounded-sm", value: "8px", usageKey: "sm" },
  { className: "rounded-md", value: "12px", usageKey: "md" },
  { className: "rounded-lg", value: "16px", usageKey: "lg" },
  { className: "rounded-xl", value: "24px", usageKey: "xl" },
  { className: "rounded-full", value: "9999px", usageKey: "full" },
] as const;

export default function RadiusPage() {
  const { t } = useTranslation("foundations");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("nav.foundations")}
        title={tCommon("nav.radius")}
        description={t("radius.description")}
      />

      <Section id="scale" title={t("radius.scale.title")}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {RADII.map((radius) => (
            <div key={radius.className} className="flex flex-col gap-3">
              <div
                className={`${radius.className} h-24 border-2 border-green-600 bg-brand-subtle`}
              />
              <div>
                <code className="block font-mono text-[12px] text-fg-link">{radius.className}</code>
                <p className="typo-label-s text-fg-primary">{radius.value}</p>
                <p className="typo-body-s text-fg-secondary">
                  {t(`radius.usage.${radius.usageKey}`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
