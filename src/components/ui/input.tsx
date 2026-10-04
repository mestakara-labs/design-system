/**
 * Input
 * Single-line text field.
 *
 * Design: DESIGN.md §5 "Text Field" — shared styles live in `src/lib/control-styles.ts`.
 * Based on: https://ui.shadcn.com/docs/components/input
 *
 * Error state: add `aria-invalid="true"` (and show a helper text that explains the fix).
 */
import { cn } from "cn";
import * as React from "react";

import { controlStyles } from "../../lib/control-styles";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        controlStyles.base,
        controlStyles.focus,
        controlStyles.invalid,
        controlStyles.disabled,
        "h-12 px-4 typo-body-l",
        // <input type="file">
        "file:mr-3 file:inline-flex file:h-8 file:border-0 file:bg-transparent file:typo-label-m file:text-fg-primary",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
