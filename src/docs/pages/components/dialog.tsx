/** Docs page: Dialog — texts in `locales/<lang>/dialog.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import DialogDemo from "../../examples/dialog/dialog-demo";
import dialogDemoCode from "../../examples/dialog/dialog-demo?raw";
import DialogScroll from "../../examples/dialog/dialog-scroll";
import dialogScrollCode from "../../examples/dialog/dialog-scroll?raw";

const USAGE_CODE = `
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@mestakara/ui/dialog";

<Dialog>
  <DialogTrigger asChild>
    <Button>Buka</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Judul</DialogTitle>
      <DialogDescription>Penjelasan singkat.</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
`;

export default function DialogPage() {
  const { t } = useTranslation("dialog");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.overlay")}
        title="Dialog"
        description={t("description")}
      />

      <ComponentPreview example={DialogDemo} code={dialogDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="dialog"
          exports={["Dialog", "DialogContent", "DialogHeader", "DialogTitle", "DialogTrigger"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("tip")}</p>
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="scroll"
          title={t("examples.scroll.title")}
          description={t("examples.scroll.description")}
          example={DialogScroll}
          code={dialogScrollCode}
        />
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "Dialog", element: "—", description: t("parts.root") },
            { name: "DialogTrigger", element: "<button>", description: t("parts.trigger") },
            { name: "DialogContent", element: "<div>", description: t("parts.content") },
            { name: "DialogHeader", element: "<div>", description: t("parts.header") },
            { name: "DialogTitle", element: "<h2>", description: t("parts.title") },
            { name: "DialogDescription", element: "<p>", description: t("parts.description") },
            { name: "DialogFooter", element: "<div>", description: t("parts.footer") },
            { name: "DialogClose", element: "<button>", description: t("parts.close") },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            { name: "Dialog · open", type: "boolean", description: t("props.open") },
            {
              name: "Dialog · onOpenChange",
              type: "(open: boolean) => void",
              description: t("props.onOpenChange"),
            },
            {
              name: "DialogContent · showCloseButton",
              type: "boolean",
              default: "true",
              description: t("props.showCloseButton"),
            },
            {
              name: "DialogContent · closeLabel",
              type: "string",
              default: '"Tutup"',
              description: t("props.closeLabel"),
            },
            {
              name: "DialogFooter · showCloseButton",
              type: "boolean",
              default: "false",
              description: t("props.footerClose"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
