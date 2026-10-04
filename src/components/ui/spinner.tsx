/**
 * Spinner
 * A spinning icon that shows something is loading. Takes the current text color.
 *
 * Based on: https://ui.shadcn.com/docs/components/spinner
 */
import { cn } from "cn";
import { LoaderCircleIcon } from "lucide-react";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderCircleIcon
      role="status"
      // Default label for screen readers; pass `aria-label` to change it.
      aria-label="Memuat"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}

export { Spinner };
