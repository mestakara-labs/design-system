/** Docs page: Spinner — texts in `locales/<lang>/spinner.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import SpinnerButton from "../../examples/spinner/spinner-button";
import spinnerButtonCode from "../../examples/spinner/spinner-button?raw";
import SpinnerDemo from "../../examples/spinner/spinner-demo";
import spinnerDemoCode from "../../examples/spinner/spinner-demo?raw";
import SpinnerSizes from "../../examples/spinner/spinner-sizes";
import spinnerSizesCode from "../../examples/spinner/spinner-sizes?raw";

const USAGE_CODE = `
import { Spinner } from "@mestakara/ui/spinner";

<Spinner />
`;

export default function SpinnerPage() {
  const { t } = useTranslation("spinner");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.data-display")}
        title="Spinner"
        description={t("description")}
      />

      <ComponentPreview example={SpinnerDemo} code={spinnerDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="spinner" exports={["Spinner"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="sizes"
          title={t("examples.sizes.title")}
          description={t("examples.sizes.description")}
          example={SpinnerSizes}
          code={spinnerSizesCode}
        />
        <Example
          id="button"
          title={t("examples.button.title")}
          description={t("examples.button.description")}
          example={SpinnerButton}
          code={spinnerButtonCode}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "aria-label",
              type: "string",
              default: '"Memuat"',
              description: t("props.ariaLabel"),
            },
            { name: "className", type: "string", description: t("props.className") },
          ]}
        />
      </Section>
    </div>
  );
}
