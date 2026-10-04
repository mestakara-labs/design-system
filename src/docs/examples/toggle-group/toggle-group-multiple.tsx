import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function ToggleGroupMultiple() {
  // type="multiple": any number of items can be on.
  return (
    <ToggleGroup type="multiple" defaultValue={["bold"]} aria-label="Format teks">
      <ToggleGroupItem value="bold" aria-label="Tebal">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Miring">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Garis bawah">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
