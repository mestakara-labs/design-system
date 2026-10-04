import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox";

const FACILITIES = ["Parkir", "Mushola", "Toilet", "Wi-Fi", "Akses kursi roda", "Area bermain"];

export default function ComboboxMultiple() {
  // The list is positioned under the whole chips field, not only under the text input.
  const anchor = useComboboxAnchor();

  return (
    <Combobox items={FACILITIES} multiple defaultValue={["Parkir", "Mushola"]}>
      <ComboboxChips ref={anchor} className="w-80">
        <ComboboxValue>
          {(values: string[]) =>
            values.map((value) => <ComboboxChip key={value}>{value}</ComboboxChip>)
          }
        </ComboboxValue>
        <ComboboxChipsInput placeholder="Tambah fasilitas…" aria-label="Fasilitas" />
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>Fasilitas tidak ditemukan.</ComboboxEmpty>
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
