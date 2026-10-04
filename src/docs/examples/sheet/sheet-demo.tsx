import { SlidersHorizontalIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const UNITS = ["Gunung Mas", "Rancabali", "Malabar", "Walini"];

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <SlidersHorizontalIcon />
          Filter
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter Paket</SheetTitle>
          <SheetDescription>Pilih unit yang ingin Anda kunjungi.</SheetDescription>
        </SheetHeader>
        <FieldSet className="px-5">
          <FieldLegend variant="label">Unit</FieldLegend>
          <FieldGroup data-slot="checkbox-group">
            {UNITS.map((unit) => (
              <Field key={unit} orientation="horizontal">
                <Checkbox id={`sheet-${unit}`} defaultChecked={unit === "Rancabali"} />
                <FieldLabel htmlFor={`sheet-${unit}`}>{unit}</FieldLabel>
              </Field>
            ))}
          </FieldGroup>
        </FieldSet>
        <SheetFooter>
          <Button>Terapkan</Button>
          <SheetClose asChild>
            <Button variant="outline">Batal</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
