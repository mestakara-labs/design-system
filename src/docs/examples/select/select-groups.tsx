import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectGroups() {
  return (
    <Select>
      <SelectTrigger className="w-64" aria-label="Outlet">
        <SelectValue placeholder="Pilih outlet" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Kebun Teh</SelectLabel>
          <SelectItem value="gunung-mas">Gunung Mas Tea Hills</SelectItem>
          <SelectItem value="rancabali">Rancabali Tea Valley</SelectItem>
          <SelectItem value="malabar">Malabar Tea Village</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Food & Beverages</SelectLabel>
          <SelectItem value="bosscha">Bosscha Space</SelectItem>
          <SelectItem value="hi-tea">Hi, Tea!</SelectItem>
          <SelectItem value="manoe" disabled>
            Manoe Cafe (tutup)
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
