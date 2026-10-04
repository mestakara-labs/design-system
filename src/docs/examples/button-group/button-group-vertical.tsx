import { MinusIcon, PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export default function ButtonGroupVertical() {
  return (
    <ButtonGroup orientation="vertical" aria-label="Zoom peta">
      <Button variant="outline" size="icon" aria-label="Perbesar">
        <PlusIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Perkecil">
        <MinusIcon />
      </Button>
    </ButtonGroup>
  );
}
