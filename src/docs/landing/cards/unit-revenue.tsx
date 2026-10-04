import { XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/** Ticket revenue of each unit; the small bars show the last 4 weeks. */
const UNITS = [
  { name: "Gunung Mas", tickets: "4.500 tiket", weeks: [40, 55, 50, 80] },
  { name: "Rancabali", tickets: "2.120 tiket", weeks: [35, 45, 70, 50] },
  { name: "Malabar", tickets: "1.340 tiket", weeks: [30, 40, 65, 45] },
  { name: "Kertamanah", tickets: "860 tiket", weeks: [25, 35, 55, 40] },
];

export function UnitRevenue() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pendapatan per Unit</CardTitle>
        <CardDescription>Penjualan tiket minggu ini di setiap unit.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm" aria-label="Tutup">
            <XIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {UNITS.map((unit) => (
          <div key={unit.name} className="flex items-center gap-4 rounded-md bg-subtle p-4">
            <div className="flex flex-col">
              <span className="typo-label-m">{unit.name}</span>
              <span className="typo-body-s text-fg-secondary">{unit.tickets}</span>
            </div>
            <div className="ml-auto flex h-8 items-end gap-1" aria-hidden="true">
              {unit.weeks.map((height, index) => (
                <span
                  key={index}
                  className="w-4 rounded-xs bg-chart-1/70 last:bg-chart-1"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
