import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select";

export default function NativeSelectGroups() {
  return (
    <NativeSelect aria-label="Outlet">
      <NativeSelectOptGroup label="Kebun Teh">
        <NativeSelectOption value="gunung-mas">Gunung Mas Tea Hills</NativeSelectOption>
        <NativeSelectOption value="rancabali">Rancabali Tea Valley</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Food & Beverages">
        <NativeSelectOption value="bosscha">Bosscha Space</NativeSelectOption>
        <NativeSelectOption value="hi-tea">Hi, Tea!</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  );
}
