/** Docs page: Scroll Area — texts in `locales/<lang>/scroll-area.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import ScrollAreaDemo from "../../examples/scroll-area/scroll-area-demo";
import scrollAreaDemoCode from "../../examples/scroll-area/scroll-area-demo?raw";
import ScrollAreaHorizontal from "../../examples/scroll-area/scroll-area-horizontal";
import scrollAreaHorizontalCode from "../../examples/scroll-area/scroll-area-horizontal?raw";

const USAGE_CODE = `
import { ScrollArea } from "@mestakara/ui/scroll-area";

<ScrollArea className="h-72 rounded-md border">
  …long content…
</ScrollArea>
`;

export default function ScrollAreaPage() {
  const { t } = useTranslation("scroll-area");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.navigation")}
        title="Scroll Area"
        description={t("description")}
      />

      <ComponentPreview example={ScrollAreaDemo} code={scrollAreaDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="scroll-area" exports={["ScrollArea", "ScrollBar"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="horizontal"
          title={t("examples.horizontal.title")}
          description={t("examples.horizontal.description")}
          example={ScrollAreaHorizontal}
          code={scrollAreaHorizontalCode}
        />
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "ScrollArea", element: "<div>", description: t("parts.root") },
            { name: "ScrollBar", element: "<div>", description: t("parts.scrollbar") },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            { name: "ScrollArea · className", type: "string", description: t("props.className") },
            {
              name: "ScrollArea · type",
              type: '"hover" | "scroll" | "auto" | "always"',
              default: '"hover"',
              description: t("props.type"),
            },
            {
              name: "ScrollBar · orientation",
              type: '"vertical" | "horizontal"',
              default: '"vertical"',
              description: t("props.orientation"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
