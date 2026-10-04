/**
 * Slider
 * Pick a value (or a range, with two thumbs) by dragging, e.g. a price filter.
 *
 * Based on: https://ui.shadcn.com/docs/components/slider
 */
import { cn } from "cn";
import { Slider as SliderPrimitive } from "radix-ui";
import * as React from "react";

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  // One thumb per value: [50] → 1 thumb, [20, 80] → 2 thumbs (range).
  const values = React.useMemo(
    () => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]),
    [value, defaultValue, min, max],
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:cursor-not-allowed",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className="relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2"
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className="absolute bg-primary data-[disabled]:bg-fg-disabled data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
        />
      </SliderPrimitive.Track>

      {values.map((_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          data-slot="slider-thumb"
          className={cn(
            "block size-5 shrink-0 cursor-grab rounded-full border-2 border-primary bg-surface shadow-sm transition-shadow",
            "hover:ring-4 hover:ring-primary/15",
            "focus-visible:ring-4 focus-visible:ring-primary/25 focus-visible:outline-none",
            "active:cursor-grabbing",
            "data-[disabled]:pointer-events-none data-[disabled]:border-fg-disabled",
          )}
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };
