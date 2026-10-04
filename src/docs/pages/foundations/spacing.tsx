/**
 * Docs page: Foundations → Spacing
 * 4px grid (DESIGN.md §4). Tailwind's default scale already follows it: 1 unit = 4px.
 */
import { useTranslation } from "react-i18next";

import { PageHeader } from "../../page-parts/page-header";
import { Section } from "../../page-parts/section";

const SPACING_PX = [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64];

export default function SpacingPage() {
  const { t } = useTranslation("foundations");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("nav.foundations")}
        title={tCommon("nav.spacing")}
        description={t("spacing.description")}
      />

      <Section
        id="scale"
        title={t("spacing.scale.title")}
        description={t("spacing.scale.description")}
      >
        <div className="overflow-hidden rounded-md border border-border bg-surface">
          {SPACING_PX.map((px) => (
            <div
              key={px}
              className="flex items-center gap-4 border-b border-border px-4 py-3 last:border-b-0"
            >
              <span className="w-14 typo-label-m text-fg-primary">{px}px</span>
              <code className="w-20 font-mono text-[12px] text-fg-link">p-{px / 4}</code>
              <div className="h-4 rounded-xs bg-green-300" style={{ width: px }} />
            </div>
          ))}
        </div>
      </Section>

      <Section id="guidelines" title={t("spacing.guidelines.title")}>
        <ul className="list-disc pl-5 typo-body-m text-fg-secondary">
          <li>{t("spacing.guidelines.screenPadding")}</li>
          <li>{t("spacing.guidelines.cardGap")}</li>
          <li>{t("spacing.guidelines.cardPadding")}</li>
        </ul>
      </Section>
    </div>
  );
}
