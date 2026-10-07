/**
 * Checkbox
 * Lets the user turn an option on or off. Supports a third "indeterminate" state
 * (`checked="indeterminate"`), e.g. for a "select all" box when only some items are selected.
 *
 * Design: radius xs (4px) as described in DESIGN.md §4.
 * Based on: https://ui.shadcn.com/docs/components/checkbox
 */
import { cn } from "cn";
import { CheckIcon, MinusIcon } from "lucide-react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import * as React from "react";

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer group/checkbox size-4 shrink-0 cursor-pointer rounded-xs border-[1.5px] border-border-strong bg-surface transition-colors",
        "hover:border-primary",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
        "aria-invalid:border-danger",
        // Checked & indeterminate: green box, white mark.
        "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-fg-on-brand",
        "data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-fg-on-brand",
        // Disabled (checked or not).
        "disabled:cursor-not-allowed disabled:border-border disabled:bg-muted disabled:text-fg-disabled",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current"
      >
        <CheckIcon className="size-3 stroke-3 group-data-[state=indeterminate]/checkbox:hidden" />
        <MinusIcon className="hidden size-3 stroke-3 group-data-[state=indeterminate]/checkbox:block" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
