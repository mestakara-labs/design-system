/**
 * Docs page: Installation — how another app starts using @mestakara/ui.
 * NOTE: the registry URL is a placeholder until the private npm registry is chosen.
 */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../page-parts/code-block";
import { PageHeader } from "../page-parts/page-header";
import { Section } from "../page-parts/section";

const NPMRC_CODE = `
# .npmrc (in the root of your app)
@mestakara:registry=<URL_REGISTRY>
`;

const CSS_CODE = `
/* globals.css (Next.js) or index.css (Vite) */
@import "tailwindcss";
@import "@mestakara/ui/styles.css";
`;

const FONTS_CODE = `
npm install @fontsource-variable/fraunces @fontsource-variable/plus-jakarta-sans
`;

const FONTS_IMPORT_CODE = `
// main.tsx (Vite) or app/layout.tsx (Next.js)
import "@fontsource-variable/fraunces";
import "@fontsource-variable/plus-jakarta-sans";
`;

const FORM_CODE = `
npm install react-hook-form
`;

const TOASTER_CODE = `
// app/layout.tsx (Next.js) or App.tsx (Vite)
import { Toaster } from "@mestakara/ui/sonner";

<body>
  {children}
  <Toaster />
</body>
`;

const LOCAL_CODE = `
# in the design system repo → creates mestakara-ui-<version>.tgz
npm pack

# in your app
npm install ../path/to/mestakara-ui-<version>.tgz
`;

const USAGE_CODE = `
import { Button } from "@mestakara/ui/button";

export default function Page() {
  return <Button>Pesan Tiket</Button>;
}
`;

export default function InstallationPage() {
  const { t } = useTranslation("installation");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("nav.gettingStarted")}
        title={tCommon("nav.installation")}
        description={t("description")}
      />

      <Section id="requirements" title={t("requirements.title")}>
        <ul className="list-disc pl-5 typo-body-m text-fg-secondary">
          <li>React 19</li>
          <li>Tailwind CSS v4</li>
          <li>{t("requirements.frameworks")}</li>
        </ul>
      </Section>

      <Section id="registry" title={t("registry.title")} description={t("registry.description")}>
        <CodeBlock language="bash" code={NPMRC_CODE} />
      </Section>

      <Section id="install" title={t("install.title")}>
        <CodeBlock language="bash" code="npm install @mestakara/ui" />
      </Section>

      <Section id="styles" title={t("styles.title")} description={t("styles.description")}>
        <CodeBlock language="css" code={CSS_CODE} />
      </Section>

      <Section id="fonts" title={t("fonts.title")} description={t("fonts.description")}>
        <CodeBlock language="bash" code={FONTS_CODE} />
        <CodeBlock code={FONTS_IMPORT_CODE} />
      </Section>

      <Section id="use" title={t("use.title")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="nextjs" title={t("nextjs.title")} description={t("nextjs.description")} />

      <Section id="optional" title={t("optional.title")}>
        <p className="typo-body-m text-fg-secondary">{t("optional.form")}</p>
        <CodeBlock language="bash" code={FORM_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("optional.toaster")}</p>
        <CodeBlock code={TOASTER_CODE} />
      </Section>

      <Section id="local" title={t("local.title")} description={t("local.description")}>
        <CodeBlock language="bash" code={LOCAL_CODE} />
      </Section>
    </div>
  );
}
