/** Docs page: Select — texts in `locales/<lang>/select.json`. */
import { useTranslation } from "react-i18next";

import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import { StateMatrix } from "../../page-parts/state-matrix";
import SelectDemo from "../../examples/select/select-demo";
import selectDemoCode from "../../examples/select/select-demo?raw";
import SelectGroups from "../../examples/select/select-groups";
import selectGroupsCode from "../../examples/select/select-groups?raw";
import SelectWithField from "../../examples/select/select-with-field";
import selectWithFieldCode from "../../examples/select/select-with-field?raw";

const USAGE_CODE = `
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@mestakara/ui/select";

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Pilih unit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="malabar">Malabar Tea Village</SelectItem>
  </SelectContent>
</Select>
`;

export default function SelectPage() {
  const { t } = useTranslation("select");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.form")}
        title="Select"
        description={t("description")}
      />

      <ComponentPreview example={SelectDemo} code={selectDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="select"
          exports={["Select", "SelectContent", "SelectItem", "SelectTrigger", "SelectValue"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("tip")}</p>
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="groups"
          title={t("examples.groups.title")}
          description={t("examples.groups.description")}
          example={SelectGroups}
          code={selectGroupsCode}
        />
        <Example
          id="with-field"
          title={t("examples.withField.title")}
          description={t("examples.withField.description")}
          example={SelectWithField}
          code={selectWithFieldCode}
        />
      </Section>

      <Section
        id="states"
        title={tCommon("sections.states")}
        description={tCommon("sections.statesDescription")}
      >
        <StateMatrix
          rows={["md", "sm"]}
          states={["default", "hover", "focus", "invalid", "disabled"]}
        >
          {(state, size) => (
            <Select disabled={state === "disabled"}>
              <SelectTrigger
                size={size}
                aria-label={`${size} ${state}`}
                aria-invalid={state === "invalid"}
                className="w-full"
              >
                <SelectValue placeholder="Pilih" />
              </SelectTrigger>
            </Select>
          )}
        </StateMatrix>
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            { name: "Select · value", type: "string", description: t("props.value") },
            { name: "Select · defaultValue", type: "string", description: t("props.defaultValue") },
            {
              name: "Select · onValueChange",
              type: "(value: string) => void",
              description: t("props.onValueChange"),
            },
            {
              name: "Select · disabled",
              type: "boolean",
              default: "false",
              description: t("props.disabled"),
            },
            {
              name: "SelectTrigger · size",
              type: '"sm" | "md"',
              default: '"md"',
              description: t("props.size"),
            },
            {
              name: "SelectContent · position",
              type: '"item-aligned" | "popper"',
              default: '"item-aligned"',
              description: t("props.position"),
            },
            {
              name: "SelectItem · disabled",
              type: "boolean",
              default: "false",
              description: t("props.itemDisabled"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
