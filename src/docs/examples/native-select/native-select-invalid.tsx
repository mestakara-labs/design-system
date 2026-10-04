import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";

export default function NativeSelectInvalid() {
  return (
    <Field className="w-fit" data-invalid>
      <FieldLabel htmlFor="ns-session">Sesi Kunjungan</FieldLabel>
      <NativeSelect id="ns-session" aria-invalid="true" defaultValue="">
        <NativeSelectOption value="" disabled>
          Pilih sesi
        </NativeSelectOption>
        <NativeSelectOption value="pagi">Pagi · 08.00–11.00</NativeSelectOption>
        <NativeSelectOption value="siang">Siang · 12.00–15.00</NativeSelectOption>
      </NativeSelect>
      <FieldError>Pilih salah satu sesi kunjungan.</FieldError>
    </Field>
  );
}
