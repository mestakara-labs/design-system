import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function ToggleGroupDisabled() {
  return (
    <ToggleGroup type="single" variant="outline" defaultValue="pagi" aria-label="Sesi">
      <ToggleGroupItem value="pagi">Pagi</ToggleGroupItem>
      <ToggleGroupItem value="siang" disabled>
        Siang (penuh)
      </ToggleGroupItem>
      <ToggleGroupItem value="sore">Sore</ToggleGroupItem>
    </ToggleGroup>
  );
}
