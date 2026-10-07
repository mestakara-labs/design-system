import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";

export default function ButtonGroupWithInput() {
  return (
    <ButtonGroup className="w-full max-w-sm">
      <Input placeholder="Kode promo" aria-label="Kode promo" />
      <Button variant="tonal">Pakai</Button>
    </ButtonGroup>
  );
}
