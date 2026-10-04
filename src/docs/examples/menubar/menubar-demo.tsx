import { useState } from "react";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function MenubarDemo() {
  const [striped, setStriped] = useState(true);
  const [compact, setCompact] = useState(false);
  const [unit, setUnit] = useState("semua");

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Berkas</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Transaksi Baru <MenubarShortcut>Ctrl+N</MenubarShortcut>
          </MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Ekspor</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Excel (.xlsx)</MenubarItem>
              <MenubarItem>PDF</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Cetak <MenubarShortcut>Ctrl+P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Tampilan</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked={striped} onCheckedChange={setStriped}>
            Baris selang-seling
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={compact} onCheckedChange={setCompact}>
            Mode ringkas
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Unit</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={unit} onValueChange={setUnit}>
            <MenubarRadioItem value="semua">Semua Unit</MenubarRadioItem>
            <MenubarRadioItem value="gunung-mas">Gunung Mas</MenubarRadioItem>
            <MenubarRadioItem value="rancabali">Rancabali</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
