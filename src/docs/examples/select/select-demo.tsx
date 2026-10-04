import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-64" aria-label="Unit">
        <SelectValue placeholder="Pilih unit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="gunung-mas">Gunung Mas Tea Hills</SelectItem>
        <SelectItem value="rancabali">Rancabali Tea Valley</SelectItem>
        <SelectItem value="malabar">Malabar Tea Village</SelectItem>
        <SelectItem value="walini">Walini by Me</SelectItem>
      </SelectContent>
    </Select>
  );
}
