import { PageOutlet } from "./page-outlet";
import { SiteHeader } from "./site-header";
import { Sidebar } from "./sidebar";
import { TableOfContents } from "./table-of-contents";

/**
 * Page frame of every /docs page:
 *   [ Top bar                                 ]
 *   [ Sidebar ][ Page content ][ On this page ]
 * On small screens the sidebar is in the top bar's phone menu.
 * `overflow-x-clip` stops sideways page scrolling on phones (see site-layout.tsx).
 */
export function DocsLayout() {
  return (
    <div className="min-h-screen overflow-x-clip bg-canvas">
      <SiteHeader />

      <div className="mx-auto flex max-w-screen-2xl">
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r border-border md:block">
          <Sidebar />
        </aside>

        <main className="min-w-0 flex-1 px-4 py-10 md:px-10">
          <div className="mx-auto max-w-3xl">
            <PageOutlet />
          </div>
        </main>

        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-56 shrink-0 overflow-y-auto xl:block">
          <TableOfContents />
        </aside>
      </div>
    </div>
  );
}
