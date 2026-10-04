/**
 * Blocks page (/blocks and /blocks/<category>) — texts in `locales/<lang>/blocks.json`.
 * The list of blocks comes from `src/blocks/registry.ts`.
 */
import { cn } from "cn";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router";

import { Button } from "@/components/ui/button";
import { BLOCK_CATEGORIES, getBlocks, type BlockCategory } from "@/blocks/registry";

import { BlockDisplay } from "../block-viewer/block-display";
import { blocksCategoryPath, PATHS } from "../paths";
import NotFoundPage from "./not-found";

export default function BlocksPage() {
  const { t } = useTranslation("blocks");
  const { category = "featured" } = useParams();

  if (!BLOCK_CATEGORIES.includes(category as BlockCategory)) return <NotFoundPage />;
  const blocks = getBlocks(category as BlockCategory);

  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col gap-10 px-4 py-12 md:px-6">
      {/* Hero */}
      <section className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <h1 className="typo-display-m text-fg-brand">{t("hero.title")}</h1>
        <p className="typo-body-l text-fg-secondary">{t("hero.description")}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild>
            <a href="#blocks">{t("hero.browse")}</a>
          </Button>
          <Button asChild variant="outline">
            <Link to={PATHS.components}>{t("hero.viewComponents")}</Link>
          </Button>
        </div>
      </section>

      {/* Category tabs. The grey base line is an inset shadow so the green line of the
          active tab fits inside the bar (no vertical scroll), same as Tabs variant="line". */}
      <nav
        id="blocks"
        className="flex scroll-mt-24 gap-1 overflow-x-auto shadow-[inset_0_-1px_0_var(--border-default)]"
      >
        {BLOCK_CATEGORIES.map((item) => (
          <Link
            key={item}
            to={blocksCategoryPath(item)}
            aria-current={item === category ? "page" : undefined}
            className={cn(
              "shrink-0 border-b-2 px-3 pb-2.5 typo-label-m transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus",
              item === category
                ? "border-primary text-fg-brand"
                : "border-transparent text-fg-secondary hover:text-fg-primary",
            )}
          >
            {t(`categories.${item}`)}
          </Link>
        ))}
      </nav>

      <div className="flex flex-col gap-16">
        {blocks.map((block) => (
          <BlockDisplay key={block.name} block={block} />
        ))}
      </div>
    </div>
  );
}
