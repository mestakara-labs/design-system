import { PageOutlet } from "./page-outlet";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

/**
 * Page frame of the landing page and the blocks pages:
 *   [ Top bar      ]
 *   [ Page content ]   ← full width, the page decides its own layout
 *   [ Footer       ]
 */
export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <SiteHeader />
      <main className="flex-1">
        <PageOutlet />
      </main>
      <SiteFooter />
    </div>
  );
}
