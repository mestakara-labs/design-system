/** Docs page: Navigation Menu — texts in `locales/<lang>/navigation-menu.json`. */
import { useTranslation } from "react-i18next";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import { StateMatrix } from "../../page-parts/state-matrix";
import NavigationMenuDemo from "../../examples/navigation-menu/navigation-menu-demo";
import navigationMenuDemoCode from "../../examples/navigation-menu/navigation-menu-demo?raw";
import NavigationMenuNoViewport from "../../examples/navigation-menu/navigation-menu-no-viewport";
import navigationMenuNoViewportCode from "../../examples/navigation-menu/navigation-menu-no-viewport?raw";

const USAGE_CODE = `
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@mestakara/ui/navigation-menu";

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Destinasi</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/gunung-mas">Gunung Mas</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
`;

/** Matrix rows: the trigger look while closed, open, and as the link of the current page. */
const ROWS = ["closed", "open", "active"] as const;

export default function NavigationMenuPage() {
  const { t } = useTranslation("navigation-menu");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.navigation")}
        title="Navigation Menu"
        description={t("description")}
      />

      <ComponentPreview
        example={NavigationMenuDemo}
        code={navigationMenuDemoCode}
        className="min-h-96 items-start"
      />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="navigation-menu"
          exports={[
            "NavigationMenu",
            "NavigationMenuContent",
            "NavigationMenuItem",
            "NavigationMenuLink",
            "NavigationMenuList",
            "NavigationMenuTrigger",
          ]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("tip")}</p>
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="no-viewport"
          title={t("examples.noViewport.title")}
          description={t("examples.noViewport.description")}
          example={NavigationMenuNoViewport}
          code={navigationMenuNoViewportCode}
          previewClassName="min-h-64 items-start"
        />
      </Section>

      <Section
        id="states"
        title={tCommon("sections.states")}
        description={tCommon("sections.statesDescription")}
      >
        <StateMatrix rows={ROWS} states={["default", "hover", "focus", "disabled"]}>
          {(state, row) => (
            // A plain button with the trigger style, so each state can be shown on its own.
            <button
              type="button"
              className={navigationMenuTriggerStyle()}
              data-state={row === "open" ? "open" : "closed"}
              data-active={row === "active" ? "" : undefined}
              disabled={state === "disabled"}
            >
              Destinasi
            </button>
          )}
        </StateMatrix>
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "NavigationMenu", element: "<nav>", description: t("parts.root") },
            { name: "NavigationMenuList", element: "<ul>", description: t("parts.list") },
            { name: "NavigationMenuItem", element: "<li>", description: t("parts.item") },
            { name: "NavigationMenuTrigger", element: "<button>", description: t("parts.trigger") },
            { name: "NavigationMenuContent", element: "<div>", description: t("parts.content") },
            { name: "NavigationMenuLink", element: "<a>", description: t("parts.link") },
            { name: "NavigationMenuViewport", element: "<div>", description: t("parts.viewport") },
            {
              name: "NavigationMenuIndicator",
              element: "<div>",
              description: t("parts.indicator"),
            },
            {
              name: "navigationMenuTriggerStyle()",
              element: "string",
              description: t("parts.triggerStyle"),
            },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "NavigationMenu · viewport",
              type: "boolean",
              default: "true",
              description: t("props.viewport"),
            },
            {
              name: "NavigationMenu · delayDuration",
              type: "number",
              default: "200",
              description: t("props.delayDuration"),
            },
            { name: "NavigationMenu · value", type: "string", description: t("props.value") },
            {
              name: "NavigationMenuLink · active",
              type: "boolean",
              default: "false",
              description: t("props.active"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
