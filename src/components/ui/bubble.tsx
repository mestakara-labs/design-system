/**
 * Bubble
 * The balloon around one chat message, e.g. a visitor asking customer service about tickets.
 * Usually placed inside <Message>; `align="end"` puts it on the right (the user's own messages).
 *
 * Design: radius lg (16px); the user's messages are green (`action/primary`), replies are light.
 * Based on: https://ui.shadcn.com/docs/components/bubble
 *
 * Structure:
 *   <Bubble variant="default" align="end">
 *     <BubbleContent>Halo, apakah tiket bisa dijadwalkan ulang?</BubbleContent>
 *     <BubbleReactions>👍</BubbleReactions>   ← optional
 *   </Bubble>
 */
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { Slot } from "radix-ui";
import * as React from "react";

/** Stacks several bubbles from the same sender. */
function BubbleGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="bubble-group"
      className={cn("flex min-w-0 flex-col gap-1.5", className)}
      {...props}
    />
  );
}

/*
 * The color is set on the <BubbleContent> inside (`*:data-[slot=bubble-content]:…`), so one
 * Bubble can also hold reactions that keep their own look.
 * "Clickable" lines style a BubbleContent rendered as a <button> or <a> (via asChild).
 */
const bubbleVariants = cva(
  "group/bubble relative flex w-fit max-w-[80%] min-w-0 flex-col gap-1 group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full",
  {
    variants: {
      variant: {
        // The user's own message: green with white text.
        default: [
          "*:data-[slot=bubble-content]:bg-primary *:data-[slot=bubble-content]:text-fg-on-brand",
          "[&>[data-slot=bubble-content]:is(button,a):hover]:bg-primary-hover", // clickable
        ],
        // Replies from the other person.
        secondary: [
          "*:data-[slot=bubble-content]:bg-subtle *:data-[slot=bubble-content]:text-fg-primary",
          "[&>[data-slot=bubble-content]:is(button,a):hover]:bg-muted", // clickable
        ],
        muted: [
          "*:data-[slot=bubble-content]:bg-muted *:data-[slot=bubble-content]:text-fg-primary",
          "[&>[data-slot=bubble-content]:is(button,a):hover]:bg-border", // clickable
        ],
        // Light green, e.g. answers from the assistant.
        tinted: [
          "*:data-[slot=bubble-content]:bg-brand-subtle *:data-[slot=bubble-content]:text-fg-primary",
          "[&>[data-slot=bubble-content]:is(button,a):hover]:bg-tonal-hover", // clickable
        ],
        outline: [
          "*:data-[slot=bubble-content]:border-border *:data-[slot=bubble-content]:bg-surface *:data-[slot=bubble-content]:text-fg-primary",
          "[&>[data-slot=bubble-content]:is(button,a):hover]:bg-subtle", // clickable
        ],
        // No balloon: plain text, e.g. a long answer.
        ghost: [
          "*:data-[slot=bubble-content]:rounded-none *:data-[slot=bubble-content]:bg-transparent *:data-[slot=bubble-content]:p-0 *:data-[slot=bubble-content]:text-fg-primary",
          "[&>[data-slot=bubble-content]:is(button,a):hover]:bg-subtle", // clickable
        ],
        // A message that failed to send.
        destructive: [
          "*:data-[slot=bubble-content]:bg-danger-subtle *:data-[slot=bubble-content]:text-fg-danger",
          "[&>[data-slot=bubble-content]:is(button,a):hover]:bg-danger-subtle/70", // clickable
        ],
      },
    },
    defaultVariants: { variant: "default" },
  },
);

function Bubble({
  variant = "default",
  align = "start",
  className,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof bubbleVariants> & {
    /** "end" = right side (your own messages). Inside <Message> it follows the message. */
    align?: "start" | "end";
  }) {
  return (
    <div
      data-slot="bubble"
      data-variant={variant}
      data-align={align}
      className={cn(bubbleVariants({ variant }), className)}
      {...props}
    />
  );
}

/** The text inside the balloon. Use `asChild` to make it a button or link (e.g. a suggestion). */
function BubbleContent({
  asChild = false,
  className,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Component = asChild ? Slot.Root : "div";

  return (
    <Component
      data-slot="bubble-content"
      className={cn(
        "w-fit max-w-full min-w-0 overflow-hidden rounded-lg border border-transparent px-4 py-2.5 typo-body-m wrap-break-word group-data-[align=end]/bubble:self-end",
        // When rendered as a button or link.
        "[button]:cursor-pointer [button]:text-left [button,a]:transition-colors [button,a]:focus-visible:outline-2 [button,a]:focus-visible:outline-offset-2 [button,a]:focus-visible:outline-focus",
        className,
      )}
      {...props}
    />
  );
}

const bubbleReactionsVariants = cva(
  "absolute z-10 flex w-fit shrink-0 items-center justify-center gap-1 rounded-full bg-surface px-1.5 py-0.5 typo-body-s shadow-sm ring-2 ring-canvas has-[button]:p-0",
  {
    variants: {
      side: {
        top: "top-0 -translate-y-3/4",
        bottom: "bottom-0 translate-y-3/4",
      },
      align: {
        start: "left-3",
        end: "right-3",
      },
    },
    defaultVariants: { side: "bottom", align: "end" },
  },
);

/** Small emoji reactions pinned to the corner of the balloon. */
function BubbleReactions({
  side = "bottom",
  align = "end",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "start" | "end";
  side?: "top" | "bottom";
}) {
  return (
    <div
      data-slot="bubble-reactions"
      data-align={align}
      data-side={side}
      className={cn(bubbleReactionsVariants({ side, align }), className)}
      {...props}
    />
  );
}

export { Bubble, BubbleContent, BubbleGroup, BubbleReactions, bubbleVariants };
