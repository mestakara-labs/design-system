/**
 * Direction
 * Tells every component inside it whether text runs left-to-right ("ltr", e.g. Indonesian)
 * or right-to-left ("rtl", e.g. Arabic). Menus, sliders and carousels then flip correctly.
 * Also set the `dir` attribute on <html> (or a wrapper) so the browser flips the layout.
 *
 * Based on: https://ui.shadcn.com/docs/components/direction
 */
import { Direction } from "radix-ui";
import * as React from "react";

function DirectionProvider({
  dir,
  direction,
  children,
}: React.ComponentProps<typeof Direction.DirectionProvider> & {
  /** Same as `dir`. */
  direction?: React.ComponentProps<typeof Direction.DirectionProvider>["dir"];
}) {
  return (
    <Direction.DirectionProvider dir={direction ?? dir}>{children}</Direction.DirectionProvider>
  );
}

/** Read the current direction ("ltr" or "rtl") inside your own components. */
const useDirection = Direction.useDirection;

export { DirectionProvider, useDirection };
