import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

const DESTINATIONS = [
  "Gunung Mas Tea Hills",
  "Rancabali Tea Valley",
  "Malabar Tea Village",
  "Walini by Me",
  "Bosscha Space",
  "Hi, Tea!",
  "Manoe Cafe",
];

export default function ComboboxDemo() {
  return (
    <Combobox items={DESTINATIONS}>
      <ComboboxInput placeholder="Cari destinasi…" className="w-72" aria-label="Destinasi" />
      <ComboboxContent>
        <ComboboxEmpty>Destinasi tidak ditemukan.</ComboboxEmpty>
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
