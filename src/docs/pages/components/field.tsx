/** Docs page: Field — texts in `locales/<lang>/field.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import FieldCheckboxGroup from "../../examples/field/field-checkbox-group";
import fieldCheckboxGroupCode from "../../examples/field/field-checkbox-group?raw";
import FieldChoiceCard from "../../examples/field/field-choice-card";
import fieldChoiceCardCode from "../../examples/field/field-choice-card?raw";
import FieldDemo from "../../examples/field/field-demo";
import fieldDemoCode from "../../examples/field/field-demo?raw";
import FieldHorizontal from "../../examples/field/field-horizontal";
import fieldHorizontalCode from "../../examples/field/field-horizontal?raw";

const USAGE_CODE = `
import { Field, FieldDescription, FieldError, FieldLabel } from "@mestakara/ui/field";

<Field data-invalid>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" aria-invalid="true" />
  <FieldDescription>E-tiket akan dikirim ke email ini.</FieldDescription>
  <FieldError>Format email belum benar.</FieldError>
</Field>
`;

export default function FieldPage() {
  const { t } = useTranslation("field");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.form")}
        title="Field"
        description={t("description")}
      />

      <ComponentPreview example={FieldDemo} code={fieldDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="field"
          exports={["Field", "FieldLabel", "FieldDescription", "FieldError"]}
        />
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
          id="checkbox-group"
          title={t("examples.checkboxGroup.title")}
          description={t("examples.checkboxGroup.description")}
          example={FieldCheckboxGroup}
          code={fieldCheckboxGroupCode}
        />
        <Example
          id="horizontal"
          title={t("examples.horizontal.title")}
          description={t("examples.horizontal.description")}
          example={FieldHorizontal}
          code={fieldHorizontalCode}
        />
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")} description={t("anatomy")}>
        <PartsTable
          rows={[
            { name: "FieldSet", element: "<fieldset>", description: t("parts.fieldSet") },
            { name: "FieldLegend", element: "<legend>", description: t("parts.fieldLegend") },
            { name: "FieldGroup", element: "<div>", description: t("parts.fieldGroup") },
            { name: "Field", element: "<div>", description: t("parts.field") },
            { name: "FieldContent", element: "<div>", description: t("parts.fieldContent") },
            { name: "FieldLabel", element: "<label>", description: t("parts.fieldLabel") },
            { name: "FieldTitle", element: "<div>", description: t("parts.fieldTitle") },
            { name: "FieldDescription", element: "<p>", description: t("parts.fieldDescription") },
            { name: "FieldError", element: "<div>", description: t("parts.fieldError") },
            { name: "FieldSeparator", element: "<div>", description: t("parts.fieldSeparator") },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "Field · orientation",
              type: '"vertical" | "horizontal" | "responsive"',
              default: '"vertical"',
              description: t("props.orientation"),
            },
            {
              name: "Field · data-invalid",
              type: "boolean",
              description: t("props.invalid"),
            },
            {
              name: "Field · data-disabled",
              type: "boolean",
              description: t("props.disabled"),
            },
            {
              name: "FieldError · errors",
              type: "{ message?: string }[]",
              description: t("props.errors"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
