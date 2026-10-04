/**
 * Button Group
 * Joins related buttons (and inputs/selects) into one bar, e.g. "Unduh PDF | Bagikan".
 *
 * Based on: https://ui.shadcn.com/docs/components/button-group
 */
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { Slot } from "radix-ui";

import { Separator } from "./separator";

const buttonGroupVariants = cva(
  [
    "flex w-fit items-stretch",
    // Nested groups get a gap between them.
    "has-[>[data-slot=button-group]]:gap-2",
    // A focused item is drawn above its neighbours, so its focus outline is fully visible.
    "[&>*]:focus-visible:relative [&>*]:focus-visible:z-10",
    "[&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
  ],
  {
    variants: {
      orientation: {
        // Square inner corners, remove the double border between items.
        horizontal:
          "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical:
          "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  },
);

function ButtonGroup({
  className,
  orientation,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  );
}

/** A non-clickable text cell inside the group, e.g. a unit like "Rp" or "orang". */
function ButtonGroupText({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Component = asChild ? Slot.Root : "div";

  return (
    <Component
      className={cn(
        "flex items-center gap-2 rounded-md border-[1.5px] border-border-strong bg-subtle px-4 typo-label-m text-fg-secondary",
        "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

/** A thin line between two solid buttons (e.g. two primary buttons). */
function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        "relative m-0! self-stretch bg-white/40 data-[orientation=vertical]:h-auto",
        className,
      )}
      {...props}
    />
  );
}

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText, buttonGroupVariants };
