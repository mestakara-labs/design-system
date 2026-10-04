/**
 * Data Table pattern: <Table> + @tanstack/react-table v8 for sorting, filtering,
 * row selection and paging. Install it in your app: npm install @tanstack/react-table@8
 */
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import { ArrowUpDownIcon } from "lucide-react";
import { useState } from "react";

import { Badge, type BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Transaction = {
  code: string;
  visitor: string;
  unit: string;
  status: "Lunas" | "Menunggu Bayar" | "Dibatalkan";
  total: number;
};

const DATA: Transaction[] = [
  { code: "RCB-0021", visitor: "Rina Sari", unit: "Rancabali", status: "Lunas", total: 150_000 },
  {
    code: "GMS-0145",
    visitor: "Budi Pratama",
    unit: "Gunung Mas",
    status: "Menunggu Bayar",
    total: 225_000,
  },
  { code: "MLB-0078", visitor: "Dewi Lestari", unit: "Malabar", status: "Lunas", total: 75_000 },
  {
    code: "WLN-0012",
    visitor: "Agus Kurnia",
    unit: "Walini",
    status: "Dibatalkan",
    total: 850_000,
  },
  { code: "RCB-0022", visitor: "Siti Aminah", unit: "Rancabali", status: "Lunas", total: 300_000 },
  { code: "GMS-0146", visitor: "Joko Susilo", unit: "Gunung Mas", status: "Lunas", total: 112_500 },
  {
    code: "MLB-0079",
    visitor: "Maya Putri",
    unit: "Malabar",
    status: "Menunggu Bayar",
    total: 75_000,
  },
];

const STATUS_VARIANT: Record<Transaction["status"], BadgeProps["variant"]> = {
  Lunas: "success",
  "Menunggu Bayar": "warning",
  Dibatalkan: "danger",
};

// 1. Describe the columns: what to show and how.
const columns: ColumnDef<Transaction>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        aria-label="Pilih semua"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() ? "indeterminate" : false)
        }
        onCheckedChange={(checked) => table.toggleAllPageRowsSelected(!!checked)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        aria-label={`Pilih ${row.original.code}`}
        checked={row.getIsSelected()}
        onCheckedChange={(checked) => row.toggleSelected(!!checked)}
      />
    ),
  },
  { accessorKey: "code", header: "Kode" },
  {
    accessorKey: "visitor",
    // A header button that toggles the sort order.
    header: ({ column }) => (
      <Button
        variant="ghost"
        size="sm"
        className="-ml-3 text-fg-secondary"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Pengunjung
        <ArrowUpDownIcon />
      </Button>
    ),
  },
  { accessorKey: "unit", header: "Unit" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={STATUS_VARIANT[row.original.status]}>{row.original.status}</Badge>
    ),
  },
  {
    accessorKey: "total",
    header: () => <div className="text-right">Total</div>,
    cell: ({ row }) => (
      <div className="text-right tabular-nums">Rp{row.original.total.toLocaleString("id-ID")}</div>
    ),
  },
];

export default function DataTableDemo() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [rowSelection, setRowSelection] = useState({});

  // 2. Create the table: data + columns + the features we want.
  // TanStack Table returns functions React Compiler cannot memoize; that is expected here.
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: DATA,
    columns,
    state: { sorting, globalFilter, rowSelection },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 5 } },
  });

  // 3. Render it with the <Table> components.
  return (
    <div className="flex w-full flex-col gap-4">
      <Input
        placeholder="Cari kode, nama, atau unit…"
        value={globalFilter}
        onChange={(event) => setGlobalFilter(event.target.value)}
        className="max-w-xs"
        aria-label="Cari transaksi"
      />

      <div className="overflow-hidden rounded-lg border border-border bg-surface">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-fg-tertiary">
                  Tidak ada transaksi yang cocok.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="typo-body-s text-fg-secondary">
          {table.getFilteredSelectedRowModel().rows.length} dari{" "}
          {table.getFilteredRowModel().rows.length} baris dipilih
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Sebelumnya
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Berikutnya
          </Button>
        </div>
      </div>
    </div>
  );
}
