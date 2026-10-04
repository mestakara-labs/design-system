import { cn } from "cn";
import { useTranslation } from "react-i18next";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CodeBlock } from "./code-block";

type ComponentPreviewProps = {
  /** The example component to render. */
  example: React.ComponentType;
  /** Source code of the example (imported with `?raw`). */
  code: string;
  className?: string;
};

/**
 * Shows a live example with a "Preview / Code" switch (built with the design system's own Tabs).
 *
 * Usage in a docs page:
 *   import ButtonDemo from "../../examples/button/button-demo";
 *   import buttonDemoCode from "../../examples/button/button-demo?raw";
 *   <ComponentPreview example={ButtonDemo} code={buttonDemoCode} />
 */
export function ComponentPreview({ example: Example, code, className }: ComponentPreviewProps) {
  const { t } = useTranslation();

  // Examples import from "@/components/ui/…"; apps import from "@mestakara/ui/…".
  const codeForApps = code.replaceAll("@/components/ui/", "@mestakara/ui/");

  return (
    <Tabs defaultValue="preview" className="gap-2">
      <TabsList variant="line" className="w-full">
        <TabsTrigger value="preview">{t("preview.preview")}</TabsTrigger>
        <TabsTrigger value="code">{t("preview.code")}</TabsTrigger>
      </TabsList>

      <TabsContent value="preview">
        <div
          className={cn(
            "flex min-h-48 flex-wrap items-center justify-center gap-4 rounded-md border border-border bg-surface p-8",
            className,
          )}
        >
          <Example />
        </div>
      </TabsContent>
      <TabsContent value="code">
        <CodeBlock code={codeForApps} />
      </TabsContent>
    </Tabs>
  );
}
