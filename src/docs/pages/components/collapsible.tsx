/** Docs page: Collapsible — texts in `locales/<lang>/collapsible.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import CollapsibleDemo from "../../examples/collapsible/collapsible-demo";
import collapsibleDemoCode from "../../examples/collapsible/collapsible-demo?raw";
import CollapsibleShowMore from "../../examples/collapsible/collapsible-show-more";
import collapsibleShowMoreCode from "../../examples/collapsible/collapsible-show-more?raw";

const USAGE_CODE = `
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@mestakara/ui/collapsible";

<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="ghost">Rincian harga</Button>
  </CollapsibleTrigger>
  <CollapsibleContent>…</CollapsibleContent>
</Collapsible>
`;

export default function CollapsiblePage() {
  const { t } = useTranslation("collapsible");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.navigation")}
        title="Collapsible"
        description={t("description")}
      />

      <ComponentPreview example={CollapsibleDemo} code={collapsibleDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="collapsible"
          exports={["Collapsible", "CollapsibleContent", "CollapsibleTrigger"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("tip")}</p>
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="show-more"
          title={t("examples.showMore.title")}
          description={t("examples.showMore.description")}
          example={CollapsibleShowMore}
          code={collapsibleShowMoreCode}
        />
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "Collapsible", element: "<div>", description: t("parts.root") },
            { name: "CollapsibleTrigger", element: "<button>", description: t("parts.trigger") },
            { name: "CollapsibleContent", element: "<div>", description: t("parts.content") },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            { name: "open", type: "boolean", description: t("props.open") },
            {
              name: "defaultOpen",
              type: "boolean",
              default: "false",
              description: t("props.defaultOpen"),
            },
            {
              name: "onOpenChange",
              type: "(open: boolean) => void",
              description: t("props.onOpenChange"),
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: t("props.disabled"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
