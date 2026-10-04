/** Docs page: Sidebar — texts in `locales/<lang>/sidebar.json`. */
import { LayoutDashboardIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import { SidebarMenuButton, SidebarProvider } from "@/components/ui/sidebar";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import { StateMatrix } from "../../page-parts/state-matrix";
import SidebarDemo from "../../examples/sidebar/sidebar-demo";
import sidebarDemoCode from "../../examples/sidebar/sidebar-demo?raw";
import SidebarLoading from "../../examples/sidebar/sidebar-loading";
import sidebarLoadingCode from "../../examples/sidebar/sidebar-loading?raw";
import SidebarVariants from "../../examples/sidebar/sidebar-variants";
import sidebarVariantsCode from "../../examples/sidebar/sidebar-variants?raw";

const USAGE_CODE = `
// app/layout.tsx (or the layout of your dashboard pages)
import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@mestakara/ui/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>{/* menu groups */}</SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header>
          <SidebarTrigger />
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
`;

const HOOK_CODE = `
import { useSidebar } from "@mestakara/ui/sidebar";

const { state, open, setOpen, isMobile, toggleSidebar } = useSidebar();
`;

export default function SidebarPage() {
  const { t } = useTranslation("sidebar");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.navigation")}
        title="Sidebar"
        description={t("description")}
      />

      <ComponentPreview example={SidebarDemo} code={sidebarDemoCode} className="sidebar-preview" />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="sidebar"
          exports={[
            "Sidebar",
            "SidebarContent",
            "SidebarInset",
            "SidebarProvider",
            "SidebarTrigger",
          ]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <p className="typo-body-m text-fg-secondary">{t("structure")}</p>
        <CodeBlock code={USAGE_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("hook")}</p>
        <CodeBlock code={HOOK_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("colors")}</p>
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="variants"
          title={t("examples.variants.title")}
          description={t("examples.variants.description")}
          example={SidebarVariants}
          code={sidebarVariantsCode}
          previewClassName="sidebar-preview"
        />
        <Example
          id="loading"
          title={t("examples.loading.title")}
          description={t("examples.loading.description")}
          example={SidebarLoading}
          code={sidebarLoadingCode}
          previewClassName="sidebar-preview"
        />
      </Section>

      <Section
        id="states"
        title={tCommon("sections.states")}
        description={tCommon("sections.statesDescription")}
      >
        {/* SidebarMenuButton reads the sidebar state, so the matrix needs a provider. */}
        <SidebarProvider className="min-h-0">
          <StateMatrix
            rows={["SidebarMenuButton", "isActive"]}
            states={["default", "hover", "focus", "disabled"]}
          >
            {(state, row) => (
              <div className="w-full max-w-36 rounded-md bg-sidebar p-1.5">
                <SidebarMenuButton isActive={row === "isActive"} disabled={state === "disabled"}>
                  <LayoutDashboardIcon />
                  <span>Dasbor</span>
                </SidebarMenuButton>
              </div>
            )}
          </StateMatrix>
        </SidebarProvider>
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "SidebarProvider", element: "<div>", description: t("parts.provider") },
            { name: "Sidebar", element: "<div>", description: t("parts.sidebar") },
            { name: "SidebarTrigger", element: "<button>", description: t("parts.trigger") },
            { name: "SidebarRail", element: "<button>", description: t("parts.rail") },
            { name: "SidebarInset", element: "<main>", description: t("parts.inset") },
            { name: "SidebarHeader", element: "<div>", description: t("parts.header") },
            { name: "SidebarContent", element: "<div>", description: t("parts.content") },
            { name: "SidebarFooter", element: "<div>", description: t("parts.footer") },
            {
              name: "SidebarGroup · GroupLabel · GroupAction · GroupContent",
              element: "<div>",
              description: t("parts.group"),
            },
            {
              name: "SidebarMenu · SidebarMenuItem",
              element: "<ul> <li>",
              description: t("parts.menu"),
            },
            {
              name: "SidebarMenuButton",
              element: "<button>",
              description: t("parts.menuButton"),
            },
            {
              name: "SidebarMenuAction · SidebarMenuBadge",
              element: "<button> <div>",
              description: t("parts.menuExtras"),
            },
            {
              name: "SidebarMenuSub · SubItem · SubButton",
              element: "<ul> <li> <a>",
              description: t("parts.menuSub"),
            },
            { name: "SidebarMenuSkeleton", element: "<div>", description: t("parts.skeleton") },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "SidebarProvider · defaultOpen",
              type: "boolean",
              default: "true",
              description: t("props.defaultOpen"),
            },
            { name: "SidebarProvider · open", type: "boolean", description: t("props.open") },
            {
              name: "Sidebar · side",
              type: '"left" | "right"',
              default: '"left"',
              description: t("props.side"),
            },
            {
              name: "Sidebar · variant",
              type: '"sidebar" | "floating" | "inset"',
              default: '"sidebar"',
              description: t("props.variant"),
            },
            {
              name: "Sidebar · collapsible",
              type: '"offcanvas" | "icon" | "none"',
              default: '"offcanvas"',
              description: t("props.collapsible"),
            },
            {
              name: "SidebarMenuButton · isActive",
              type: "boolean",
              default: "false",
              description: t("props.isActive"),
            },
            {
              name: "SidebarMenuButton · tooltip",
              type: "string",
              description: t("props.tooltip"),
            },
            {
              name: "SidebarMenuButton · size",
              type: '"sm" | "md" | "lg"',
              default: '"md"',
              description: t("props.size"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
