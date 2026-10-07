/**
 * Textarea
 * Multi-line text field. Grows with its content.
 *
 * Design: DESIGN.md §5 "Text Field" — shared styles live in `src/lib/control-styles.ts`.
 * Based on: https://ui.shadcn.com/docs/components/textarea
 */
import { cn } from "cn";
import * as React from "react";

import { controlStyles } from "../../lib/control-styles";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        controlStyles.base,
        controlStyles.focus,
        controlStyles.invalid,
        controlStyles.disabled,
        "flex field-sizing-content min-h-16 px-3 py-2 typo-field",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
