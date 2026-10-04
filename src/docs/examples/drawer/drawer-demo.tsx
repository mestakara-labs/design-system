import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const PRICE = 75_000;

export default function DrawerDemo() {
  const [quantity, setQuantity] = useState(2);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Pesan Tiket</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Jumlah Tiket</DrawerTitle>
            <DrawerDescription>Paket Petik Teh & Sarapan · Sabtu, 17 Okt 2026</DrawerDescription>
          </DrawerHeader>
          <div className="flex items-center justify-center gap-6 px-5 py-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Kurangi"
              disabled={quantity <= 1}
              onClick={() => setQuantity((value) => value - 1)}
            >
              <MinusIcon />
            </Button>
            <div className="text-center">
              <p className="typo-display-l text-fg-brand">{quantity}</p>
              <p className="typo-body-s text-fg-tertiary">orang</p>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Tambah"
              onClick={() => setQuantity((value) => value + 1)}
            >
              <PlusIcon />
            </Button>
          </div>
          <DrawerFooter>
            <Button size="lg">Bayar Rp{(quantity * PRICE).toLocaleString("id-ID")}</Button>
            <DrawerClose asChild>
              <Button variant="ghost">Nanti saja</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
