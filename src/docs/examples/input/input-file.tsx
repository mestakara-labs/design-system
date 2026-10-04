import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function InputFile() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="payment-proof">Bukti Pembayaran</FieldLabel>
      <Input id="payment-proof" type="file" />
    </Field>
  );
}
