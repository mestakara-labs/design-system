import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";

export default function ButtonGroupQuantity() {
  const [quantity, setQuantity] = useState(2);

  return (
    <ButtonGroup aria-label="Jumlah tiket">
      <Button
        variant="outline"
        size="icon"
        aria-label="Kurangi"
        disabled={quantity <= 1}
        onClick={() => setQuantity((value) => value - 1)}
      >
        <MinusIcon />
      </Button>
      <ButtonGroupText className="min-w-24 justify-center bg-surface text-fg-primary">
        {quantity} orang
      </ButtonGroupText>
      <Button
        variant="outline"
        size="icon"
        aria-label="Tambah"
        onClick={() => setQuantity((value) => value + 1)}
      >
        <PlusIcon />
      </Button>
    </ButtonGroup>
  );
}
