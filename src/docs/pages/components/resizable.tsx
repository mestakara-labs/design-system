/** Docs page: Resizable — texts in `locales/<lang>/resizable.json`. */
import { useTranslation } from "react-i18next";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import { StateMatrix } from "../../page-parts/state-matrix";
import ResizableDemo from "../../examples/resizable/resizable-demo";
import resizableDemoCode from "../../examples/resizable/resizable-demo?raw";
import ResizableWithHandle from "../../examples/resizable/resizable-handle";
import resizableHandleCode from "../../examples/resizable/resizable-handle?raw";
import ResizableVertical from "../../examples/resizable/resizable-vertical";
import resizableVerticalCode from "../../examples/resizable/resizable-vertical?raw";

const USAGE_CODE = `
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@mestakara/ui/resizable";

<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize="30%">Menu</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Konten</ResizablePanel>
</ResizablePanelGroup>
`;

export default function ResizablePage() {
  const { t } = useTranslation("resizable");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.navigation")}
        title="Resizable"
        description={t("description")}
      />

      <ComponentPreview example={ResizableDemo} code={resizableDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="resizable"
          exports={["ResizableHandle", "ResizablePanel", "ResizablePanelGroup"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("tip")}</p>
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="vertical"
          title={t("examples.vertical.title")}
          description={t("examples.vertical.description")}
          example={ResizableVertical}
          code={resizableVerticalCode}
        />
        <Example
          id="handle"
          title={t("examples.handle.title")}
          description={t("examples.handle.description")}
          example={ResizableWithHandle}
          code={resizableHandleCode}
        />
      </Section>

      <Section
        id="states"
        title={tCommon("sections.states")}
        description={tCommon("sections.statesDescription")}
      >
        <StateMatrix
          rows={["ResizableHandle", "withHandle"]}
          states={["default", "hover", "focus"]}
        >
          {(_state, row) => (
            <div className="h-16 w-28 overflow-hidden rounded-sm border border-border">
              <ResizablePanelGroup>
                <ResizablePanel />
                <ResizableHandle withHandle={row === "withHandle"} />
                <ResizablePanel />
              </ResizablePanelGroup>
            </div>
          )}
        </StateMatrix>
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "ResizablePanelGroup", element: "<div>", description: t("parts.group") },
            { name: "ResizablePanel", element: "<div>", description: t("parts.panel") },
            { name: "ResizableHandle", element: "<div>", description: t("parts.handle") },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "ResizablePanelGroup · orientation",
              type: '"horizontal" | "vertical"',
              default: '"horizontal"',
              description: t("props.orientation"),
            },
            {
              name: "ResizablePanel · defaultSize",
              type: "number | string",
              description: t("props.defaultSize"),
            },
            {
              name: "ResizablePanel · minSize",
              type: "number | string",
              description: t("props.minSize"),
            },
            {
              name: "ResizablePanel · maxSize",
              type: "number | string",
              description: t("props.maxSize"),
            },
            {
              name: "ResizablePanel · collapsible",
              type: "boolean",
              default: "false",
              description: t("props.collapsible"),
            },
            {
              name: "ResizableHandle · withHandle",
              type: "boolean",
              default: "false",
              description: t("props.withHandle"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
