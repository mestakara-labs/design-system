import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function ToggleGroupDemo() {
  // type="single": exactly one item can be on, like a filter.
  return (
    <ToggleGroup type="single" defaultValue="semua" variant="outline" aria-label="Kategori menu">
      <ToggleGroupItem value="semua">Semua</ToggleGroupItem>
      <ToggleGroupItem value="teh">Teh</ToggleGroupItem>
      <ToggleGroupItem value="kopi">Kopi</ToggleGroupItem>
      <ToggleGroupItem value="makanan">Makanan</ToggleGroupItem>
    </ToggleGroup>
  );
}
