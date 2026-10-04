import { CircleCheckIcon, TicketIcon } from "lucide-react";

import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker";

export default function MarkerWithIcon() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Marker>
        <MarkerIcon>
          <TicketIcon />
        </MarkerIcon>
        <MarkerContent>Pesanan TRX-2026-0412 dibuat</MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <CircleCheckIcon className="text-success" />
        </MarkerIcon>
        <MarkerContent>
          Pembayaran diterima · <a href="#bukti-pembayaran">lihat bukti</a>
        </MarkerContent>
      </Marker>
    </div>
  );
}
