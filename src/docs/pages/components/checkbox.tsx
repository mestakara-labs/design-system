/** Docs page: Checkbox — texts in `locales/<lang>/checkbox.json`. */
import { useTranslation } from "react-i18next";

import { Checkbox } from "@/components/ui/checkbox";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import { StateMatrix } from "../../page-parts/state-matrix";
import CheckboxDemo from "../../examples/checkbox/checkbox-demo";
import checkboxDemoCode from "../../examples/checkbox/checkbox-demo?raw";
import CheckboxDisabled from "../../examples/checkbox/checkbox-disabled";
import checkboxDisabledCode from "../../examples/checkbox/checkbox-disabled?raw";
import CheckboxIndeterminate from "../../examples/checkbox/checkbox-indeterminate";
import checkboxIndeterminateCode from "../../examples/checkbox/checkbox-indeterminate?raw";
import CheckboxWithDescription from "../../examples/checkbox/checkbox-with-description";
import checkboxWithDescriptionCode from "../../examples/checkbox/checkbox-with-description?raw";

/** Value of `checked` for each matrix row. */
const ROWS = { unchecked: false, checked: true, indeterminate: "indeterminate" } as const;

const USAGE_CODE = `
import { Checkbox } from "@mestakara/ui/checkbox";

<Checkbox id="terms" />
<Label htmlFor="terms">Saya setuju dengan syarat & ketentuan</Label>
`;

export default function CheckboxPage() {
  const { t } = useTranslation("checkbox");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.form")}
        title="Checkbox"
        description={t("description")}
      />

      <ComponentPreview example={CheckboxDemo} code={checkboxDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="checkbox" exports={["Checkbox"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="with-description"
          title={t("examples.withDescription.title")}
          description={t("examples.withDescription.description")}
          example={CheckboxWithDescription}
          code={checkboxWithDescriptionCode}
        />
        <Example
          id="indeterminate"
          title={t("examples.indeterminate.title")}
          description={t("examples.indeterminate.description")}
          example={CheckboxIndeterminate}
          code={checkboxIndeterminateCode}
        />
        <Example
          id="disabled"
          title={t("examples.disabled.title")}
          description={t("examples.disabled.description")}
          example={CheckboxDisabled}
          code={checkboxDisabledCode}
        />
      </Section>

      <Section
        id="states"
        title={tCommon("sections.states")}
        description={tCommon("sections.statesDescription")}
      >
        <StateMatrix
          rows={Object.keys(ROWS) as (keyof typeof ROWS)[]}
          states={["default", "hover", "focus", "invalid", "disabled"]}
        >
          {(state, row) => (
            <Checkbox
              checked={ROWS[row]}
              aria-label={`${row} ${state}`}
              aria-invalid={state === "invalid"}
              disabled={state === "disabled"}
            />
          )}
        </StateMatrix>
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "checked",
              type: 'boolean | "indeterminate"',
              description: t("props.checked"),
            },
            {
              name: "defaultChecked",
              type: 'boolean | "indeterminate"',
              default: "false",
              description: t("props.defaultChecked"),
            },
            {
              name: "onCheckedChange",
              type: '(checked: boolean | "indeterminate") => void',
              description: t("props.onCheckedChange"),
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: t("props.disabled"),
            },
            {
              name: "required",
              type: "boolean",
              default: "false",
              description: t("props.required"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
