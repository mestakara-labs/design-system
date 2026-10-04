import { useState } from "react";

import { Calendar } from "@/components/ui/calendar";

export default function CalendarDropdown() {
  const [date, setDate] = useState<Date | undefined>(new Date(1990, 5, 15));

  // captionLayout="dropdown" adds month & year dropdowns, handy for birth dates.
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      defaultMonth={date}
      captionLayout="dropdown"
      startMonth={new Date(1940, 0)}
      endMonth={new Date()}
      className="rounded-lg border border-border"
    />
  );
}
