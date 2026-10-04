/** Docs page: Alert — texts in `locales/<lang>/alert.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import AlertDemo from "../../examples/alert/alert-demo";
import alertDemoCode from "../../examples/alert/alert-demo?raw";
import AlertVariants from "../../examples/alert/alert-variants";
import alertVariantsCode from "../../examples/alert/alert-variants?raw";

const USAGE_CODE = `
import { Alert, AlertDescription, AlertTitle } from "@mestakara/ui/alert";

<Alert variant="success">
  <CircleCheckIcon />
  <AlertTitle>Pembayaran berhasil</AlertTitle>
  <AlertDescription>Tiket Anda sudah siap.</AlertDescription>
</Alert>
`;

export default function AlertPage() {
  const { t } = useTranslation("alert");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.data-display")}
        title="Alert"
        description={t("description")}
      />

      <ComponentPreview example={AlertDemo} code={alertDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="alert" exports={["Alert", "AlertDescription", "AlertTitle"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("tip")}</p>
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="variants"
          title={t("examples.variants.title")}
          description={t("examples.variants.description")}
          example={AlertVariants}
          code={alertVariantsCode}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "variant",
              type: '"default" | "info" | "success" | "warning" | "danger"',
              default: '"default"',
              description: t("props.variant"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
