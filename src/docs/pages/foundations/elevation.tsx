/**
 * Docs page: Foundations → Elevation
 * Values mirror the `--shadow-*` tokens in `src/styles/theme.css` (DESIGN.md §4).
 */
import { useTranslation } from "react-i18next";

import { PageHeader } from "../../page-parts/page-header";
import { Section } from "../../page-parts/section";

const ELEVATIONS = [
  { className: "shadow-sm", figma: "Elevation/1", usageKey: "level1" },
  { className: "shadow-md", figma: "Elevation/2", usageKey: "level2" },
  { className: "shadow-lg", figma: "Elevation/3", usageKey: "level3" },
] as const;

export default function ElevationPage() {
  const { t } = useTranslation("foundations");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("nav.foundations")}
        title={tCommon("nav.elevation")}
        description={t("elevation.description")}
      />

      <Section id="levels" title={t("elevation.levels.title")}>
        <div className="grid gap-6 rounded-lg bg-subtle p-6 sm:grid-cols-3">
          {ELEVATIONS.map((elevation) => (
            <div
              key={elevation.className}
              className={`${elevation.className} flex h-36 flex-col justify-end gap-1 rounded-lg bg-surface p-4`}
            >
              <code className="font-mono text-[12px] text-fg-link">{elevation.className}</code>
              <p className="typo-label-m text-fg-primary">{elevation.figma}</p>
              <p className="typo-body-s text-fg-secondary">
                {t(`elevation.usage.${elevation.usageKey}`)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="guidelines" title={t("elevation.guidelines.title")}>
        <ul className="list-disc pl-5 typo-body-m text-fg-secondary">
          <li>{t("elevation.guidelines.borderOrShadow")}</li>
          <li>{t("elevation.guidelines.noHeavy")}</li>
        </ul>
      </Section>
    </div>
  );
}
