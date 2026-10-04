/**
 * Skeleton
 * A grey pulsing placeholder shown while content is loading.
 * Give it the size and shape of the content it replaces.
 *
 * Based on: https://ui.shadcn.com/docs/components/skeleton
 */
import { cn } from "cn";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };
