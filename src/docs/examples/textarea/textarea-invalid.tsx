import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

export default function TextareaInvalid() {
  return (
    <Field className="max-w-md" data-invalid>
      <FieldLabel htmlFor="review">Ulasan</FieldLabel>
      <Textarea id="review" defaultValue="Bagus" aria-invalid="true" />
      <FieldError>Ulasan minimal 20 karakter agar bermanfaat bagi pengunjung lain.</FieldError>
    </Field>
  );
}
