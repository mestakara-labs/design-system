import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

export default function ItemMenu() {
  // "Menu Item (F&B)" from DESIGN.md §5: thumbnail, name, description, price, "+ Tambah".
  return (
    <Item variant="outline" className="w-full max-w-md rounded-lg p-3">
      <ItemMedia variant="image">
        <img src="/images/tea-hills-1.svg" alt="" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle className="typo-label-l">Teh Tarik Rancabali</ItemTitle>
        <ItemDescription>Teh hitam lokal dengan susu, disajikan hangat.</ItemDescription>
        <p className="typo-label-m text-fg-brand">Rp18.000</p>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="tonal">
          <PlusIcon />
          Tambah
        </Button>
      </ItemActions>
    </Item>
  );
}
