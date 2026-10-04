import { PageOutlet } from "./page-outlet";

/** Page frame of /view/<block>: nothing but the block itself (it is shown inside an iframe). */
export function BlockViewLayout() {
  return (
    <div className="min-h-svh bg-canvas">
      <PageOutlet />
    </div>
  );
}
