/**
 * Routes of the site. URLs come from `paths.ts`; docs pages come from `registry.ts`.
 *
 *   SiteLayout       (top bar + footer)              → /, /blocks, /blocks/<category>
 *   DocsLayout       (top bar + sidebar + contents)  → /docs/…
 *   BlockViewLayout  (nothing around the page)       → /view/<block>  (inside the preview iframe)
 */
import { lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router";

import { Toaster } from "@/components/ui/sonner";

import { BlockViewLayout } from "./layout/block-view-layout";
import { DocsLayout } from "./layout/docs-layout";
import { SiteLayout } from "./layout/site-layout";
import ComponentsOverviewPage from "./pages/components-overview";
import NotFoundPage from "./pages/not-found";
import { blockViewPath, componentPath, PATHS } from "./paths";
import { COMPONENTS, GUIDE_SECTIONS } from "./registry";

const GUIDE_PAGES = GUIDE_SECTIONS.flatMap((section) => section.pages);

// Loaded only when opened, so the first page load stays small (the landing page has charts).
const HomePage = lazy(() => import("./pages/home"));
const BlocksPage = lazy(() => import("./pages/blocks"));
const BlockViewPage = lazy(() => import("./pages/block-view"));

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path={PATHS.home} element={<HomePage />} />
          <Route path={PATHS.blocks} element={<BlocksPage />} />
          <Route path={`${PATHS.blocks}/:category`} element={<BlocksPage />} />
        </Route>

        <Route element={<BlockViewLayout />}>
          <Route path={blockViewPath(":name")} element={<BlockViewPage />} />
        </Route>

        <Route element={<DocsLayout />}>
          {GUIDE_PAGES.map((page) => (
            <Route key={page.path} path={page.path} element={<page.Page />} />
          ))}

          <Route path={PATHS.components} element={<ComponentsOverviewPage />} />
          {COMPONENTS.map((component) => (
            <Route
              key={component.slug}
              path={componentPath(component.slug)}
              element={<component.Page />}
            />
          ))}

          {/* Old URLs from before the docs moved to /docs, e.g. /components/button. */}
          <Route path="/installation" element={<RedirectToDocs />} />
          <Route path="/foundations/*" element={<RedirectToDocs />} />
          <Route path="/components/*" element={<RedirectToDocs />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      {/* Shows the toasts of the Sonner examples on every page. */}
      <Toaster />
    </BrowserRouter>
  );
}

/** Sends an old URL to the same page under /docs: /components/button → /docs/components/button. */
function RedirectToDocs() {
  const { pathname, hash } = useLocation();
  return <Navigate to={`${PATHS.docs}${pathname}${hash}`} replace />;
}
