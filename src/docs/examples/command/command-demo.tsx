import { CalendarIcon, MapPinIcon, ReceiptIcon, TicketIcon, UserIcon } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export default function CommandDemo() {
  return (
    <Command className="max-w-md rounded-lg border border-border shadow-sm">
      <CommandInput placeholder="Cari menu atau destinasi…" />
      <CommandList>
        <CommandEmpty>Tidak ditemukan.</CommandEmpty>
        <CommandGroup heading="Destinasi">
          <CommandItem>
            <MapPinIcon />
            Gunung Mas Tea Hills
          </CommandItem>
          <CommandItem>
            <MapPinIcon />
            Rancabali Tea Valley
          </CommandItem>
          <CommandItem disabled>
            <MapPinIcon />
            Walini by Me (renovasi)
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Akun">
          <CommandItem>
            <TicketIcon />
            Tiket Saya
            <CommandShortcut>Ctrl+T</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <ReceiptIcon />
            Riwayat Pesanan
          </CommandItem>
          <CommandItem>
            <CalendarIcon />
            Jadwal Kunjungan
          </CommandItem>
          <CommandItem>
            <UserIcon />
            Profil
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
