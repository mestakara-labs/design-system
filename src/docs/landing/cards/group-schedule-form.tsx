import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

/** Form to book a visit for a group (school, company …). */
export function GroupScheduleForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Jadwalkan Rombongan</CardTitle>
        <CardDescription>
          Isi data rombongan, petugas akan menyiapkan pemandu dan kuota.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup className="gap-4">
          <Field>
            <FieldLabel htmlFor="landing-group-name">Nama rombongan</FieldLabel>
            <Input id="landing-group-name" placeholder="cth. SDN 3 Bogor, PT Maju Jaya" />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field>
              <FieldLabel htmlFor="landing-group-size">Jumlah peserta</FieldLabel>
              <Input id="landing-group-size" defaultValue="120" inputMode="numeric" />
            </Field>
            <Field>
              <FieldLabel htmlFor="landing-group-date">Tanggal</FieldLabel>
              <Input id="landing-group-date" defaultValue="18 Okt 2026" />
            </Field>
          </div>
        </FieldGroup>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">Simpan Jadwal</Button>
        <Button variant="outline" className="w-full">
          Batal
        </Button>
      </CardFooter>
    </Card>
  );
}
