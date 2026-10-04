/** Docs page: Tabs — texts in `locales/<lang>/tabs.json`. */
import { useTranslation } from "react-i18next";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import { StateMatrix } from "../../page-parts/state-matrix";
import TabsDemo from "../../examples/tabs/tabs-demo";
import tabsDemoCode from "../../examples/tabs/tabs-demo?raw";
import TabsIcons from "../../examples/tabs/tabs-icons";
import tabsIconsCode from "../../examples/tabs/tabs-icons?raw";
import TabsLine from "../../examples/tabs/tabs-line";
import tabsLineCode from "../../examples/tabs/tabs-line?raw";
import TabsVertical from "../../examples/tabs/tabs-vertical";
import tabsVerticalCode from "../../examples/tabs/tabs-vertical?raw";

/** Each matrix row = one variant, with the tab active or not. */
const ROWS = {
  "default · inactive": { variant: "default", active: false },
  "default · active": { variant: "default", active: true },
  "line · inactive": { variant: "line", active: false },
  "line · active": { variant: "line", active: true },
} as const;

const USAGE_CODE = `
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@mestakara/ui/tabs";

<Tabs defaultValue="description">
  <TabsList>
    <TabsTrigger value="description">Deskripsi</TabsTrigger>
    <TabsTrigger value="facilities">Fasilitas</TabsTrigger>
  </TabsList>
  <TabsContent value="description">…</TabsContent>
  <TabsContent value="facilities">…</TabsContent>
</Tabs>
`;

export default function TabsPage() {
  const { t } = useTranslation("tabs");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.navigation")}
        title="Tabs"
        description={t("description")}
      />

      <ComponentPreview example={TabsDemo} code={tabsDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="tabs"
          exports={["Tabs", "TabsContent", "TabsList", "TabsTrigger"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("tip")}</p>
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="line"
          title={t("examples.line.title")}
          description={t("examples.line.description")}
          example={TabsLine}
          code={tabsLineCode}
        />
        <Example
          id="icons"
          title={t("examples.icons.title")}
          description={t("examples.icons.description")}
          example={TabsIcons}
          code={tabsIconsCode}
        />
        <Example
          id="vertical"
          title={t("examples.vertical.title")}
          description={t("examples.vertical.description")}
          example={TabsVertical}
          code={tabsVerticalCode}
        />
      </Section>

      <Section
        id="states"
        title={tCommon("sections.states")}
        description={tCommon("sections.statesDescription")}
      >
        <StateMatrix
          rows={Object.keys(ROWS) as (keyof typeof ROWS)[]}
          states={["default", "hover", "focus", "disabled"]}
        >
          {(state, row) => (
            <Tabs value={ROWS[row].active ? "tab" : "other"}>
              <TabsList variant={ROWS[row].variant}>
                <TabsTrigger value="tab" disabled={state === "disabled"}>
                  Tiket
                </TabsTrigger>
              </TabsList>
            </Tabs>
          )}
        </StateMatrix>
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "Tabs", element: "<div>", description: t("parts.root") },
            { name: "TabsList", element: "<div>", description: t("parts.list") },
            { name: "TabsTrigger", element: "<button>", description: t("parts.trigger") },
            { name: "TabsContent", element: "<div>", description: t("parts.content") },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            { name: "Tabs · defaultValue", type: "string", description: t("props.defaultValue") },
            { name: "Tabs · value", type: "string", description: t("props.value") },
            {
              name: "Tabs · orientation",
              type: '"horizontal" | "vertical"',
              default: '"horizontal"',
              description: t("props.orientation"),
            },
            {
              name: "TabsList · variant",
              type: '"default" | "line"',
              default: '"default"',
              description: t("props.variant"),
            },
            {
              name: "TabsTrigger · disabled",
              type: "boolean",
              default: "false",
              description: t("props.disabled"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
