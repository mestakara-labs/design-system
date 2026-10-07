/**
 * Kbd
 * Shows a keyboard key or shortcut, e.g. <Kbd>Ctrl</Kbd> <Kbd>K</Kbd>.
 *
 * Based on: https://ui.shadcn.com/docs/components/kbd
 */
import { cn } from "cn";

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-xs border border-b-2 border-border bg-subtle px-1 typo-label-s font-sans text-fg-secondary select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        className,
      )}
      {...props}
    />
  );
}

/** Several keys shown together, e.g. Ctrl + K. */
function KbdGroup({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  );
}

export { Kbd, KbdGroup };
