import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxDisabled() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Checkbox id="cb-disabled" disabled />
        <Label htmlFor="cb-disabled">Kuota habis</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="cb-disabled-checked" disabled defaultChecked />
        <Label htmlFor="cb-disabled-checked">Tiket masuk (wajib)</Label>
      </div>
    </div>
  );
}
