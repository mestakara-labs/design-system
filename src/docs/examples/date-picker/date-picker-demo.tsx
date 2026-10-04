import { format } from "date-fns";
import { id } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function DatePickerDemo() {
  const [date, setDate] = useState<Date>();
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!date}
          className="w-72 justify-start typo-body-l font-normal data-[empty=true]:text-fg-tertiary"
        >
          <CalendarIcon />
          {/* Date format from DESIGN.md §7: "Sabtu, 17 Okt 2026" */}
          {date ? format(date, "EEEE, d MMM yyyy", { locale: id }) : "Pilih tanggal kunjungan"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(value) => {
            setDate(value);
            setOpen(false);
          }}
          disabled={{ before: new Date() }}
        />
      </PopoverContent>
    </Popover>
  );
}
