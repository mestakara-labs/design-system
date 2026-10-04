import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SwitchDisabled() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Switch id="sw-off" disabled />
        <Label htmlFor="sw-off">Tidak tersedia</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="sw-on" disabled defaultChecked />
        <Label htmlFor="sw-on">Selalu aktif</Label>
      </div>
    </div>
  );
}
