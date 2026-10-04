/**
 * Message
 * One row of a chat: avatar + name + bubble(s) + time.
 * `align="end"` mirrors the row for the user's own messages (avatar on the right).
 *
 * Based on: https://ui.shadcn.com/docs/components/message
 *
 * Structure:
 *   <Message align="start">
 *     <MessageAvatar><Avatar … /></MessageAvatar>
 *     <MessageContent>
 *       <MessageHeader>CS Gunung Mas</MessageHeader>
 *       <Bubble variant="secondary"><BubbleContent>…</BubbleContent></Bubble>
 *       <MessageFooter>09.41</MessageFooter>
 *     </MessageContent>
 *   </Message>
 */
import { cn } from "cn";
import * as React from "react";

/** A list of messages with even spacing. */
function MessageGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-group"
      className={cn("flex min-w-0 flex-col gap-4", className)}
      {...props}
    />
  );
}

function Message({
  className,
  align = "start",
  ...props
}: React.ComponentProps<"div"> & {
  /** "end" = the user's own message, shown on the right. */
  align?: "start" | "end";
}) {
  return (
    <div
      data-slot="message"
      data-align={align}
      className={cn(
        "group/message relative flex w-full min-w-0 gap-2 typo-body-m data-[align=end]:flex-row-reverse",
        className,
      )}
      {...props}
    />
  );
}

/** Holds the avatar. Sits at the bottom, next to the last bubble. */
function MessageAvatar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-avatar"
      className={cn(
        "flex w-fit min-w-8 shrink-0 items-center justify-center self-end overflow-hidden rounded-full bg-muted",
        // With a footer under the bubble, move up so the avatar lines up with the bubble.
        "group-has-data-[slot=message-footer]/message:-translate-y-6",
        className,
      )}
      {...props}
    />
  );
}

/** Column with the header, bubbles and footer. */
function MessageContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-content"
      className={cn(
        "flex w-full min-w-0 flex-col gap-1.5 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end",
        className,
      )}
      {...props}
    />
  );
}

/** Small line above the bubbles, e.g. the sender's name. */
function MessageHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-header"
      className={cn(
        "flex max-w-full min-w-0 items-center gap-1.5 px-1 typo-label-s text-fg-secondary group-has-data-[variant=ghost]/message:px-0",
        className,
      )}
      {...props}
    />
  );
}

/** Small line under the bubbles, e.g. the time or "Terkirim". */
function MessageFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-footer"
      className={cn(
        "flex max-w-full min-w-0 items-center gap-1.5 px-1 typo-body-s text-fg-tertiary group-has-data-[variant=ghost]/message:px-0 group-data-[align=end]/message:justify-end",
        className,
      )}
      {...props}
    />
  );
}

export { Message, MessageAvatar, MessageContent, MessageFooter, MessageGroup, MessageHeader };
