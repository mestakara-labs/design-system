import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

const CITIES = ["Bandung", "Bogor", "Cianjur", "Subang", "Garut", "Sukabumi"];

export default function ComboboxClear() {
  return (
    <Combobox items={CITIES} defaultValue="Bandung">
      <ComboboxInput placeholder="Kota asal" showClear className="w-72" aria-label="Kota asal" />
      <ComboboxContent>
        <ComboboxEmpty>Kota tidak ditemukan.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
