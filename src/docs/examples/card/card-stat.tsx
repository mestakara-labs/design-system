import { TrendingUpIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardContent, CardHeader } from "@/components/ui/card";

export default function CardStat() {
  // "Stat Card" from DESIGN.md §5: label Body/M, number in Fraunces Display/L, trend badge.
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <p className="typo-body-m text-fg-secondary">Pendapatan Bulan Ini</p>
        <CardAction>
          <Badge variant="success" dot={false}>
            <TrendingUpIcon />
            12,4%
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="typo-display-l text-fg-brand">Rp74,8 jt</p>
      </CardContent>
    </Card>
  );
}
