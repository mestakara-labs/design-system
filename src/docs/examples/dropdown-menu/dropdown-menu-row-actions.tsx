import { DownloadIcon, EllipsisIcon, PencilIcon, XCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DropdownMenuRowActions() {
  // A "⋯" button, typical at the end of a table row.
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-sm" aria-label="Aksi untuk RCB-0021">
          <EllipsisIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <PencilIcon />
          Ubah
        </DropdownMenuItem>
        <DropdownMenuItem>
          <DownloadIcon />
          Unduh E-Tiket
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <XCircleIcon />
          Batalkan Pesanan
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
