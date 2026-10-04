import { Badge, type BadgeProps } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TRANSACTIONS = [
  { code: "RCB-0021", unit: "Rancabali Tea Valley", status: "Lunas", total: 150_000 },
  { code: "GMS-0145", unit: "Gunung Mas Tea Hills", status: "Menunggu Bayar", total: 225_000 },
  { code: "MLB-0078", unit: "Malabar Tea Village", status: "Lunas", total: 75_000 },
  { code: "WLN-0012", unit: "Walini by Me", status: "Dibatalkan", total: 850_000 },
];

/** Status text → badge color. */
const STATUS_VARIANT: Record<string, BadgeProps["variant"]> = {
  Lunas: "success",
  "Menunggu Bayar": "warning",
  Dibatalkan: "danger",
};

const formatRupiah = (value: number) => `Rp${value.toLocaleString("id-ID")}`;

export default function TableDemo() {
  const total = TRANSACTIONS.filter((item) => item.status === "Lunas").reduce(
    (sum, item) => sum + item.total,
    0,
  );

  return (
    <div className="w-full overflow-hidden rounded-lg border border-border bg-surface">
      {/* striped = zebra rows, as in the dashboard layout of DESIGN.md §6 */}
      <Table striped>
        <TableCaption className="pb-4">Transaksi hari ini, Sabtu 17 Okt 2026</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Kode</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {TRANSACTIONS.map((item) => (
            <TableRow key={item.code}>
              <TableCell className="typo-label-m">{item.code}</TableCell>
              <TableCell>{item.unit}</TableCell>
              <TableCell>
                <Badge variant={STATUS_VARIANT[item.status]}>{item.status}</Badge>
              </TableCell>
              <TableCell className="text-right tabular-nums">{formatRupiah(item.total)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total lunas</TableCell>
            <TableCell className="text-right tabular-nums">{formatRupiah(total)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
