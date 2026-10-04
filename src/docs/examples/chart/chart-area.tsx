import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const DATA = [
  { day: "Sen", visitors: 420 },
  { day: "Sel", visitors: 380 },
  { day: "Rab", visitors: 510 },
  { day: "Kam", visitors: 470 },
  { day: "Jum", visitors: 690 },
  { day: "Sab", visitors: 1240 },
  { day: "Min", visitors: 1380 },
];

const config = {
  visitors: { label: "Pengunjung", color: "var(--chart-1)" },
} satisfies ChartConfig;

export default function ChartArea() {
  return (
    <ChartContainer config={config} className="h-64 w-full">
      <AreaChart accessibilityLayer data={DATA} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <Area
          dataKey="visitors"
          type="natural"
          fill="var(--color-visitors)"
          fillOpacity={0.2}
          stroke="var(--color-visitors)"
          strokeWidth={2}
        />
      </AreaChart>
    </ChartContainer>
  );
}
