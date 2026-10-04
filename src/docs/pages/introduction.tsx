/** Docs page: Introduction (home page). */
import { ArrowRightIcon, LeafIcon, ShieldCheckIcon, SunIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";

import { Section } from "../page-parts/section";
import { foundationPath, PATHS } from "../paths";

const PRINCIPLES = [
  { key: "warm", Icon: SunIcon },
  { key: "natural", Icon: LeafIcon },
  { key: "trusted", Icon: ShieldCheckIcon },
] as const;

export default function IntroductionPage() {
  const { t } = useTranslation("introduction");

  return (
    <div className="flex flex-col gap-12">
      {/* Hero — dark background + one Fraunces title, as described in DESIGN.md §6 */}
      <header className="flex flex-col gap-4 rounded-xl bg-inverse px-6 py-10 md:px-10 md:py-14">
        <p className="typo-overline text-premium">{t("hero.overline")}</p>
        <h1 className="max-w-xl typo-display-l text-fg-on-brand md:typo-display-xl">
          {t("hero.title")}
        </h1>
        <p className="max-w-xl typo-body-l text-forest-100">{t("hero.description")}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild size="lg">
            <Link to={PATHS.installation}>
              {t("hero.getStarted")}
              <ArrowRightIcon />
            </Link>
          </Button>
          <Button asChild size="lg" variant="tonal">
            <Link to={PATHS.components}>{t("hero.browseComponents")}</Link>
          </Button>
        </div>
      </header>

      <Section id="principles" title={t("principles.title")}>
        <div className="grid gap-4 sm:grid-cols-3">
          {PRINCIPLES.map(({ key, Icon }) => (
            <div
              key={key}
              className="flex flex-col gap-2 rounded-lg border border-border bg-surface p-5"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-subtle text-fg-brand">
                <Icon className="size-5" />
              </span>
              <p className="typo-label-l text-fg-primary">{t(`principles.${key}.title`)}</p>
              <p className="typo-body-m text-fg-secondary">{t(`principles.${key}.description`)}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="whats-inside" title={t("inside.title")}>
        <ul className="flex flex-col gap-2 typo-body-m text-fg-secondary">
          <li>
            <Link
              to={foundationPath("colors")}
              className="font-semibold text-fg-link hover:underline"
            >
              {t("inside.foundations.title")}
            </Link>{" "}
            — {t("inside.foundations.description")}
          </li>
          <li>
            <Link to={PATHS.components} className="font-semibold text-fg-link hover:underline">
              {t("inside.components.title")}
            </Link>{" "}
            — {t("inside.components.description")}
          </li>
          <li>
            <Link to={PATHS.installation} className="font-semibold text-fg-link hover:underline">
              {t("inside.installation.title")}
            </Link>{" "}
            — {t("inside.installation.description")}
          </li>
        </ul>
      </Section>

      <Section id="source" title={t("source.title")}>
        <p className="typo-body-m text-fg-secondary">{t("source.description")}</p>
      </Section>
    </div>
  );
}
