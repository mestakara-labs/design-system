import { Bar, BarChart, XAxis } from "recharts";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

const DATA = [
  { month: "Mei", visitors: 3800 },
  { month: "Jun", visitors: 5600 },
  { month: "Jul", visitors: 4700 },
  { month: "Agu", visitors: 6100 },
  { month: "Sep", visitors: 4200 },
];

const CHART_CONFIG = {
  visitors: { label: "Pengunjung", color: "var(--chart-1)" },
} satisfies ChartConfig;

/** Visitors of the last 5 months as a bar chart, plus two quick facts. */
export function VisitorHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Riwayat Kunjungan</CardTitle>
        <CardDescription>Pengunjung 5 bulan terakhir</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <ChartContainer config={CHART_CONFIG} className="aspect-auto h-44 w-full">
          <BarChart data={DATA} margin={{ left: 0, right: 0 }}>
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
            <Bar dataKey="visitors" fill="var(--color-visitors)" radius={8} />
          </BarChart>
        </ChartContainer>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1 rounded-md bg-subtle p-3">
            <span className="typo-overline text-fg-accent">Berikutnya</span>
            <span className="typo-label-l">Festival Panen</span>
            <span className="typo-body-s text-fg-secondary">18 Oktober</span>
          </div>
          <div className="flex flex-col gap-1 rounded-md bg-subtle p-3">
            <span className="typo-overline text-fg-accent">Terlaris</span>
            <span className="typo-label-l">Tea Walk</span>
            <span className="typo-body-s text-fg-secondary">1.204 tiket</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="tonal" size="sm" className="w-full">
          Lihat Laporan Lengkap
        </Button>
      </CardFooter>
    </Card>
  );
}
