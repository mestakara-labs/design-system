import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const TARGETS = [
  { unit: "Gunung Mas", target: "42.000", reached: "27.300", percent: 65 },
  { unit: "Rancabali", target: "18.500", reached: "5.920", percent: 32 },
];

/** Yearly visitor target per unit, with a progress bar. */
export function VisitTargets() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Target Kunjungan</CardTitle>
        <CardDescription>
          Target pengunjung 2026 per unit. Pantau seberapa dekat setiap unit dengan targetnya.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {TARGETS.map((item) => (
          <div key={item.unit} className="flex flex-col gap-3 rounded-md bg-subtle p-4">
            <span className="typo-overline text-fg-accent">{item.unit}</span>
            <span className="typo-h2 text-fg-brand tabular-nums">{item.target}</span>
            <Progress value={item.percent} aria-label={`${item.unit} ${item.percent}%`} />
            <div className="flex justify-between typo-body-s text-fg-secondary">
              <span>{item.percent}% tercapai</span>
              <span className="tabular-nums">{item.reached}</span>
            </div>
          </div>
        ))}
        <p className="typo-body-s text-fg-tertiary">Target Rancabali belum tercapai tahun ini.</p>
      </CardContent>
    </Card>
  );
}
