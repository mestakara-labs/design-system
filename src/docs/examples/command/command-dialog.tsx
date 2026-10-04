import { MapPinIcon, SearchIcon, TicketIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

export default function CommandDialogExample() {
  const [open, setOpen] = useState(false);

  // Open with Ctrl+J (Windows/Linux) or ⌘J (Mac). This site already uses Ctrl+K for its search.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() === "j" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        setOpen((value) => !value);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)} className="w-64 justify-start">
        <SearchIcon />
        <span className="flex-1 text-left text-fg-tertiary">Cari…</span>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>J</Kbd>
        </KbdGroup>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Cari menu atau destinasi…" />
        <CommandList>
          <CommandEmpty>Tidak ditemukan.</CommandEmpty>
          <CommandGroup heading="Destinasi">
            <CommandItem onSelect={() => setOpen(false)}>
              <MapPinIcon />
              Malabar Tea Village
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <MapPinIcon />
              Bosscha Space
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Akun">
            <CommandItem onSelect={() => setOpen(false)}>
              <TicketIcon />
              Tiket Saya
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
