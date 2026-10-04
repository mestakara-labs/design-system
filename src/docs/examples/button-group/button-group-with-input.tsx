import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";

export default function ButtonGroupWithInput() {
  return (
    <ButtonGroup className="w-full max-w-sm">
      {/* h-11 = same height as a medium Button (44px); a normal Input is 48px. */}
      <Input placeholder="Kode promo" aria-label="Kode promo" className="h-11" />
      <Button variant="tonal">Pakai</Button>
    </ButtonGroup>
  );
}
