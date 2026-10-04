/** Docs page: Sonner (toast) — texts in `locales/<lang>/sonner.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import SonnerDemo from "../../examples/sonner/sonner-demo";
import sonnerDemoCode from "../../examples/sonner/sonner-demo?raw";
import SonnerPromise from "../../examples/sonner/sonner-promise";
import sonnerPromiseCode from "../../examples/sonner/sonner-promise?raw";
import SonnerTypes from "../../examples/sonner/sonner-types";
import sonnerTypesCode from "../../examples/sonner/sonner-types?raw";

const SETUP_CODE = `
// app root (e.g. App.tsx or app/layout.tsx)
import { Toaster } from "@mestakara/ui/sonner";

export default function App() {
  return (
    <>
      {/* … your app … */}
      <Toaster />
    </>
  );
}
`;

const USAGE_CODE = `
import { toast } from "@mestakara/ui/sonner";

toast.success("Pembayaran berhasil");
`;

export default function SonnerPage() {
  const { t } = useTranslation("sonner");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.overlay")}
        title="Sonner"
        description={t("description")}
      />

      <ComponentPreview example={SonnerDemo} code={sonnerDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="sonner" exports={["Toaster", "toast"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <p className="typo-body-m text-fg-secondary">{t("setup")}</p>
        <CodeBlock code={SETUP_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("call")}</p>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="types"
          title={t("examples.types.title")}
          description={t("examples.types.description")}
          example={SonnerTypes}
          code={sonnerTypesCode}
        />
        <Example
          id="promise"
          title={t("examples.promise.title")}
          description={t("examples.promise.description")}
          example={SonnerPromise}
          code={sonnerPromiseCode}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "Toaster · position",
              type: '"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',
              default: '"bottom-right"',
              description: t("props.position"),
            },
            {
              name: "Toaster · richColors",
              type: "boolean",
              default: "true",
              description: t("props.richColors"),
            },
            {
              name: "toast(message, options)",
              type: "function",
              description: t("props.toast"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
