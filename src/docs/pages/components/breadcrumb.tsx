/** Docs page: Breadcrumb — texts in `locales/<lang>/breadcrumb.json`. */
import { useTranslation } from "react-i18next";

import { BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import { StateMatrix } from "../../page-parts/state-matrix";
import BreadcrumbCollapsed from "../../examples/breadcrumb/breadcrumb-collapsed";
import breadcrumbCollapsedCode from "../../examples/breadcrumb/breadcrumb-collapsed?raw";
import BreadcrumbDemo from "../../examples/breadcrumb/breadcrumb-demo";
import breadcrumbDemoCode from "../../examples/breadcrumb/breadcrumb-demo?raw";
import BreadcrumbCustomSeparator from "../../examples/breadcrumb/breadcrumb-separator";
import breadcrumbSeparatorCode from "../../examples/breadcrumb/breadcrumb-separator?raw";

const USAGE_CODE = `
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@mestakara/ui/breadcrumb";

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Paket Wisata</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
`;

const ROUTER_CODE = `
// React Router: import { Link } from "react-router";
// Next.js:      import Link from "next/link";  (use href instead of to)
<BreadcrumbLink asChild>
  <Link to="/">Beranda</Link>
</BreadcrumbLink>
`;

export default function BreadcrumbPageDocs() {
  const { t } = useTranslation("breadcrumb");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.navigation")}
        title="Breadcrumb"
        description={t("description")}
      />

      <ComponentPreview example={BreadcrumbDemo} code={breadcrumbDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="breadcrumb"
          exports={[
            "Breadcrumb",
            "BreadcrumbItem",
            "BreadcrumbLink",
            "BreadcrumbList",
            "BreadcrumbPage",
            "BreadcrumbSeparator",
          ]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("tip")}</p>
        <CodeBlock code={ROUTER_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="separator"
          title={t("examples.separator.title")}
          description={t("examples.separator.description")}
          example={BreadcrumbCustomSeparator}
          code={breadcrumbSeparatorCode}
        />
        <Example
          id="collapsed"
          title={t("examples.collapsed.title")}
          description={t("examples.collapsed.description")}
          example={BreadcrumbCollapsed}
          code={breadcrumbCollapsedCode}
        />
      </Section>

      <Section
        id="states"
        title={tCommon("sections.states")}
        description={tCommon("sections.statesDescription")}
      >
        <StateMatrix
          rows={["BreadcrumbLink", "BreadcrumbPage"]}
          states={["default", "hover", "focus"]}
        >
          {(_state, row) =>
            row === "BreadcrumbLink" ? (
              <span className="typo-body-m text-fg-tertiary">
                <BreadcrumbLink href="#">Beranda</BreadcrumbLink>
              </span>
            ) : (
              <BreadcrumbPage>Gunung Mas</BreadcrumbPage>
            )
          }
        </StateMatrix>
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "Breadcrumb", element: "<nav>", description: t("parts.root") },
            { name: "BreadcrumbList", element: "<ol>", description: t("parts.list") },
            { name: "BreadcrumbItem", element: "<li>", description: t("parts.item") },
            { name: "BreadcrumbLink", element: "<a>", description: t("parts.link") },
            { name: "BreadcrumbPage", element: "<span>", description: t("parts.page") },
            { name: "BreadcrumbSeparator", element: "<li>", description: t("parts.separator") },
            { name: "BreadcrumbEllipsis", element: "<span>", description: t("parts.ellipsis") },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "BreadcrumbLink · asChild",
              type: "boolean",
              default: "false",
              description: t("props.asChild"),
            },
            {
              name: "BreadcrumbSeparator · children",
              type: "ReactNode",
              description: t("props.separatorChildren"),
            },
            {
              name: "BreadcrumbEllipsis · label",
              type: "string",
              default: '"Halaman lainnya"',
              description: t("props.label"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
