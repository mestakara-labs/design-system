/**
 * Calendar
 * A month view for picking one date, several dates, or a date range.
 * Default language is Indonesian (weeks start on Monday, "Sen Sel Rab …").
 *
 *   const [date, setDate] = useState<Date>();
 *   <Calendar mode="single" selected={date} onSelect={setDate} />
 *
 * Based on: https://ui.shadcn.com/docs/components/calendar (uses `react-day-picker`)
 * All react-day-picker props work: https://daypicker.dev
 */
import { cn } from "cn";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import * as React from "react";
import { DayPicker, getDefaultClassNames, type DayButton } from "react-day-picker";
import { id } from "react-day-picker/locale";

import { Button, buttonVariants } from "./button";

type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  /** Style of the previous/next month buttons. */
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  locale = id,
  formatters,
  components,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      locale={locale}
      captionLayout={captionLayout}
      className={cn(
        // --cell-size = size of one day: 32px, as in shadcn/ui.
        "group/calendar bg-surface p-3 [--cell-size:--spacing(8)]",
        "[[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        className,
      )}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString(locale.code, { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant, size: null }),
          "size-(--cell-size) rounded-sm p-0 text-fg-primary select-none aria-disabled:text-fg-disabled",
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant, size: null }),
          "size-(--cell-size) rounded-sm p-0 text-fg-primary select-none aria-disabled:text-fg-disabled",
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 typo-label-m",
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          "relative rounded-sm border border-border has-focus:border-focus has-focus:ring-1 has-focus:ring-focus",
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn("absolute inset-0 bg-surface opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "text-fg-primary select-none",
          captionLayout === "label"
            ? "typo-label-m"
            : "flex h-8 items-center gap-1 rounded-sm pr-1 pl-2 typo-label-m [&>svg]:size-3.5 [&>svg]:text-fg-tertiary",
          defaultClassNames.caption_label,
        ),
        month_grid: cn("w-full border-collapse", defaultClassNames.month_grid),
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn("flex-1 typo-body-s text-fg-tertiary select-none", defaultClassNames.weekday),
        week: cn("mt-1 flex w-full", defaultClassNames.week),
        week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
        week_number: cn("typo-body-s text-fg-tertiary select-none", defaultClassNames.week_number),
        day: cn(
          "group/day relative aspect-square h-full w-full p-0 text-center select-none",
          "[&:last-child[data-selected=true]_button]:rounded-r-sm",
          props.showWeekNumber
            ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-sm"
            : "[&:first-child[data-selected=true]_button]:rounded-l-sm",
          defaultClassNames.day,
        ),
        range_start: cn("rounded-l-sm bg-brand-subtle", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-sm bg-brand-subtle", defaultClassNames.range_end),
        // Today: light-green background until it is selected.
        today: cn(
          "rounded-sm bg-brand-subtle text-fg-brand data-[selected=true]:rounded-none",
          defaultClassNames.today,
        ),
        outside: cn("text-fg-disabled aria-selected:text-fg-disabled", defaultClassNames.outside),
        disabled: cn("text-fg-disabled", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => (
          <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />
        ),
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return <ChevronLeftIcon className={cn("size-4", className)} {...props} />;
          }
          if (orientation === "right") {
            return <ChevronRightIcon className={cn("size-4", className)} {...props} />;
          }
          return <ChevronDownIcon className={cn("size-4", className)} {...props} />;
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => (
          <td {...props}>
            <div className="flex size-(--cell-size) items-center justify-center text-center">
              {children}
            </div>
          </td>
        ),
        ...components,
      }}
      {...props}
    />
  );
}

/** One day cell. Selected days are green; days inside a range are light green. */
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();

  // Move keyboard focus to the day react-day-picker marks as focused.
  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size={null}
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 rounded-sm typo-body-m text-inherit [&>span]:typo-body-s [&>span]:opacity-70",
        "group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10",
        // Single selected day
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-fg-on-brand data-[selected-single=true]:hover:bg-primary-hover",
        // Range
        "data-[range-start=true]:rounded-sm data-[range-start=true]:rounded-l-sm data-[range-start=true]:bg-primary data-[range-start=true]:text-fg-on-brand",
        "data-[range-end=true]:rounded-sm data-[range-end=true]:rounded-r-sm data-[range-end=true]:bg-primary data-[range-end=true]:text-fg-on-brand",
        "data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-brand-subtle data-[range-middle=true]:text-fg-brand",
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton, type CalendarProps };
