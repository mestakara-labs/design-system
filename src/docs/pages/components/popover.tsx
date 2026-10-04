/** Docs page: Popover — texts in `locales/<lang>/popover.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import PopoverDemo from "../../examples/popover/popover-demo";
import popoverDemoCode from "../../examples/popover/popover-demo?raw";
import PopoverForm from "../../examples/popover/popover-form";
import popoverFormCode from "../../examples/popover/popover-form?raw";

const USAGE_CODE = `
import { Popover, PopoverContent, PopoverTrigger } from "@mestakara/ui/popover";

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Info Harga</Button>
  </PopoverTrigger>
  <PopoverContent>Harga sudah termasuk tiket masuk.</PopoverContent>
</Popover>
`;

export default function PopoverPage() {
  const { t } = useTranslation("popover");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.overlay")}
        title="Popover"
        description={t("description")}
      />

      <ComponentPreview example={PopoverDemo} code={popoverDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="popover"
          exports={["Popover", "PopoverContent", "PopoverTrigger"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="form"
          title={t("examples.form.title")}
          description={t("examples.form.description")}
          example={PopoverForm}
          code={popoverFormCode}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            { name: "Popover · open", type: "boolean", description: t("props.open") },
            {
              name: "Popover · onOpenChange",
              type: "(open: boolean) => void",
              description: t("props.onOpenChange"),
            },
            {
              name: "PopoverTrigger · asChild",
              type: "boolean",
              default: "false",
              description: t("props.asChild"),
            },
            {
              name: "PopoverContent · side",
              type: '"top" | "right" | "bottom" | "left"',
              default: '"bottom"',
              description: t("props.side"),
            },
            {
              name: "PopoverContent · align",
              type: '"start" | "center" | "end"',
              default: '"center"',
              description: t("props.align"),
            },
            {
              name: "PopoverContent · sideOffset",
              type: "number",
              default: "6",
              description: t("props.sideOffset"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
