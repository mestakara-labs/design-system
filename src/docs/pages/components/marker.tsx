/** Docs page: Marker — texts in `locales/<lang>/marker.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import MarkerDemo from "../../examples/marker/marker-demo";
import markerDemoCode from "../../examples/marker/marker-demo?raw";
import MarkerWithIcon from "../../examples/marker/marker-icon";
import markerIconCode from "../../examples/marker/marker-icon?raw";

const USAGE_CODE = `
import { Marker, MarkerContent } from "@mestakara/ui/marker";

<Marker variant="separator">
  <MarkerContent>Hari ini</MarkerContent>
</Marker>
`;

export default function MarkerPage() {
  const { t } = useTranslation("marker");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.chat")}
        title="Marker"
        description={t("description")}
      />

      <ComponentPreview example={MarkerDemo} code={markerDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="marker" exports={["Marker", "MarkerContent", "MarkerIcon"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="icon"
          title={t("examples.icon.title")}
          description={t("examples.icon.description")}
          example={MarkerWithIcon}
          code={markerIconCode}
        />
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "Marker", element: "<div>", description: t("parts.marker") },
            { name: "MarkerIcon", element: "<span>", description: t("parts.icon") },
            { name: "MarkerContent", element: "<span>", description: t("parts.content") },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "variant",
              type: '"default" | "separator" | "border"',
              default: '"default"',
              description: t("props.variant"),
            },
            {
              name: "asChild",
              type: "boolean",
              default: "false",
              description: t("props.asChild"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
