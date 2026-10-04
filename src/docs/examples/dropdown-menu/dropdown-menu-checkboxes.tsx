import { Columns3Icon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DropdownMenuCheckboxes() {
  const [columns, setColumns] = useState({ unit: true, status: true, total: false });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Columns3Icon />
          Kolom
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>Tampilkan Kolom</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={columns.unit}
          onCheckedChange={(checked) => setColumns({ ...columns, unit: checked })}
        >
          Unit
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={columns.status}
          onCheckedChange={(checked) => setColumns({ ...columns, status: checked })}
        >
          Status
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={columns.total}
          onCheckedChange={(checked) => setColumns({ ...columns, total: checked })}
        >
          Total
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
