/** Docs page: Sheet — texts in `locales/<lang>/sheet.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import SheetDemo from "../../examples/sheet/sheet-demo";
import sheetDemoCode from "../../examples/sheet/sheet-demo?raw";
import SheetSides from "../../examples/sheet/sheet-sides";
import sheetSidesCode from "../../examples/sheet/sheet-sides?raw";

const USAGE_CODE = `
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@mestakara/ui/sheet";

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Filter</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Filter Paket</SheetTitle>
    </SheetHeader>
  </SheetContent>
</Sheet>
`;

export default function SheetPage() {
  const { t } = useTranslation("sheet");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.overlay")}
        title="Sheet"
        description={t("description")}
      />

      <ComponentPreview example={SheetDemo} code={sheetDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="sheet"
          exports={["Sheet", "SheetContent", "SheetHeader", "SheetTitle", "SheetTrigger"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="sides"
          title={t("examples.sides.title")}
          description={t("examples.sides.description")}
          example={SheetSides}
          code={sheetSidesCode}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "SheetContent · side",
              type: '"top" | "right" | "bottom" | "left"',
              default: '"right"',
              description: t("props.side"),
            },
            {
              name: "SheetContent · showCloseButton",
              type: "boolean",
              default: "true",
              description: t("props.showCloseButton"),
            },
            {
              name: "SheetContent · closeLabel",
              type: "string",
              default: '"Tutup"',
              description: t("props.closeLabel"),
            },
            { name: "Sheet · open", type: "boolean", description: t("props.open") },
          ]}
        />
      </Section>
    </div>
  );
}
