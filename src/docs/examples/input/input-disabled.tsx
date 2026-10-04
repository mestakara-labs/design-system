import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function InputDisabled() {
  return (
    <Field className="max-w-sm" data-disabled>
      <FieldLabel htmlFor="booking-code">Kode Pemesanan</FieldLabel>
      <Input id="booking-code" defaultValue="RCB-0021" disabled />
    </Field>
  );
}
