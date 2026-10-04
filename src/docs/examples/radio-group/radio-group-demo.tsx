import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="qris">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="qris" id="pay-qris" />
        <Label htmlFor="pay-qris">QRIS</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="transfer" id="pay-transfer" />
        <Label htmlFor="pay-transfer">Transfer Bank</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="cash" id="pay-cash" />
        <Label htmlFor="pay-cash">Bayar di Loket</Label>
      </div>
    </RadioGroup>
  );
}
