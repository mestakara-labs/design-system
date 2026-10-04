import { ExternalLinkIcon, MonitorIcon, SmartphoneIcon, TabletIcon } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { BlockEntry } from "@/blocks/registry";

import { blockViewPath } from "../paths";
import { BlockCode } from "./block-code";

/** Preview widths for the screen-size buttons. */
const SCREEN_SIZES = {
  desktop: { width: "100%", icon: MonitorIcon },
  tablet: { width: "768px", icon: TabletIcon },
  mobile: { width: "375px", icon: SmartphoneIcon },
} as const;

type ScreenSize = keyof typeof SCREEN_SIZES;

/**
 * One block on the /blocks page (like ui.shadcn.com/blocks):
 *
 *   Description  login-01             [Preview | Kode]  [🖥 💻 📱]  [↗]
 *   ┌──────────────────────────────────────────────────────────────────┐
 *   │  <iframe src="/view/login-01">  — or the code, file by file      │
 *   └──────────────────────────────────────────────────────────────────┘
 *
 * The preview is an iframe so the block gets a real page of its own: full-screen layouts
 * (sidebar, dashboard) fit, and the screen-size buttons show the true phone layout.
 */
export function BlockDisplay({ block }: { block: BlockEntry }) {
  const { t } = useTranslation("blocks");
  const [screenSize, setScreenSize] = useState<ScreenSize>("desktop");

  return (
    <Tabs defaultValue="preview" id={block.name} className="scroll-mt-24 gap-3">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <a href={`#${block.name}`} className="flex flex-col hover:underline sm:flex-row sm:gap-2">
          <span className="typo-label-l text-fg-primary">{t(`items.${block.name}`)}</span>
          <code className="font-mono text-[13px] text-fg-tertiary">{block.name}</code>
        </a>

        <div className="ml-auto flex items-center gap-2">
          <TabsList>
            <TabsTrigger value="preview">{t("toolbar.preview")}</TabsTrigger>
            <TabsTrigger value="code">{t("toolbar.code")}</TabsTrigger>
          </TabsList>

          {/* Screen sizes only make sense on a wide screen. */}
          <ToggleGroup
            type="single"
            variant="outline"
            size="sm"
            value={screenSize}
            onValueChange={(value) => value && setScreenSize(value as ScreenSize)}
            className="hidden lg:flex"
          >
            {(Object.keys(SCREEN_SIZES) as ScreenSize[]).map((size) => {
              const Icon = SCREEN_SIZES[size].icon;
              return (
                <ToggleGroupItem key={size} value={size} aria-label={t(`toolbar.${size}`)}>
                  <Icon />
                </ToggleGroupItem>
              );
            })}
          </ToggleGroup>

          <Button asChild variant="outline" size="icon-sm">
            <a
              href={blockViewPath(block.name)}
              target="_blank"
              rel="noreferrer"
              aria-label={t("toolbar.openInNewTab")}
            >
              <ExternalLinkIcon />
            </a>
          </Button>
        </div>
      </div>

      <TabsContent value="preview">
        <div className="overflow-hidden rounded-lg border border-border bg-subtle">
          <iframe
            src={blockViewPath(block.name)}
            title={t(`items.${block.name}`)}
            loading="lazy"
            className="mx-auto block bg-canvas transition-[min-width] duration-300"
            // width 1px + min-width: iOS Safari otherwise widens an iframe to fit its content.
            style={{ width: 1, minWidth: SCREEN_SIZES[screenSize].width, height: block.height }}
          />
        </div>
      </TabsContent>

      <TabsContent value="code">
        <BlockCode name={block.name} />
      </TabsContent>
    </Tabs>
  );
}
