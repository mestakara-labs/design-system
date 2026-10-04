import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function InputInvalid() {
  return (
    <Field className="max-w-sm" data-invalid>
      <FieldLabel htmlFor="visitor-phone">Nomor WhatsApp</FieldLabel>
      <Input id="visitor-phone" type="tel" defaultValue="0812" aria-invalid="true" />
      <FieldError>Nomor terlalu pendek. Masukkan 10–13 digit, contoh 081234567890.</FieldError>
    </Field>
  );
}
