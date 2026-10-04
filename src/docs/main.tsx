/** Entry point of the docs site (loaded by index.html). */
import "@fontsource-variable/fraunces";
import "@fontsource-variable/plus-jakarta-sans";
import "./docs.css";
import "./i18n/config";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
