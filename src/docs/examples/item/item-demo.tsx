import { TicketIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

export default function ItemDemo() {
  return (
    <Item variant="outline" className="w-full max-w-md">
      <ItemMedia variant="icon">
        <TicketIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Tiket Terusan + Wahana Keluarga</ItemTitle>
        <ItemDescription>Gunung Mas Tea Hills · Sabtu, 17 Okt 2026</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="tonal">
          Lihat
        </Button>
      </ItemActions>
    </Item>
  );
}
