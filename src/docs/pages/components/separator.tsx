/** Docs page: Separator — texts in `locales/<lang>/separator.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import SeparatorDemo from "../../examples/separator/separator-demo";
import separatorDemoCode from "../../examples/separator/separator-demo?raw";
import SeparatorVertical from "../../examples/separator/separator-vertical";
import separatorVerticalCode from "../../examples/separator/separator-vertical?raw";

const USAGE_CODE = `
import { Separator } from "@mestakara/ui/separator";

<Separator />
<Separator orientation="vertical" />
`;

export default function SeparatorPage() {
  const { t } = useTranslation("separator");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.data-display")}
        title="Separator"
        description={t("description")}
      />

      <ComponentPreview example={SeparatorDemo} code={separatorDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="separator" exports={["Separator"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="vertical"
          title={t("examples.vertical.title")}
          description={t("examples.vertical.description")}
          example={SeparatorVertical}
          code={separatorVerticalCode}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "orientation",
              type: '"horizontal" | "vertical"',
              default: '"horizontal"',
              description: t("props.orientation"),
            },
            {
              name: "decorative",
              type: "boolean",
              default: "true",
              description: t("props.decorative"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
