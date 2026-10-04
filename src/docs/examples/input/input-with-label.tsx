import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function InputWithLabel() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="visitor-email">Email</FieldLabel>
      <Input id="visitor-email" type="email" placeholder="nama@email.com" />
      <FieldDescription>E-tiket akan dikirim ke email ini.</FieldDescription>
    </Field>
  );
}
