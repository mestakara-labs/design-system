import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function ResizableDemo() {
  return (
    <div className="h-64 w-full max-w-md overflow-hidden rounded-lg border border-border bg-surface">
      <ResizablePanelGroup>
        <ResizablePanel defaultSize="40%" minSize="20%">
          <div className="flex h-full items-center justify-center p-4 typo-label-m">Menu</div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize="60%">
          {/* Panels can be nested: a stacked group inside the right panel. */}
          <ResizablePanelGroup orientation="vertical">
            <ResizablePanel defaultSize="30%">
              <div className="flex h-full items-center justify-center p-4 typo-label-m">
                Ringkasan
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize="70%">
              <div className="flex h-full items-center justify-center p-4 typo-label-m">Detail</div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
