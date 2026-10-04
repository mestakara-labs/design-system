// ESLint settings (flat config). Run with `npm run lint` or `npm run lint:fix`.
// Formatting is NOT handled here — that is Prettier's job (`npm run format`).
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Folders that are generated and never linted.
  { ignores: ["dist", "dist-docs", "node_modules"] },

  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      jsxA11y.flatConfigs.recommended,
    ],
    plugins: { "react-refresh": reactRefresh },
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    rules: {
      // Warn when a file exports something other than components (breaks hot reload).
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },

  // Library components export their variant helpers (e.g. `buttonVariants`) next to the
  // component, like shadcn/ui does. Hot reload is not a concern there, so the rule is off.
  {
    files: ["src/components/ui/**/*.tsx"],
    rules: { "react-refresh/only-export-components": "off" },
  },

  // The npm package (everything except the docs) must use relative imports.
  // The `@/` alias only exists inside this repo: it would break the published type files.
  {
    files: ["src/components/**/*.{ts,tsx}", "src/lib/**/*.ts", "src/hooks/**/*.ts", "src/index.ts"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/*"],
              message: "Use a relative import (e.g. ../../lib/…) in library code.",
            },
          ],
        },
      ],
    },
  },

  // Must be last: turns off every rule that would conflict with Prettier.
  prettier,
);
