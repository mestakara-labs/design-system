import { ArrowRightIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { blockViewPath, PATHS } from "../paths";

/** Featured blocks shown on the landing page. Labels are in `locales/<lang>/home.json`. */
const PREVIEW_BLOCKS = [
  { name: "dashboard-01", labelKey: "blocks.tabs.dashboard" },
  { name: "sidebar-07", labelKey: "blocks.tabs.sidebar" },
  { name: "login-04", labelKey: "blocks.tabs.login" },
] as const;

/** A tabbed preview of a few blocks from the /blocks page. */
export function BlocksPreview() {
  const { t } = useTranslation("home");

  return (
    <section className="mx-auto flex max-w-screen-2xl flex-col items-center gap-6 px-4 py-16 md:px-6">
      <div className="flex max-w-2xl flex-col items-center gap-3 text-center">
        <h2 className="typo-display-m text-fg-brand">{t("blocks.title")}</h2>
        <p className="typo-body-l text-fg-secondary">{t("blocks.description")}</p>
      </div>

      <Tabs defaultValue={PREVIEW_BLOCKS[0].name} className="w-full items-center">
        <TabsList>
          {PREVIEW_BLOCKS.map((block) => (
            <TabsTrigger key={block.name} value={block.name}>
              {t(block.labelKey)}
            </TabsTrigger>
          ))}
        </TabsList>
        {PREVIEW_BLOCKS.map((block) => (
          <TabsContent key={block.name} value={block.name} className="w-full">
            {/* The block runs on its own page inside the frame, just like on /blocks.
                `w-px min-w-full`: iOS Safari otherwise widens an iframe to fit its content. */}
            <iframe
              src={blockViewPath(block.name)}
              title={t(block.labelKey)}
              loading="lazy"
              className="h-[720px] w-px min-w-full rounded-lg border border-border bg-canvas shadow-md"
            />
          </TabsContent>
        ))}
      </Tabs>

      <Button asChild variant="outline">
        <Link to={PATHS.blocks}>
          {t("blocks.viewAll")}
          <ArrowRightIcon />
        </Link>
      </Button>
    </section>
  );
}
