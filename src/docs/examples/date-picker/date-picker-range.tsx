import { format } from "date-fns";
import { id } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import type { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const formatDate = (date: Date) => format(date, "d MMM yyyy", { locale: id });

export default function DatePickerRange() {
  const [range, setRange] = useState<DateRange>();

  let label = "Pilih tanggal menginap";
  if (range?.from && range.to) label = `${formatDate(range.from)} – ${formatDate(range.to)}`;
  else if (range?.from) label = formatDate(range.from);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!range?.from}
          className="w-80 justify-start typo-body-l font-normal data-[empty=true]:text-fg-tertiary"
        >
          <CalendarIcon />
          {label}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={range}
          onSelect={setRange}
          numberOfMonths={2}
          disabled={{ before: new Date() }}
        />
      </PopoverContent>
    </Popover>
  );
}
