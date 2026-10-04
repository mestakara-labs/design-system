import { TrendingDown, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-surface *:data-[slot=card]:shadow-sm lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Pendapatan Tiket</CardDescription>
          <CardTitle className="typo-h2 tabular-nums">Rp 125,4 jt</CardTitle>
          <CardAction>
            <Badge variant="outline" dot={false}>
              <TrendingUp />
              +12,5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 typo-body-m">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Naik bulan ini <TrendingUp className="size-4" />
          </div>
          <div className="text-fg-secondary">Pengunjung 6 bulan terakhir</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Pengunjung Baru</CardDescription>
          <CardTitle className="typo-h2 tabular-nums">1.234</CardTitle>
          <CardAction>
            <Badge variant="outline" dot={false}>
              <TrendingDown />
              -20%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 typo-body-m">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Turun 20% periode ini <TrendingDown className="size-4" />
          </div>
          <div className="text-fg-secondary">Promosi perlu ditingkatkan</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Pemesanan Aktif</CardDescription>
          <CardTitle className="typo-h2 tabular-nums">4.567</CardTitle>
          <CardAction>
            <Badge variant="outline" dot={false}>
              <TrendingUp />
              +12,5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 typo-body-m">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Banyak pengunjung kembali <TrendingUp className="size-4" />
          </div>
          <div className="text-fg-secondary">Melampaui target bulanan</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Tingkat Pertumbuhan</CardDescription>
          <CardTitle className="typo-h2 tabular-nums">4,5%</CardTitle>
          <CardAction>
            <Badge variant="outline" dot={false}>
              <TrendingUp />
              +4,5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 typo-body-m">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Pertumbuhan stabil <TrendingUp className="size-4" />
          </div>
          <div className="text-fg-secondary">Sesuai proyeksi pertumbuhan</div>
        </CardFooter>
      </Card>
    </div>
  );
}
