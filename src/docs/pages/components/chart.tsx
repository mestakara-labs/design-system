/** Docs page: Chart — texts in `locales/<lang>/chart.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { Section } from "../../page-parts/section";
import ChartArea from "../../examples/chart/chart-area";
import chartAreaCode from "../../examples/chart/chart-area?raw";
import ChartBar from "../../examples/chart/chart-bar";
import chartBarCode from "../../examples/chart/chart-bar?raw";
import ChartPie from "../../examples/chart/chart-pie";
import chartPieCode from "../../examples/chart/chart-pie?raw";

const USAGE_CODE = `
import { Bar, BarChart } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@mestakara/ui/chart";

const config = {
  visitors: { label: "Pengunjung", color: "var(--chart-1)" },
} satisfies ChartConfig;

<ChartContainer config={config} className="h-64 w-full">
  <BarChart data={data}>
    <Bar dataKey="visitors" fill="var(--color-visitors)" radius={6} />
    <ChartTooltip content={<ChartTooltipContent />} />
  </BarChart>
</ChartContainer>
`;

const COLORS = [1, 2, 3, 4, 5];

export default function ChartPage() {
  const { t } = useTranslation("chart");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.data-display")}
        title="Chart"
        description={t("description")}
      />

      <ComponentPreview example={ChartBar} code={chartBarCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="chart"
          exports={["ChartContainer", "ChartTooltip", "ChartTooltipContent", "type ChartConfig"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <ul className="list-disc pl-5 typo-body-m text-fg-secondary">
          <li>{t("guidelines.config")}</li>
          <li>{t("guidelines.recharts")}</li>
        </ul>
      </Section>

      <Section id="colors" title={t("colors.title")} description={t("colors.description")}>
        <div className="flex flex-wrap gap-4">
          {COLORS.map((number) => (
            <div key={number} className="flex items-center gap-2">
              <span
                className="size-6 rounded-sm"
                style={{ backgroundColor: `var(--chart-${number})` }}
              />
              <code className="font-mono text-[12px] text-fg-secondary">var(--chart-{number})</code>
            </div>
          ))}
        </div>
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="area"
          title={t("examples.area.title")}
          description={t("examples.area.description")}
          example={ChartArea}
          code={chartAreaCode}
        />
        <Example
          id="pie"
          title={t("examples.pie.title")}
          description={t("examples.pie.description")}
          example={ChartPie}
          code={chartPieCode}
        />
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "ChartContainer", element: "<div>", description: t("parts.container") },
            { name: "ChartTooltip", element: "Recharts", description: t("parts.tooltip") },
            {
              name: "ChartTooltipContent",
              element: "<div>",
              description: t("parts.tooltipContent"),
            },
            { name: "ChartLegend", element: "Recharts", description: t("parts.legend") },
            { name: "ChartLegendContent", element: "<div>", description: t("parts.legendContent") },
            { name: "ChartConfig", element: "type", description: t("parts.config") },
          ]}
        />
      </Section>
    </div>
  );
}
