/** Docs page: Label — texts in `locales/<lang>/label.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import LabelDemo from "../../examples/label/label-demo";
import labelDemoCode from "../../examples/label/label-demo?raw";
import LabelWithInput from "../../examples/label/label-with-input";
import labelWithInputCode from "../../examples/label/label-with-input?raw";

const USAGE_CODE = `
import { Label } from "@mestakara/ui/label";

<Label htmlFor="email">Email</Label>
<Input id="email" />
`;

export default function LabelPage() {
  const { t } = useTranslation("label");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.form")}
        title="Label"
        description={t("description")}
      />

      <ComponentPreview example={LabelDemo} code={labelDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="label" exports={["Label"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("tip")}</p>
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="with-input"
          title={t("examples.withInput.title")}
          description={t("examples.withInput.description")}
          example={LabelWithInput}
          code={labelWithInputCode}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable rows={[{ name: "htmlFor", type: "string", description: t("props.htmlFor") }]} />
      </Section>
    </div>
  );
}
