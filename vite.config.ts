// Vite config for the DOCUMENTATION SITE (`npm run dev`, `npm run build:docs`).
// The npm package has its own config: see `vite.lib.config.ts`.
import path from "node:path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // Same alias as `paths` in tsconfig.json.
    alias: { "@": path.resolve(import.meta.dirname, "src") },
  },
  build: {
    outDir: "dist-docs",
  },
});
