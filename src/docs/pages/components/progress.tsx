/** Docs page: Progress — texts in `locales/<lang>/progress.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import ProgressDemo from "../../examples/progress/progress-demo";
import progressDemoCode from "../../examples/progress/progress-demo?raw";
import ProgressWithLabel from "../../examples/progress/progress-with-label";
import progressWithLabelCode from "../../examples/progress/progress-with-label?raw";

const USAGE_CODE = `
import { Progress } from "@mestakara/ui/progress";

<Progress value={60} aria-label="Progres unggah" />
`;

export default function ProgressPage() {
  const { t } = useTranslation("progress");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.data-display")}
        title="Progress"
        description={t("description")}
      />

      <ComponentPreview example={ProgressDemo} code={progressDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="progress" exports={["Progress"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="with-label"
          title={t("examples.withLabel.title")}
          description={t("examples.withLabel.description")}
          example={ProgressWithLabel}
          code={progressWithLabelCode}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            { name: "value", type: "number | null", description: t("props.value") },
            { name: "max", type: "number", default: "100", description: t("props.max") },
          ]}
        />
      </Section>
    </div>
  );
}
