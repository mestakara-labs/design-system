import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";

export default function ButtonGroupSeparatorExample() {
  // Solid buttons have no border, so a separator keeps the two parts visible.
  return (
    <ButtonGroup>
      <Button>Pesan Tiket</Button>
      <ButtonGroupSeparator />
      <Button size="icon" aria-label="Pilihan lain">
        <ChevronDownIcon />
      </Button>
    </ButtonGroup>
  );
}
