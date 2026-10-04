/** Docs page: Direction — texts in `locales/<lang>/direction.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import DirectionDemo from "../../examples/direction/direction-demo";
import directionDemoCode from "../../examples/direction/direction-demo?raw";

const USAGE_CODE = `
import { DirectionProvider } from "@mestakara/ui/direction";

// e.g. in app/layout.tsx
<html dir="rtl">
  <body>
    <DirectionProvider dir="rtl">{children}</DirectionProvider>
  </body>
</html>
`;

export default function DirectionPage() {
  const { t } = useTranslation("direction");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.navigation")}
        title="Direction"
        description={t("description")}
      />

      <ComponentPreview example={DirectionDemo} code={directionDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="direction" exports={["DirectionProvider", "useDirection"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("tip")}</p>
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "DirectionProvider", element: "—", description: t("parts.provider") },
            { name: "useDirection()", element: "hook", description: t("parts.hook") },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            { name: "dir", type: '"ltr" | "rtl"', default: '"ltr"', description: t("props.dir") },
            { name: "direction", type: '"ltr" | "rtl"', description: t("props.direction") },
          ]}
        />
      </Section>
    </div>
  );
}
