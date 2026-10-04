import { SlidersHorizontalIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function PopoverForm() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <SlidersHorizontalIcon />
          Atur Jumlah
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-80">
        <div className="flex flex-col gap-4">
          <PopoverHeader>
            <PopoverTitle>Jumlah Pengunjung</PopoverTitle>
          </PopoverHeader>
          <FieldGroup className="gap-3">
            <Field orientation="horizontal">
              <FieldLabel htmlFor="adult" className="flex-1">
                Dewasa
              </FieldLabel>
              <Input id="adult" type="number" defaultValue={2} min={1} className="w-24" />
            </Field>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="child" className="flex-1">
                Anak
              </FieldLabel>
              <Input id="child" type="number" defaultValue={0} min={0} className="w-24" />
            </Field>
          </FieldGroup>
        </div>
      </PopoverContent>
    </Popover>
  );
}
