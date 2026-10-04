import { useState } from "react";

import { Calendar } from "@/components/ui/calendar";

export default function CalendarDisabledDays() {
  const [date, setDate] = useState<Date | undefined>();

  // Past days and every Monday (closed day) cannot be picked.
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={[{ before: new Date() }, { dayOfWeek: [1] }]}
      className="rounded-lg border border-border"
    />
  );
}
