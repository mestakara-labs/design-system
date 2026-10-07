/**
 * Switch
 * An on/off control for settings that apply immediately (e.g. "Notifikasi promo").
 *
 * Based on: https://ui.shadcn.com/docs/components/switch
 */
import { cn } from "cn";
import { Switch as SwitchPrimitive } from "radix-ui";
import * as React from "react";

/** Track and thumb classes per size. The thumb moves by (track width − thumb − padding). */
const SIZES = {
  sm: { track: "h-4 w-7", thumb: "size-3 data-[state=checked]:translate-x-3" },
  md: { track: "h-5 w-9", thumb: "size-4 data-[state=checked]:translate-x-4" },
};

type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: keyof typeof SIZES;
};

function Switch({ className, size = "md", ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer inline-flex shrink-0 cursor-pointer items-center rounded-full p-0.5 transition-colors",
        "data-[state=checked]:bg-primary data-[state=unchecked]:bg-border-strong",
        // `enabled:` = only when not disabled, so hover never fights the disabled colors.
        "enabled:hover:data-[state=checked]:bg-primary-hover enabled:hover:data-[state=unchecked]:bg-neutral-400",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
        "disabled:cursor-not-allowed disabled:data-[state=checked]:bg-green-200 disabled:data-[state=unchecked]:bg-disabled",
        SIZES[size].track,
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block rounded-full bg-surface shadow-sm transition-transform data-[state=unchecked]:translate-x-0",
          SIZES[size].thumb,
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch, type SwitchProps };
