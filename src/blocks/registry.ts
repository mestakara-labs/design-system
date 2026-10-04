/**
 * BLOCKS REGISTRY — the list of every block on the /blocks page.
 * ---------------------------------------------------------------------------
 * A block is a ready-made page (login form, dashboard, sidebar …) built from Mestakara UI
 * components. Apps copy its code; blocks are NOT part of the npm package.
 *
 * To add a block:
 *   1. Create a folder `src/blocks/<name>/` with a `page.tsx` (default export) and any helper files.
 *   2. Add one entry to `BLOCKS` below, and its description to `locales/<lang>/blocks.json` → "items".
 * The page and the files shown in the "Code" tab are found automatically from the folder.
 */
import { lazy } from "react";

import type blockTexts from "../docs/i18n/locales/id/blocks.json";

/** Tabs on the /blocks page. Labels are in `locales/<lang>/blocks.json` → "categories". */
export const BLOCK_CATEGORIES = ["featured", "sidebar", "login", "signup"] as const;
export type BlockCategory = (typeof BLOCK_CATEGORIES)[number];

/**
 * A block name must have a description in `locales/id/blocks.json` → "items".
 * TypeScript reports an error when it is missing.
 */
export type BlockName = keyof typeof blockTexts.items;

export type BlockEntry = {
  /** Folder name, also used in the URL: /view/<name>. */
  name: BlockName;
  /** Tab of /blocks the block belongs to. A block with "featured" is only on the first tab. */
  category: BlockCategory;
  /** Also show this block on the "featured" tab. */
  featured?: boolean;
  /** Height of the preview in pixels. */
  height: number;
};

export const BLOCKS: BlockEntry[] = [
  // Dashboard
  { name: "dashboard-01", category: "featured", height: 1000 },

  // Sidebar
  { name: "sidebar-01", category: "sidebar", height: 800 },
  { name: "sidebar-02", category: "sidebar", height: 800 },
  { name: "sidebar-03", category: "sidebar", featured: true, height: 800 },
  { name: "sidebar-04", category: "sidebar", height: 800 },
  { name: "sidebar-05", category: "sidebar", height: 800 },
  { name: "sidebar-06", category: "sidebar", height: 800 },
  { name: "sidebar-07", category: "sidebar", featured: true, height: 800 },
  { name: "sidebar-08", category: "sidebar", height: 800 },
  { name: "sidebar-09", category: "sidebar", height: 800 },
  { name: "sidebar-10", category: "sidebar", height: 800 },
  { name: "sidebar-11", category: "sidebar", height: 800 },
  { name: "sidebar-12", category: "sidebar", height: 800 },
  { name: "sidebar-13", category: "sidebar", height: 800 },
  { name: "sidebar-14", category: "sidebar", height: 800 },
  { name: "sidebar-15", category: "sidebar", height: 800 },
  { name: "sidebar-16", category: "sidebar", height: 800 },

  // Login
  { name: "login-01", category: "login", height: 720 },
  { name: "login-02", category: "login", height: 800 },
  { name: "login-03", category: "login", featured: true, height: 820 },
  { name: "login-04", category: "login", featured: true, height: 820 },
  { name: "login-05", category: "login", height: 720 },

  // Signup
  { name: "signup-01", category: "signup", height: 900 },
  { name: "signup-02", category: "signup", height: 960 },
  { name: "signup-03", category: "signup", height: 820 },
  { name: "signup-04", category: "signup", height: 880 },
  { name: "signup-05", category: "signup", height: 720 },
];

/** Blocks shown on one tab of /blocks. */
export function getBlocks(category: BlockCategory) {
  return BLOCKS.filter(
    (block) => block.category === category || (category === "featured" && block.featured),
  );
}

export function findBlock(name: string) {
  return BLOCKS.find((block) => block.name === name);
}

/*
 * Vite finds the block files for us (`import.meta.glob`):
 *   - PAGE_FILES: the `page.tsx` of every block, loaded only when that block is opened.
 *   - SOURCE_FILES: the source code of every file, loaded only when the "Code" tab is opened.
 */
const PAGE_FILES = import.meta.glob<{ default: React.ComponentType }>("./*/page.tsx");
const SOURCE_FILES = import.meta.glob<string>("./*/*.{ts,tsx,json}", {
  query: "?raw",
  import: "default",
});

/** Folder name of a block file: "./login-01/page.tsx" → "login-01". */
function blockNameOf(path: string) {
  return path.split("/")[1];
}

// One lazy component per block, created once (creating it during render would reset the page).
const BLOCK_PAGES = Object.fromEntries(
  Object.entries(PAGE_FILES).map(([path, load]) => [blockNameOf(path), lazy(load)]),
);

/** The page component of a block. */
export function getBlockPage(name: string) {
  return BLOCK_PAGES[name];
}

/** Every file of a block with its source code: `page.tsx` first, then A–Z. */
export async function getBlockSourceFiles(name: string) {
  const isPage = (path: string) => path.endsWith("/page.tsx");
  const paths = Object.keys(SOURCE_FILES)
    .filter((path) => blockNameOf(path) === name)
    .sort((a, b) => Number(isPage(b)) - Number(isPage(a)) || a.localeCompare(b));

  return Promise.all(
    paths.map(async (path) => ({
      fileName: path.replace(`./${name}/`, ""),
      code: await SOURCE_FILES[path](),
    })),
  );
}
