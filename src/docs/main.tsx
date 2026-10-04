/** Entry point of the docs site (loaded by index.html). */
import "@fontsource-variable/fraunces";
import "@fontsource-variable/plus-jakarta-sans";
import "./docs.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";

import { App } from "./app";
// Use the i18n instance (not just `import "./i18n/config"`): package.json marks non-CSS files
// as side-effect free, so a bare import would be removed from the production build.
import i18n from "./i18n/config";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>,
);
