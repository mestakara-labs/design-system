import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SwitchDemo() {
  return (
    <div className="flex items-center gap-3">
      <Switch id="sw-promo" />
      <Label htmlFor="sw-promo">Notifikasi promo</Label>
    </div>
  );
}
