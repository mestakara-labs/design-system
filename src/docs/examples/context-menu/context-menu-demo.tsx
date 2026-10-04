import { CopyIcon, DownloadIcon, PrinterIcon, XCircleIcon } from "lucide-react";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-40 w-full max-w-sm items-center justify-center rounded-lg border-2 border-dashed border-border-strong typo-body-m text-fg-secondary">
        Klik kanan di sini (atau tekan lama)
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuLabel>Pesanan RCB-0021</ContextMenuLabel>
        <ContextMenuItem>
          <CopyIcon />
          Salin Kode
          <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <DownloadIcon />
          Unduh E-Tiket
        </ContextMenuItem>
        <ContextMenuItem>
          <PrinterIcon />
          Cetak
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem defaultChecked>Tandai sudah check-in</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <XCircleIcon />
          Batalkan
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
