import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

export default function TextareaWithLabel() {
  return (
    <Field className="max-w-md">
      <FieldLabel htmlFor="special-request">Permintaan Khusus</FieldLabel>
      <Textarea id="special-request" placeholder="Contoh: kursi roda, menu vegetarian" />
      <FieldDescription>Opsional. Kami usahakan sesuai ketersediaan.</FieldDescription>
    </Field>
  );
}
