import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function ResizableVertical() {
  return (
    <div className="h-64 w-full max-w-md overflow-hidden rounded-lg border border-border bg-surface">
      <ResizablePanelGroup orientation="vertical">
        <ResizablePanel defaultSize="25%">
          <div className="flex h-full items-center justify-center p-4 typo-label-m">Header</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="75%">
          <div className="flex h-full items-center justify-center p-4 typo-label-m">Konten</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
