import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldContent, FieldDescription, FieldLabel } from "@/components/ui/field";

export default function CheckboxWithDescription() {
  return (
    <Field orientation="horizontal" className="max-w-md">
      <Checkbox id="cb-insurance" defaultChecked />
      <FieldContent>
        <FieldLabel htmlFor="cb-insurance">Tambah asuransi perjalanan</FieldLabel>
        <FieldDescription>Rp5.000 per orang, berlaku selama kunjungan.</FieldDescription>
      </FieldContent>
    </Field>
  );
}
