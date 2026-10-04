/** Docs page: Form — texts in `locales/<lang>/form.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { Section } from "../../page-parts/section";
import FormDemo from "../../examples/form/form-demo";
import formDemoCode from "../../examples/form/form-demo?raw";

const DEPENDENCIES_CODE = `
npm install react-hook-form zod @hookform/resolvers
`;

export default function FormPage() {
  const { t } = useTranslation("form");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.form")}
        title="Form"
        description={t("description")}
      />

      <ComponentPreview example={FormDemo} code={formDemoCode} className="items-start" />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="form"
          exports={["Form", "FormControl", "FormField", "FormItem", "FormLabel", "FormMessage"]}
        />
        <p className="typo-body-m text-fg-secondary">{t("dependencies")}</p>
        <CodeBlock language="bash" code={DEPENDENCIES_CODE} />
      </Section>

      <Section id="how-it-works" title={t("howItWorks.title")}>
        <ol className="list-decimal pl-5 typo-body-m text-fg-secondary">
          <li>{t("howItWorks.schema")}</li>
          <li>{t("howItWorks.useForm")}</li>
          <li>{t("howItWorks.field")}</li>
          <li>{t("howItWorks.submit")}</li>
        </ol>
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "Form", element: "FormProvider", description: t("parts.form") },
            { name: "FormField", element: "Controller", description: t("parts.formField") },
            { name: "FormItem", element: "<div>", description: t("parts.formItem") },
            { name: "FormLabel", element: "<label>", description: t("parts.formLabel") },
            { name: "FormControl", element: "Slot", description: t("parts.formControl") },
            { name: "FormDescription", element: "<p>", description: t("parts.formDescription") },
            { name: "FormMessage", element: "<p>", description: t("parts.formMessage") },
            { name: "useFormField()", element: "hook", description: t("parts.useFormField") },
          ]}
        />
      </Section>
    </div>
  );
}
