/** Docs page: Card — texts in `locales/<lang>/card.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import CardDemo from "../../examples/card/card-demo";
import cardDemoCode from "../../examples/card/card-demo?raw";
import CardElevated from "../../examples/card/card-elevated";
import cardElevatedCode from "../../examples/card/card-elevated?raw";
import CardStat from "../../examples/card/card-stat";
import cardStatCode from "../../examples/card/card-stat?raw";
import CardWithForm from "../../examples/card/card-with-form";
import cardWithFormCode from "../../examples/card/card-with-form?raw";

const USAGE_CODE = `
import { Card, CardContent, CardHeader, CardTitle } from "@mestakara/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Paket Petik Teh</CardTitle>
  </CardHeader>
  <CardContent>…</CardContent>
</Card>
`;

export default function CardPage() {
  const { t } = useTranslation("card");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.data-display")}
        title="Card"
        description={t("description")}
      />

      <ComponentPreview example={CardDemo} code={cardDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="card"
          exports={["Card", "CardContent", "CardHeader", "CardTitle"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="elevated"
          title={t("examples.elevated.title")}
          description={t("examples.elevated.description")}
          example={CardElevated}
          code={cardElevatedCode}
        />
        <Example
          id="stat"
          title={t("examples.stat.title")}
          description={t("examples.stat.description")}
          example={CardStat}
          code={cardStatCode}
        />
        <Example
          id="with-form"
          title={t("examples.withForm.title")}
          description={t("examples.withForm.description")}
          example={CardWithForm}
          code={cardWithFormCode}
        />
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "Card", element: "<div>", description: t("parts.card") },
            { name: "CardHeader", element: "<div>", description: t("parts.header") },
            { name: "CardTitle", element: "<div>", description: t("parts.title") },
            { name: "CardDescription", element: "<div>", description: t("parts.description") },
            { name: "CardAction", element: "<div>", description: t("parts.action") },
            { name: "CardContent", element: "<div>", description: t("parts.content") },
            { name: "CardFooter", element: "<div>", description: t("parts.footer") },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "Card · variant",
              type: '"outline" | "elevated"',
              default: '"outline"',
              description: t("props.variant"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
