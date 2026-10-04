/**
 * Landing page (/) — texts in `locales/<lang>/home.json`.
 *
 *   Hero            announcement · title · description · two buttons
 *   Showcase        grid of building blocks made of Mestakara UI components (landing/showcase.tsx)
 *   BlocksPreview   tabbed preview of featured blocks (landing/blocks-preview.tsx)
 */
import { ArrowRightIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";

import { BlocksPreview } from "../landing/blocks-preview";
import { Showcase } from "../landing/showcase";
import { componentPath, PATHS } from "../paths";

export default function HomePage() {
  const { t } = useTranslation("home");

  return (
    <>
      <section className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 py-16 text-center md:py-24">
        <Link
          to={componentPath("questionnaire")}
          className="inline-flex items-center gap-1.5 rounded-full bg-brand-subtle px-3 py-1 typo-label-s text-fg-brand transition-colors hover:bg-tonal-hover focus-visible:outline-2 focus-visible:outline-focus"
        >
          {t("hero.announcement")}
          <ArrowRightIcon className="size-3.5" />
        </Link>
        <h1 className="typo-display-l text-balance text-fg-brand">{t("hero.title")}</h1>
        <p className="max-w-2xl typo-body-l text-balance text-fg-secondary">
          {t("hero.description")}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link to={PATHS.installation}>{t("hero.getStarted")}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to={PATHS.components}>{t("hero.viewComponents")}</Link>
          </Button>
        </div>
      </section>

      <Showcase />
      <BlocksPreview />
    </>
  );
}
