/**
 * Reads the current value of a CSS variable, e.g. readCssVariable("--bg-canvas") → "#fcfbf8".
 * Used by the Foundations pages so color values are never typed twice:
 * the CSS files stay the single source of truth.
 */
export function readCssVariable(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}
