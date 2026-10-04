import { TicketIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export default function EmptyDemo() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <TicketIcon />
        </EmptyMedia>
        <EmptyTitle>Belum ada tiket</EmptyTitle>
        <EmptyDescription>
          Tiket yang Anda pesan akan muncul di sini. Yuk, pilih destinasi untuk akhir pekan!
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Lihat Paket</Button>
      </EmptyContent>
    </Empty>
  );
}
