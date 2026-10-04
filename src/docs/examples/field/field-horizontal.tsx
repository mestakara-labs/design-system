import { Field, FieldContent, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";

export default function FieldHorizontal() {
  return (
    <Field orientation="horizontal" className="w-full max-w-md">
      <FieldContent>
        <FieldLabel htmlFor="promo-notif">Notifikasi Promo</FieldLabel>
        <FieldDescription>Dapatkan info diskon tiket dan paket baru.</FieldDescription>
      </FieldContent>
      <Switch id="promo-notif" defaultChecked />
    </Field>
  );
}
