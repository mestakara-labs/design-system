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

export default function DrawerRight() {
  // direction="right" slides in from the side and can be swiped to the right to close.
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">Detail Pesanan</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Pesanan RCB-0021</DrawerTitle>
          <DrawerDescription>Rancabali Tea Valley · 2 tiket</DrawerDescription>
        </DrawerHeader>
        <dl className="grid grid-cols-2 gap-y-3 px-5 typo-body-m">
          <dt className="text-fg-secondary">Tanggal</dt>
          <dd className="text-right">Sabtu, 17 Okt 2026</dd>
          <dt className="text-fg-secondary">Sesi</dt>
          <dd className="text-right">08.00–11.00</dd>
          <dt className="text-fg-secondary">Total</dt>
          <dd className="text-right typo-label-m text-fg-brand">Rp150.000</dd>
        </dl>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Tutup</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
