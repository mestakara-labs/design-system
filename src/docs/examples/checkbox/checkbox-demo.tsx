import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxDemo() {
  return (
    <div className="flex items-center gap-3">
      <Checkbox id="cb-terms" />
      <Label htmlFor="cb-terms">Saya setuju dengan syarat & ketentuan</Label>
    </div>
  );
}
