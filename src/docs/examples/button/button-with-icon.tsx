import { ArrowRightIcon, MapPinIcon, TicketIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonWithIcon() {
  return (
    <>
      <Button>
        <TicketIcon />
        Pesan Tiket
      </Button>
      <Button variant="tonal">
        <MapPinIcon />
        Arah Lokasi
      </Button>
      <Button variant="ghost">
        Lihat semua
        <ArrowRightIcon />
      </Button>
    </>
  );
}
