import { ArrowUpIcon, LeafIcon, PlusIcon, RotateCwIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";

/** An empty customer-service chat with a message box. */
export function CsChat() {
  return (
    <Card className="gap-0">
      <CardHeader className="border-b border-border pb-4">
        <CardTitle>Chat CS</CardTitle>
        <CardDescription>Ada yang bisa kami bantu?</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm" aria-label="Mulai ulang percakapan">
            <RotateCwIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 pt-4">
        <Empty className="py-10">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <LeafIcon />
            </EmptyMedia>
            <EmptyTitle>Selamat pagi, Rina!</EmptyTitle>
            <EmptyDescription>
              Tanyakan jadwal, harga tiket, atau paket wisata. Tekan kirim untuk memulai.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
        <InputGroup>
          <InputGroupTextarea
            aria-label="Pesan"
            defaultValue="Halo, apakah Tea Walk hari Minggu masih ada kuota untuk 4 orang?"
          />
          <InputGroupAddon align="block-end">
            <InputGroupButton size="icon-sm" variant="outline" aria-label="Lampirkan berkas">
              <PlusIcon />
            </InputGroupButton>
            <InputGroupButton
              size="icon-sm"
              variant="primary"
              className="ml-auto rounded-full"
              aria-label="Kirim"
            >
              <ArrowUpIcon />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </CardContent>
    </Card>
  );
}
