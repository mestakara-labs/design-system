/** Docs page: Switch — texts in `locales/<lang>/switch.json`. */
import { useTranslation } from "react-i18next";

import { Switch } from "@/components/ui/switch";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import { StateMatrix } from "../../page-parts/state-matrix";
import FieldHorizontal from "../../examples/field/field-horizontal";
import fieldHorizontalCode from "../../examples/field/field-horizontal?raw";
import SwitchDemo from "../../examples/switch/switch-demo";
import switchDemoCode from "../../examples/switch/switch-demo?raw";
import SwitchDisabled from "../../examples/switch/switch-disabled";
import switchDisabledCode from "../../examples/switch/switch-disabled?raw";
import SwitchSizes from "../../examples/switch/switch-sizes";
import switchSizesCode from "../../examples/switch/switch-sizes?raw";

const USAGE_CODE = `
import { Switch } from "@mestakara/ui/switch";

<Switch id="promo" />
<Label htmlFor="promo">Notifikasi promo</Label>
`;

export default function SwitchPage() {
  const { t } = useTranslation("switch");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.form")}
        title="Switch"
        description={t("description")}
      />

      <ComponentPreview example={SwitchDemo} code={switchDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="switch" exports={["Switch"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("tip")}</p>
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="sizes"
          title={t("examples.sizes.title")}
          description={t("examples.sizes.description")}
          example={SwitchSizes}
          code={switchSizesCode}
        />
        <Example
          id="with-description"
          title={t("examples.withDescription.title")}
          description={t("examples.withDescription.description")}
          example={FieldHorizontal}
          code={fieldHorizontalCode}
        />
        <Example
          id="disabled"
          title={t("examples.disabled.title")}
          description={t("examples.disabled.description")}
          example={SwitchDisabled}
          code={switchDisabledCode}
        />
      </Section>

      <Section
        id="states"
        title={tCommon("sections.states")}
        description={tCommon("sections.statesDescription")}
      >
        <StateMatrix rows={["off", "on"]} states={["default", "hover", "focus", "disabled"]}>
          {(state, row) => (
            <Switch
              checked={row === "on"}
              aria-label={`${row} ${state}`}
              disabled={state === "disabled"}
            />
          )}
        </StateMatrix>
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            { name: "size", type: '"sm" | "md"', default: '"md"', description: t("props.size") },
            { name: "checked", type: "boolean", description: t("props.checked") },
            {
              name: "defaultChecked",
              type: "boolean",
              default: "false",
              description: t("props.defaultChecked"),
            },
            {
              name: "onCheckedChange",
              type: "(checked: boolean) => void",
              description: t("props.onCheckedChange"),
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: t("props.disabled"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
