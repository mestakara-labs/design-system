import { MailIcon } from "lucide-react";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

export default function InputGroupInvalid() {
  return (
    <Field className="max-w-sm" data-invalid>
      <FieldLabel htmlFor="ig-email">Email</FieldLabel>
      <InputGroup>
        <InputGroupInput id="ig-email" defaultValue="nama@email" aria-invalid="true" />
        <InputGroupAddon>
          <MailIcon />
        </InputGroupAddon>
      </InputGroup>
      <FieldError>Format email belum lengkap, contoh: nama@email.com.</FieldError>
    </Field>
  );
}
