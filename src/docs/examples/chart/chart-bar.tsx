import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const DATA = [
  { month: "Mei", weekday: 1860, weekend: 3200 },
  { month: "Jun", weekday: 2050, weekend: 4100 },
  { month: "Jul", weekday: 2370, weekend: 5200 },
  { month: "Agu", weekday: 1730, weekend: 3900 },
  { month: "Sep", weekday: 2090, weekend: 3600 },
  { month: "Okt", weekday: 2140, weekend: 4300 },
];

// Label and color per series. The color becomes var(--color-weekday) / var(--color-weekend).
const config = {
  weekday: { label: "Hari kerja", color: "var(--chart-1)" },
  weekend: { label: "Akhir pekan", color: "var(--chart-2)" },
} satisfies ChartConfig;

export default function ChartBar() {
  return (
    <ChartContainer config={config} className="h-72 w-full">
      <BarChart accessibilityLayer data={DATA}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="weekday" fill="var(--color-weekday)" radius={6} />
        <Bar dataKey="weekend" fill="var(--color-weekend)" radius={6} />
      </BarChart>
    </ChartContainer>
  );
}
