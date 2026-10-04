import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";

export default function NativeSelectDemo() {
  return (
    <NativeSelect aria-label="Unit" defaultValue="">
      <NativeSelectOption value="" disabled>
        Pilih unit
      </NativeSelectOption>
      <NativeSelectOption value="gunung-mas">Gunung Mas Tea Hills</NativeSelectOption>
      <NativeSelectOption value="rancabali">Rancabali Tea Valley</NativeSelectOption>
      <NativeSelectOption value="malabar">Malabar Tea Village</NativeSelectOption>
      <NativeSelectOption value="walini">Walini by Me</NativeSelectOption>
    </NativeSelect>
  );
}
