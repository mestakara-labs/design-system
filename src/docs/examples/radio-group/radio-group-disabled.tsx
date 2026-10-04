import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioGroupDisabled() {
  return (
    <RadioGroup defaultValue="pagi">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="pagi" id="slot-pagi" />
        <Label htmlFor="slot-pagi">Sesi Pagi · 08.00–11.00</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="siang" id="slot-siang" disabled />
        <Label htmlFor="slot-siang">Sesi Siang · 12.00–15.00 (penuh)</Label>
      </div>
    </RadioGroup>
  );
}
