import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LabelWithInput() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="full-name">Nama Lengkap</Label>
      <Input id="full-name" placeholder="Sesuai KTP" />
    </div>
  );
}
