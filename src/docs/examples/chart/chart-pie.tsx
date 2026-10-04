import { Pie, PieChart } from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

// For pie charts each slice has its own `fill`, pointing to the color in `config`.
const DATA = [
  { unit: "gunungMas", tickets: 4200, fill: "var(--color-gunungMas)" },
  { unit: "rancabali", tickets: 3100, fill: "var(--color-rancabali)" },
  { unit: "malabar", tickets: 1800, fill: "var(--color-malabar)" },
  { unit: "bosscha", tickets: 1400, fill: "var(--color-bosscha)" },
  { unit: "walini", tickets: 900, fill: "var(--color-walini)" },
];

const config = {
  tickets: { label: "Tiket" },
  gunungMas: { label: "Gunung Mas", color: "var(--chart-1)" },
  rancabali: { label: "Rancabali", color: "var(--chart-2)" },
  malabar: { label: "Malabar", color: "var(--chart-3)" },
  bosscha: { label: "Bosscha Space", color: "var(--chart-4)" },
  walini: { label: "Walini", color: "var(--chart-5)" },
} satisfies ChartConfig;

export default function ChartPie() {
  return (
    <ChartContainer config={config} className="aspect-square h-80">
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent nameKey="unit" hideLabel />} />
        <Pie data={DATA} dataKey="tickets" nameKey="unit" innerRadius={60} strokeWidth={4} />
        <ChartLegend content={<ChartLegendContent nameKey="unit" className="flex-wrap" />} />
      </PieChart>
    </ChartContainer>
  );
}
