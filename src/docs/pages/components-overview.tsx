/** Docs page: list of every component, grouped by category (built from `registry.ts`). */
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import { PageHeader } from "../page-parts/page-header";
import { Section } from "../page-parts/section";
import { COMPONENT_CATEGORIES, COMPONENTS } from "../registry";
import { componentPath } from "../paths";

export default function ComponentsOverviewPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader title={t("nav.components")} description={t("componentsOverview.description")} />

      {COMPONENT_CATEGORIES.map((category) => {
        const components = COMPONENTS.filter((component) => component.category === category);
        if (components.length === 0) return null;

        return (
          <Section key={category} id={category} title={t(`categories.${category}`)}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {components.map((component) => (
                <Link
                  key={component.slug}
                  to={componentPath(component.slug)}
                  className="rounded-md border border-border bg-surface px-4 py-3 typo-label-m text-fg-primary transition-colors hover:border-border-strong hover:bg-subtle focus-visible:outline-2 focus-visible:outline-focus"
                >
                  {component.name}
                </Link>
              ))}
            </div>
          </Section>
        );
      })}
    </div>
  );
}
