import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectWithField() {
  return (
    <Field className="max-w-xs" data-invalid>
      <FieldLabel htmlFor="visitors">Jumlah Pengunjung</FieldLabel>
      <Select>
        <SelectTrigger id="visitors" className="w-full" aria-invalid="true">
          <SelectValue placeholder="Pilih jumlah" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="1">1 orang</SelectItem>
          <SelectItem value="2">2 orang</SelectItem>
          <SelectItem value="3-5">3–5 orang</SelectItem>
          <SelectItem value="6+">6 orang atau lebih</SelectItem>
        </SelectContent>
      </Select>
      <FieldError>Pilih jumlah pengunjung untuk melanjutkan.</FieldError>
    </Field>
  );
}
