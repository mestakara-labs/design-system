/** Docs page: Aspect Ratio — texts in `locales/<lang>/aspect-ratio.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import AspectRatioDemo from "../../examples/aspect-ratio/aspect-ratio-demo";
import aspectRatioDemoCode from "../../examples/aspect-ratio/aspect-ratio-demo?raw";

const USAGE_CODE = `
import { AspectRatio } from "@mestakara/ui/aspect-ratio";

<AspectRatio ratio={19 / 10}>
  <img src="/foto.jpg" alt="…" className="size-full object-cover" />
</AspectRatio>
`;

export default function AspectRatioPage() {
  const { t } = useTranslation("aspect-ratio");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.data-display")}
        title="Aspect Ratio"
        description={t("description")}
      />

      <ComponentPreview example={AspectRatioDemo} code={aspectRatioDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="aspect-ratio" exports={["AspectRatio"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[{ name: "ratio", type: "number", default: "1", description: t("props.ratio") }]}
        />
      </Section>
    </div>
  );
}
