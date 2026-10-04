/**
 * PATHS — every URL of the site, in one place.
 * ---------------------------------------------------------------------------
 * Links and routes use these instead of typing URLs by hand,
 * so changing the URL structure later means editing only this file.
 *
 *   /                          landing page
 *   /blocks                    building blocks (featured)
 *   /blocks/login              one block category
 *   /view/login-01             one block on a page of its own (used by the preview iframe)
 *   /docs                      documentation (introduction)
 *   /docs/installation
 *   /docs/foundations/colors   (typography, spacing, radius, elevation)
 *   /docs/components           all components
 *   /docs/components/button    one component
 */
export const PATHS = {
  home: "/",
  blocks: "/blocks",
  docs: "/docs",
  installation: "/docs/installation",
  components: "/docs/components",
} as const;

/** e.g. foundationPath("colors") → "/docs/foundations/colors" */
export function foundationPath(page: string) {
  return `/docs/foundations/${page}`;
}

/** e.g. componentPath("button") → "/docs/components/button" */
export function componentPath(slug: string) {
  return `/docs/components/${slug}`;
}

/** e.g. blocksCategoryPath("login") → "/blocks/login". The "featured" tab is /blocks itself. */
export function blocksCategoryPath(category: string) {
  return category === "featured" ? PATHS.blocks : `${PATHS.blocks}/${category}`;
}

/** The full-page view of one block, shown inside the preview iframe: "/view/login-01". */
export function blockViewPath(name: string) {
  return `/view/${name}`;
}
