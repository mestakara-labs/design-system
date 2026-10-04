/** Docs page: Radio Group — texts in `locales/<lang>/radio-group.json`. */
import { useTranslation } from "react-i18next";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import { StateMatrix } from "../../page-parts/state-matrix";
import FieldChoiceCard from "../../examples/field/field-choice-card";
import fieldChoiceCardCode from "../../examples/field/field-choice-card?raw";
import RadioGroupDemo from "../../examples/radio-group/radio-group-demo";
import radioGroupDemoCode from "../../examples/radio-group/radio-group-demo?raw";
import RadioGroupDisabled from "../../examples/radio-group/radio-group-disabled";
import radioGroupDisabledCode from "../../examples/radio-group/radio-group-disabled?raw";

const USAGE_CODE = `
import { RadioGroup, RadioGroupItem } from "@mestakara/ui/radio-group";

<RadioGroup defaultValue="qris">
  <RadioGroupItem value="qris" id="qris" />
  <Label htmlFor="qris">QRIS</Label>
</RadioGroup>
`;

export default function RadioGroupPage() {
  const { t } = useTranslation("radio-group");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.form")}
        title="Radio Group"
        description={t("description")}
      />

      <ComponentPreview example={RadioGroupDemo} code={radioGroupDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="radio-group" exports={["RadioGroup", "RadioGroupItem"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="choice-card"
          title={t("examples.choiceCard.title")}
          description={t("examples.choiceCard.description")}
          example={FieldChoiceCard}
          code={fieldChoiceCardCode}
        />
        <Example
          id="disabled"
          title={t("examples.disabled.title")}
          description={t("examples.disabled.description")}
          example={RadioGroupDisabled}
          code={radioGroupDisabledCode}
        />
      </Section>

      <Section
        id="states"
        title={tCommon("sections.states")}
        description={tCommon("sections.statesDescription")}
      >
        <StateMatrix
          rows={["unchecked", "checked"]}
          states={["default", "hover", "focus", "invalid", "disabled"]}
        >
          {(state, row) => (
            <RadioGroup value={row === "checked" ? "a" : ""} aria-label={`${row} ${state}`}>
              <RadioGroupItem
                value="a"
                aria-label={row}
                aria-invalid={state === "invalid"}
                disabled={state === "disabled"}
              />
            </RadioGroup>
          )}
        </StateMatrix>
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            { name: "RadioGroup · value", type: "string", description: t("props.value") },
            {
              name: "RadioGroup · defaultValue",
              type: "string",
              description: t("props.defaultValue"),
            },
            {
              name: "RadioGroup · onValueChange",
              type: "(value: string) => void",
              description: t("props.onValueChange"),
            },
            {
              name: "RadioGroup · orientation",
              type: '"vertical" | "horizontal"',
              default: '"vertical"',
              description: t("props.orientation"),
            },
            { name: "RadioGroupItem · value", type: "string", description: t("props.itemValue") },
            {
              name: "RadioGroupItem · disabled",
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
