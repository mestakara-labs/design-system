import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";

const FACILITIES = ["Parkir", "Mushola", "Toilet", "Akses kursi roda"];

export default function FieldCheckboxGroup() {
  return (
    <FieldSet className="w-full max-w-md">
      <FieldLegend variant="label">Fasilitas</FieldLegend>
      <FieldDescription>Pilih fasilitas yang Anda butuhkan.</FieldDescription>
      <FieldGroup data-slot="checkbox-group">
        {FACILITIES.map((facility) => (
          <Field key={facility} orientation="horizontal">
            <Checkbox id={`facility-${facility}`} defaultChecked={facility === "Parkir"} />
            <FieldLabel htmlFor={`facility-${facility}`}>{facility}</FieldLabel>
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  );
}
