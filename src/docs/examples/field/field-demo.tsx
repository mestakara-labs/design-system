import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function FieldDemo() {
  return (
    <form className="w-full max-w-md">
      <FieldSet>
        <FieldLegend>Data Pengunjung</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="fd-name">Nama Lengkap</FieldLabel>
            <Input id="fd-name" placeholder="Sesuai KTP" />
          </Field>
          <Field>
            <FieldLabel htmlFor="fd-email">Email</FieldLabel>
            <Input id="fd-email" type="email" placeholder="nama@email.com" />
            <FieldDescription>E-tiket akan dikirim ke email ini.</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="fd-phone">Nomor WhatsApp</FieldLabel>
            <Input id="fd-phone" type="tel" placeholder="081234567890" />
          </Field>
          <Button type="submit">Lanjut ke Pembayaran</Button>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
