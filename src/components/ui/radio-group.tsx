/**
 * Radio Group
 * Lets the user pick exactly one option from a list.
 *
 * Based on: https://ui.shadcn.com/docs/components/radio-group
 */
import { cn } from "cn";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
import * as React from "react";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "aspect-square size-5 shrink-0 cursor-pointer rounded-full border-[1.5px] border-border-strong bg-surface transition-colors",
        "hover:border-primary",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
        "aria-invalid:border-danger",
        "data-[state=checked]:border-primary",
        "disabled:cursor-not-allowed disabled:border-border disabled:bg-muted",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex size-full items-center justify-center"
      >
        {/* The green dot. Grey when the item is disabled. */}
        <span className="size-2.5 rounded-full bg-primary [[data-disabled]_&]:bg-fg-disabled" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
