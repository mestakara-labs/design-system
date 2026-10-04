// Vite config for the NPM PACKAGE (`npm run build:lib`). The docs site uses `vite.config.ts`.
//
// Output (folder `dist/`):
//   dist/index.js                     → import { Button } from "@mestakara/ui"
//   dist/components/ui/<name>.js      → import { Button } from "@mestakara/ui/button"
//   dist/styles/*.css                 → @import "@mestakara/ui/styles.css"
//   *.d.ts type files                 → made by `tsc --project tsconfig.lib.json`
import fs from "node:fs";
import path from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

const src = path.resolve(import.meta.dirname, "src");

// One entry per component file, plus the main index and the hooks.
const componentFiles = fs.readdirSync(path.join(src, "components/ui"));
const entries = Object.fromEntries([
  ["index", path.join(src, "index.ts")],
  ["hooks/use-mobile", path.join(src, "hooks/use-mobile.ts")],
  ...componentFiles.map((file) => [
    `components/ui/${file.replace(/\.tsx$/, "")}`,
    path.join(src, "components/ui", file),
  ]),
]);

/** Copies the stylesheets as they are: the app's own Tailwind compiles them. */
function copyStyles(): Plugin {
  return {
    name: "mestakara-copy-styles",
    closeBundle() {
      fs.cpSync(path.join(src, "styles"), path.resolve(import.meta.dirname, "dist/styles"), {
        recursive: true,
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), copyStyles()],
  // The images in `public/` belong to the docs site only.
  publicDir: false,
  build: {
    outDir: "dist",
    emptyOutDir: true,
    // Keep class names readable for apps that debug in the browser.
    minify: false,
    lib: {
      entry: entries,
      formats: ["es"],
    },
    rolldownOptions: {
      // Every package import (react, radix-ui, lucide-react …) stays an import:
      // the app installs them once, instead of copying them into this package.
      external: (id) => !id.startsWith(".") && !path.isAbsolute(id) && !id.startsWith("\0"),
      output: {
        // One output file per source file (better tree-shaking in the app).
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
        // Components use React hooks: mark every file as a Client Component for Next.js.
        banner: '"use client";',
      },
    },
  },
});
