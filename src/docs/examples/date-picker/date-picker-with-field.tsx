import { format } from "date-fns";
import { id } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function DatePickerWithField() {
  const [date, setDate] = useState<Date>();

  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="birth-date">Tanggal Lahir</FieldLabel>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="birth-date"
            variant="outline"
            data-empty={!date}
            className="w-full justify-between typo-body-l font-normal data-[empty=true]:text-fg-tertiary"
          >
            {date ? format(date, "d MMMM yyyy", { locale: id }) : "Pilih tanggal"}
            <CalendarIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            captionLayout="dropdown"
            startMonth={new Date(1940, 0)}
            endMonth={new Date()}
          />
        </PopoverContent>
      </Popover>
      <FieldDescription>Untuk tiket anak usia di bawah 12 tahun.</FieldDescription>
    </Field>
  );
}
