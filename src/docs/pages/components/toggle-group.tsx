/** Docs page: Toggle Group — texts in `locales/<lang>/toggle-group.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import ToggleGroupDemo from "../../examples/toggle-group/toggle-group-demo";
import toggleGroupDemoCode from "../../examples/toggle-group/toggle-group-demo?raw";
import ToggleGroupDisabled from "../../examples/toggle-group/toggle-group-disabled";
import toggleGroupDisabledCode from "../../examples/toggle-group/toggle-group-disabled?raw";
import ToggleGroupMultiple from "../../examples/toggle-group/toggle-group-multiple";
import toggleGroupMultipleCode from "../../examples/toggle-group/toggle-group-multiple?raw";
import ToggleGroupSpacing from "../../examples/toggle-group/toggle-group-spacing";
import toggleGroupSpacingCode from "../../examples/toggle-group/toggle-group-spacing?raw";

const USAGE_CODE = `
import { ToggleGroup, ToggleGroupItem } from "@mestakara/ui/toggle-group";

<ToggleGroup type="single" defaultValue="semua">
  <ToggleGroupItem value="semua">Semua</ToggleGroupItem>
  <ToggleGroupItem value="teh">Teh</ToggleGroupItem>
</ToggleGroup>
`;

export default function ToggleGroupPage() {
  const { t } = useTranslation("toggle-group");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.form")}
        title="Toggle Group"
        description={t("description")}
      />

      <ComponentPreview example={ToggleGroupDemo} code={toggleGroupDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="toggle-group" exports={["ToggleGroup", "ToggleGroupItem"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="multiple"
          title={t("examples.multiple.title")}
          description={t("examples.multiple.description")}
          example={ToggleGroupMultiple}
          code={toggleGroupMultipleCode}
        />
        <Example
          id="spacing"
          title={t("examples.spacing.title")}
          description={t("examples.spacing.description")}
          example={ToggleGroupSpacing}
          code={toggleGroupSpacingCode}
        />
        <Example
          id="disabled"
          title={t("examples.disabled.title")}
          description={t("examples.disabled.description")}
          example={ToggleGroupDisabled}
          code={toggleGroupDisabledCode}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "ToggleGroup · type",
              type: '"single" | "multiple"',
              description: t("props.type"),
            },
            {
              name: "ToggleGroup · value",
              type: "string | string[]",
              description: t("props.value"),
            },
            {
              name: "ToggleGroup · onValueChange",
              type: "(value) => void",
              description: t("props.onValueChange"),
            },
            {
              name: "ToggleGroup · variant",
              type: '"default" | "outline"',
              default: '"default"',
              description: t("props.variant"),
            },
            {
              name: "ToggleGroup · size",
              type: '"sm" | "md" | "lg"',
              default: '"md"',
              description: t("props.size"),
            },
            {
              name: "ToggleGroup · spacing",
              type: "number",
              default: "0",
              description: t("props.spacing"),
            },
            { name: "ToggleGroupItem · value", type: "string", description: t("props.itemValue") },
          ]}
        />
      </Section>
    </div>
  );
}
