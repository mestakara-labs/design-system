import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function ResizableWithHandle() {
  return (
    <div className="h-48 w-full max-w-md overflow-hidden rounded-lg border border-border bg-surface">
      <ResizablePanelGroup>
        {/* Numbers are pixels: the sidebar stays between 120px and 240px. */}
        <ResizablePanel defaultSize={160} minSize={120} maxSize={240}>
          <div className="flex h-full items-center justify-center p-4 typo-label-m">Sidebar</div>
        </ResizablePanel>
        {/* withHandle = a visible grip on the line. */}
        <ResizableHandle withHandle />
        <ResizablePanel>
          <div className="flex h-full items-center justify-center p-4 typo-label-m">Konten</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
