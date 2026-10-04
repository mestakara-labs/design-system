/** Docs page: Tooltip — texts in `locales/<lang>/tooltip.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import TooltipDemo from "../../examples/tooltip/tooltip-demo";
import tooltipDemoCode from "../../examples/tooltip/tooltip-demo?raw";
import TooltipSides from "../../examples/tooltip/tooltip-sides";
import tooltipSidesCode from "../../examples/tooltip/tooltip-sides?raw";

const USAGE_CODE = `
import { Tooltip, TooltipContent, TooltipTrigger } from "@mestakara/ui/tooltip";

<Tooltip>
  <TooltipTrigger asChild>
    <Button size="icon" aria-label="Simpan">…</Button>
  </TooltipTrigger>
  <TooltipContent>Simpan ke favorit</TooltipContent>
</Tooltip>
`;

export default function TooltipPage() {
  const { t } = useTranslation("tooltip");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.overlay")}
        title="Tooltip"
        description={t("description")}
      />

      <ComponentPreview example={TooltipDemo} code={tooltipDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="tooltip"
          exports={["Tooltip", "TooltipContent", "TooltipTrigger"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("tip")}</p>
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="sides"
          title={t("examples.sides.title")}
          description={t("examples.sides.description")}
          example={TooltipSides}
          code={tooltipSidesCode}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "TooltipContent · side",
              type: '"top" | "right" | "bottom" | "left"',
              default: '"top"',
              description: t("props.side"),
            },
            {
              name: "TooltipProvider · delayDuration",
              type: "number",
              default: "200",
              description: t("props.delayDuration"),
            },
            { name: "Tooltip · open", type: "boolean", description: t("props.open") },
          ]}
        />
      </Section>
    </div>
  );
}
