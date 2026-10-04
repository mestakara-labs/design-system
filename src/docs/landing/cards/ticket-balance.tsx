import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

/** Ticket sales that are ready to be paid out to the unit. */
export function TicketBalance() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Saldo Penjualan Tiket</CardDescription>
        <p className="typo-h1 text-fg-brand tabular-nums">Rp 12.112.900</p>
        <div>
          <Badge variant="warning">Menunggu verifikasi</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 rounded-md bg-subtle p-4 typo-body-m">
          <div className="flex justify-between">
            <span className="text-fg-secondary">Penjualan tiket</span>
            <span className="tabular-nums">Rp 12.487.500</span>
          </div>
          <div className="flex justify-between">
            <span className="text-fg-secondary">Biaya layanan</span>
            <span className="tabular-nums">−Rp 374.600</span>
          </div>
          <Separator className="my-1" />
          <div className="flex justify-between typo-label-m">
            <span>Total siap dicairkan</span>
            <span className="tabular-nums">Rp 12.112.900</span>
          </div>
        </div>
        <p className="typo-body-s text-fg-secondary">
          Setelah rekening unit terverifikasi, saldo di atas Rp 100.000 dicairkan otomatis setiap
          tanggal 15.
        </p>
      </CardContent>
    </Card>
  );
}
