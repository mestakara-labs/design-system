/** Docs page: Hover Card — texts in `locales/<lang>/hover-card.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import HoverCardDemo from "../../examples/hover-card/hover-card-demo";
import hoverCardDemoCode from "../../examples/hover-card/hover-card-demo?raw";

const USAGE_CODE = `
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@mestakara/ui/hover-card";

<HoverCard>
  <HoverCardTrigger asChild>
    <a href="/malabar">Malabar Tea Village</a>
  </HoverCardTrigger>
  <HoverCardContent>Kebun teh bersejarah sejak 1896.</HoverCardContent>
</HoverCard>
`;

export default function HoverCardPage() {
  const { t } = useTranslation("hover-card");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.overlay")}
        title="Hover Card"
        description={t("description")}
      />

      <ComponentPreview example={HoverCardDemo} code={hoverCardDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="hover-card"
          exports={["HoverCard", "HoverCardContent", "HoverCardTrigger"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("tip")}</p>
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "HoverCard · openDelay",
              type: "number",
              default: "700",
              description: t("props.openDelay"),
            },
            {
              name: "HoverCard · closeDelay",
              type: "number",
              default: "300",
              description: t("props.closeDelay"),
            },
            {
              name: "HoverCardContent · side",
              type: '"top" | "right" | "bottom" | "left"',
              default: '"bottom"',
              description: t("props.side"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
