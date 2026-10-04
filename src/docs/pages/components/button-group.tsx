/** Docs page: Button Group — texts in `locales/<lang>/button-group.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import ButtonGroupDemo from "../../examples/button-group/button-group-demo";
import buttonGroupDemoCode from "../../examples/button-group/button-group-demo?raw";
import ButtonGroupQuantity from "../../examples/button-group/button-group-quantity";
import buttonGroupQuantityCode from "../../examples/button-group/button-group-quantity?raw";
import ButtonGroupSeparatorExample from "../../examples/button-group/button-group-separator";
import buttonGroupSeparatorCode from "../../examples/button-group/button-group-separator?raw";
import ButtonGroupVertical from "../../examples/button-group/button-group-vertical";
import buttonGroupVerticalCode from "../../examples/button-group/button-group-vertical?raw";
import ButtonGroupWithInput from "../../examples/button-group/button-group-with-input";
import buttonGroupWithInputCode from "../../examples/button-group/button-group-with-input?raw";

const USAGE_CODE = `
import { ButtonGroup } from "@mestakara/ui/button-group";

<ButtonGroup>
  <Button variant="outline">Unduh PDF</Button>
  <Button variant="outline">Cetak</Button>
</ButtonGroup>
`;

export default function ButtonGroupPage() {
  const { t } = useTranslation("button-group");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.form")}
        title="Button Group"
        description={t("description")}
      />

      <ComponentPreview example={ButtonGroupDemo} code={buttonGroupDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="button-group"
          exports={["ButtonGroup", "ButtonGroupSeparator", "ButtonGroupText"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="with-input"
          title={t("examples.withInput.title")}
          description={t("examples.withInput.description")}
          example={ButtonGroupWithInput}
          code={buttonGroupWithInputCode}
        />
        <Example
          id="quantity"
          title={t("examples.quantity.title")}
          description={t("examples.quantity.description")}
          example={ButtonGroupQuantity}
          code={buttonGroupQuantityCode}
        />
        <Example
          id="separator"
          title={t("examples.separator.title")}
          description={t("examples.separator.description")}
          example={ButtonGroupSeparatorExample}
          code={buttonGroupSeparatorCode}
        />
        <Example
          id="vertical"
          title={t("examples.vertical.title")}
          description={t("examples.vertical.description")}
          example={ButtonGroupVertical}
          code={buttonGroupVerticalCode}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "ButtonGroup · orientation",
              type: '"horizontal" | "vertical"',
              default: '"horizontal"',
              description: t("props.orientation"),
            },
            {
              name: "ButtonGroupText · asChild",
              type: "boolean",
              default: "false",
              description: t("props.asChild"),
            },
            {
              name: "ButtonGroupSeparator · orientation",
              type: '"horizontal" | "vertical"',
              default: '"vertical"',
              description: t("props.separatorOrientation"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
