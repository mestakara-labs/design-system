import { RefreshCwIcon, TriangleAlertIcon } from "lucide-react";
import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation } from "react-router";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

import { PageErrorBoundary } from "./page-error-boundary";

/**
 * Where a layout shows the current page. Used by every layout. It:
 *   - waits for the lazily loaded page file (Suspense),
 *   - shows an error box instead of crashing when a page fails to load,
 *   - scrolls to the top when moving to another page (but respects #anchors).
 */
export function PageOutlet() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <PageErrorBoundary resetKey={pathname} fallback={<PageError />}>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </PageErrorBoundary>
  );
}

/** Shown when a page cannot be loaded (for example right after a new version was deployed). */
function PageError() {
  const { t } = useTranslation();

  return (
    <Empty className="border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <TriangleAlertIcon />
        </EmptyMedia>
        <EmptyTitle>{t("pageError.title")}</EmptyTitle>
        <EmptyDescription>{t("pageError.description")}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="tonal" onClick={() => window.location.reload()}>
          <RefreshCwIcon />
          {t("pageError.reload")}
        </Button>
      </EmptyContent>
    </Empty>
  );
}
