import { Switch } from "@/components/ui/switch";

export default function SwitchSizes() {
  return (
    <>
      <Switch size="sm" aria-label="Small" defaultChecked />
      <Switch size="md" aria-label="Medium" defaultChecked />
    </>
  );
}
