/**
 * Button
 * Triggers an action: "Pesan Tiket", "Bayar Sekarang", "Lihat Paket".
 *
 * Design: DESIGN.md §5 "Button"
 * Based on: https://ui.shadcn.com/docs/components/button
 *
 * Rule of thumb: only ONE `primary` button per screen.
 */
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { Slot } from "radix-ui";
import * as React from "react";

const buttonVariants = cva(
  // Shared by every variant and size.
  [
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap transition-colors",
    "cursor-pointer select-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
    "disabled:pointer-events-none disabled:text-fg-disabled",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        // Main action. Green background, white text.
        primary:
          "bg-primary text-fg-on-brand hover:bg-primary-hover active:bg-primary-pressed disabled:bg-disabled",
        // Promo action. Orange background with DARK text (white on orange fails contrast).
        // Hover and pressed share one color (see semantic.css), so "pressed" also shrinks slightly.
        accent:
          "bg-secondary text-fg-primary hover:bg-secondary-hover active:scale-[0.98] active:bg-secondary-pressed disabled:bg-disabled",
        // Secondary action. Light green background, dark green text.
        tonal:
          "bg-tonal text-fg-brand hover:bg-tonal-hover active:bg-tonal-pressed disabled:bg-disabled",
        // No background, 1.5px border.
        outline:
          "border-[1.5px] border-border-strong bg-transparent text-fg-primary hover:bg-subtle active:bg-muted disabled:border-border",
        // No background, navy text. For "Lihat semua".
        ghost: "bg-transparent text-fg-link hover:bg-subtle active:bg-muted",
        // Looks like a text link.
        link: "h-auto! bg-transparent px-0! text-fg-link underline-offset-4 hover:underline",
        // Dangerous action, e.g. "Batalkan Pesanan".
        destructive:
          "bg-danger text-fg-on-brand hover:bg-danger-hover active:bg-danger-hover disabled:bg-disabled",
      },
      size: {
        // Sizes follow shadcn/ui: 32 / 36 / 40px high, 16px icons, Label/M text.
        sm: "h-8 gap-1.5 rounded-sm px-3 typo-label-m",
        md: "h-9 rounded-md px-4 typo-label-m",
        lg: "h-10 rounded-md px-6 typo-label-m",
        // Square buttons that only contain an icon. Always add an `aria-label`.
        "icon-sm": "size-8 rounded-sm",
        icon: "size-9 rounded-md",
        "icon-lg": "size-10 rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    /** Render the child element (e.g. a link) with button styles instead of a `<button>`. */
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Component = asChild ? Slot.Root : "button";

  return (
    <Component
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants, type ButtonProps };
