import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const DAYS = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

export default function ToggleGroupSpacing() {
  // spacing={2} = 8px between items, each item keeps its own rounded corners.
  return (
    <ToggleGroup
      type="multiple"
      variant="outline"
      size="sm"
      spacing={2}
      defaultValue={["Sab", "Min"]}
      aria-label="Hari buka"
    >
      {DAYS.map((day) => (
        <ToggleGroupItem key={day} value={day}>
          {day}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
