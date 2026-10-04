/**
 * Aspect Ratio
 * Keeps content (usually an image) at a fixed width-to-height ratio, e.g. 19/10 landscape photos.
 *
 * Design: destination photos use 19:10 (DESIGN.md §5 "Destination Card").
 * Based on: https://ui.shadcn.com/docs/components/aspect-ratio
 */
import { AspectRatio as AspectRatioPrimitive } from "radix-ui";

function AspectRatio(props: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />;
}

export { AspectRatio };
