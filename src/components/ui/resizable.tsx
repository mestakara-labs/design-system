/**
 * Resizable
 * Panels the user can make bigger or smaller by dragging the line between them
 * (or with the arrow keys after focusing the line). Mostly for dashboards.
 *
 * Built on: react-resizable-panels (https://react-resizable-panels.vercel.app)
 * Based on: https://ui.shadcn.com/docs/components/resizable
 *
 * Sizes: numbers are pixels, strings are percentages — defaultSize="30%" or defaultSize={240}.
 */
import { cn } from "cn";
import * as ResizablePrimitive from "react-resizable-panels";

/** The row (or column, with `orientation="vertical"`) of panels. */
function ResizablePanelGroup({ className, ...props }: ResizablePrimitive.GroupProps) {
  return (
    <ResizablePrimitive.Group
      data-slot="resizable-panel-group"
      className={cn("size-full", className)}
      {...props}
    />
  );
}

function ResizablePanel(props: ResizablePrimitive.PanelProps) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />;
}

/**
 * The line between two panels. `withHandle` adds a small grip so users notice it can be dragged.
 * The library sets `aria-orientation`: "vertical" for a line between side-by-side panels,
 * "horizontal" for a line between stacked panels.
 */
function ResizableHandle({
  withHandle,
  className,
  ...props
}: ResizablePrimitive.SeparatorProps & { withHandle?: boolean }) {
  return (
    <ResizablePrimitive.Separator
      data-slot="resizable-handle"
      className={cn(
        "relative flex w-px items-center justify-center bg-border transition-colors outline-none",
        // Wider invisible area that is easier to grab.
        "after:absolute after:inset-y-0 after:left-1/2 after:w-2 after:-translate-x-1/2",
        "hover:bg-border-strong focus-visible:bg-focus data-[separator=active]:bg-focus",
        // Line between stacked panels.
        "aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full",
        "aria-[orientation=horizontal]:after:inset-x-0 aria-[orientation=horizontal]:after:top-1/2 aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-2 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2",
        "[&[aria-orientation=horizontal]>div]:rotate-90",
        className,
      )}
      {...props}
    >
      {withHandle && <div className="z-10 h-6 w-1.5 shrink-0 rounded-full bg-border-strong" />}
    </ResizablePrimitive.Separator>
  );
}

export { ResizableHandle, ResizablePanel, ResizablePanelGroup };
