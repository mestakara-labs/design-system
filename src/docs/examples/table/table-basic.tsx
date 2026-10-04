import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SCHEDULE = [
  { day: "Senin – Jumat", hours: "08.00–17.00" },
  { day: "Sabtu – Minggu", hours: "07.00–18.00" },
  { day: "Hari libur nasional", hours: "07.00–18.00" },
];

export default function TableBasic() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-lg border border-border bg-surface">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Hari</TableHead>
            <TableHead className="text-right">Jam Buka</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {SCHEDULE.map((row) => (
            <TableRow key={row.day}>
              <TableCell>{row.day}</TableCell>
              <TableCell className="text-right">{row.hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
