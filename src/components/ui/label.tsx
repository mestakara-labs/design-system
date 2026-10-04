/**
 * Label
 * Text label for a form control. Clicking it focuses the control.
 *
 * Design: DESIGN.md §5 "Text Field" — label above the field, Label/M.
 * Based on: https://ui.shadcn.com/docs/components/label
 */
import { cn } from "cn";
import { Label as LabelPrimitive } from "radix-ui";
import * as React from "react";

function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 typo-label-m text-fg-primary select-none",
        // Grey out when the related control is disabled.
        "peer-disabled:cursor-not-allowed peer-disabled:text-fg-disabled",
        "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:text-fg-disabled",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
