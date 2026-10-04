/**
 * Message Scroller
 * The scrolling area of a chat. It starts at the newest message, follows new messages
 * while the user is at the bottom, and shows a "↓" button when they scrolled up.
 *
 * Built on: @shadcn/react (unstyled message-scroller primitive)
 * Based on: https://ui.shadcn.com/docs/components/message-scroller
 *
 * Structure (give the parent a fixed height):
 *   <MessageScrollerProvider>
 *     <MessageScroller>
 *       <MessageScrollerViewport>
 *         <MessageScrollerContent>
 *           <MessageScrollerItem messageId="m1"> <Message … /> </MessageScrollerItem>
 *         </MessageScrollerContent>
 *       </MessageScrollerViewport>
 *       <MessageScrollerButton />
 *     </MessageScroller>
 *   </MessageScrollerProvider>
 */
import {
  MessageScroller as MessageScrollerPrimitive,
  useMessageScroller,
  useMessageScrollerScrollable,
  useMessageScrollerVisibility,
} from "@shadcn/react/message-scroller";
import { cn } from "cn";
import { ArrowDownIcon } from "lucide-react";
import * as React from "react";

import { Button } from "./button";

/**
 * Keeps the scroll state. Put it around the scroller AND around anything that calls
 * `useMessageScroller()` (e.g. the message composer that scrolls down after sending).
 */
function MessageScrollerProvider(
  props: React.ComponentProps<typeof MessageScrollerPrimitive.Provider>,
) {
  return <MessageScrollerPrimitive.Provider {...props} />;
}

function MessageScroller({
  className,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Root>) {
  return (
    <MessageScrollerPrimitive.Root
      data-slot="message-scroller"
      className={cn(
        "group/message-scroller relative flex size-full min-h-0 flex-col overflow-hidden",
        className,
      )}
      {...props}
    />
  );
}

/** The part that actually scrolls. */
function MessageScrollerViewport({
  className,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Viewport>) {
  return (
    <MessageScrollerPrimitive.Viewport
      data-slot="message-scroller-viewport"
      className={cn(
        "size-full min-h-0 min-w-0 [scrollbar-width:thin] [scrollbar-gutter:stable] overflow-y-auto overscroll-contain",
        "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus",
        // Hidden until the first scroll position is set (no visible jump), no scrollbar while auto-scrolling.
        "data-autoscrolling:[scrollbar-width:none] data-pending-scroll:invisible",
        className,
      )}
      {...props}
    />
  );
}

/** Column of messages. */
function MessageScrollerContent({
  className,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Content>) {
  return (
    <MessageScrollerPrimitive.Content
      data-slot="message-scroller-content"
      className={cn("flex h-max min-h-full flex-col gap-6", className)}
      {...props}
    />
  );
}

/**
 * Wraps one message. Give it a `messageId` so `scrollToMessage(id)` can find it.
 * `scrollAnchor` = when this message arrives, scroll so it sits at the top (e.g. the user's question).
 */
function MessageScrollerItem({
  className,
  scrollAnchor = false,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Item>) {
  return (
    <MessageScrollerPrimitive.Item
      data-slot="message-scroller-item"
      scrollAnchor={scrollAnchor}
      className={cn(
        // Lets the browser skip drawing messages that are far off screen (long chats stay fast).
        "min-w-0 shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto]",
        className,
      )}
      {...props}
    />
  );
}

/** Round button that jumps to the newest (or oldest) message. Only visible when needed. */
function MessageScrollerButton({
  direction = "end",
  className,
  children,
  render,
  label,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Button> & {
  /** Screen-reader text. Defaults to "Ke pesan terbaru" / "Ke pesan pertama". */
  label?: string;
}) {
  return (
    <MessageScrollerPrimitive.Button
      data-slot="message-scroller-button"
      data-direction={direction}
      direction={direction}
      className={cn(
        "absolute left-1/2 -translate-x-1/2 rounded-full bg-surface shadow-md rtl:translate-x-1/2",
        // Slide + fade in/out.
        "transition-[translate,scale,opacity] duration-200",
        "data-[active=false]:pointer-events-none data-[active=false]:scale-95 data-[active=false]:opacity-0",
        "data-[active=true]:translate-y-0 data-[active=true]:scale-100 data-[active=true]:opacity-100",
        "data-[direction=end]:bottom-4 data-[direction=end]:data-[active=false]:translate-y-full",
        "data-[direction=start]:top-4 data-[direction=start]:data-[active=false]:-translate-y-full data-[direction=start]:[&_svg]:rotate-180",
        className,
      )}
      render={render ?? <Button variant="outline" size="icon-sm" />}
      {...props}
    >
      {children ?? (
        <>
          <ArrowDownIcon />
          <span className="sr-only">
            {label ?? (direction === "end" ? "Ke pesan terbaru" : "Ke pesan pertama")}
          </span>
        </>
      )}
    </MessageScrollerPrimitive.Button>
  );
}

export {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScroller,
  useMessageScrollerScrollable,
  useMessageScrollerVisibility,
};
