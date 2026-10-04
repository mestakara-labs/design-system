/**
 * Input OTP
 * One box per character for one-time codes (e.g. the 6-digit code sent by SMS/WhatsApp).
 *
 *   <InputOTP maxLength={6}>
 *     <InputOTPGroup>
 *       <InputOTPSlot index={0} /> … <InputOTPSlot index={5} />
 *     </InputOTPGroup>
 *   </InputOTP>
 *
 * Design: boxes follow DESIGN.md §5 "Text Field" (48px, focus border navy).
 * Based on: https://ui.shadcn.com/docs/components/input-otp (uses the `input-otp` package)
 */
import { cn } from "cn";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";
import * as React from "react";

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & { containerClassName?: string }) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2",
        // Disabled: grey out every box.
        "has-disabled:cursor-not-allowed has-disabled:[&_[data-slot=input-otp-slot]]:bg-muted has-disabled:[&_[data-slot=input-otp-slot]]:text-fg-disabled",
        containerClassName,
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}

/** Joins a few slots into one block. */
function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-group" className={cn("flex items-center", className)} {...props} />
  );
}

/** One character box. `index` = its position (0 = first). */
function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & { index: number }) {
  const context = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = context?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "relative flex size-12 items-center justify-center border-y border-r border-border bg-surface typo-h3 text-fg-primary transition-[border-color,box-shadow]",
        "first:rounded-l-md first:border-l last:rounded-r-md",
        // The box where the next character goes.
        "data-[active=true]:z-10 data-[active=true]:border-focus data-[active=true]:ring-1 data-[active=true]:ring-focus",
        "aria-invalid:border-danger data-[active=true]:aria-invalid:border-danger data-[active=true]:aria-invalid:ring-danger",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-5 w-px animate-caret-blink bg-fg-primary" />
        </div>
      )}
    </div>
  );
}

/** A dash between two groups, e.g. "123 – 456". */
function InputOTPSeparator(props: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" className="text-fg-tertiary" {...props}>
      <MinusIcon className="size-4" />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
