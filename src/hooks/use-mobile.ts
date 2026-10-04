import * as React from "react";

/** Screens narrower than this (in px) count as "mobile". Same as Tailwind's `md` breakpoint. */
const MOBILE_BREAKPOINT = 768;
const MOBILE_QUERY = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`;

function subscribe(onChange: () => void) {
  const query = window.matchMedia(MOBILE_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/**
 * `true` on phone-sized screens. Updates when the window is resized.
 * On the server (Next.js) it returns `false`, so the desktop layout is rendered first.
 */
export function useIsMobile() {
  return React.useSyncExternalStore(
    subscribe,
    () => window.matchMedia(MOBILE_QUERY).matches,
    () => false,
  );
}
