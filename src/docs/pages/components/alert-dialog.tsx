/** Docs page: Alert Dialog — texts in `locales/<lang>/alert-dialog.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import AlertDialogDemo from "../../examples/alert-dialog/alert-dialog-demo";
import alertDialogDemoCode from "../../examples/alert-dialog/alert-dialog-demo?raw";
import AlertDialogSmall from "../../examples/alert-dialog/alert-dialog-small";
import alertDialogSmallCode from "../../examples/alert-dialog/alert-dialog-small?raw";

const USAGE_CODE = `
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@mestakara/ui/alert-dialog";

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Batalkan Pesanan</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Batalkan pesanan ini?</AlertDialogTitle>
      <AlertDialogDescription>Tindakan ini tidak bisa dibatalkan.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Kembali</AlertDialogCancel>
      <AlertDialogAction variant="destructive">Ya, Batalkan</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
`;

export default function AlertDialogPage() {
  const { t } = useTranslation("alert-dialog");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.overlay")}
        title="Alert Dialog"
        description={t("description")}
      />

      <ComponentPreview example={AlertDialogDemo} code={alertDialogDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="alert-dialog"
          exports={["AlertDialog", "AlertDialogAction", "AlertDialogCancel", "AlertDialogContent"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <ul className="list-disc pl-5 typo-body-m text-fg-secondary">
          <li>{t("guidelines.verbs")}</li>
          <li>{t("guidelines.outside")}</li>
        </ul>
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="small"
          title={t("examples.small.title")}
          description={t("examples.small.description")}
          example={AlertDialogSmall}
          code={alertDialogSmallCode}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "AlertDialogContent · size",
              type: '"sm" | "md"',
              default: '"md"',
              description: t("props.size"),
            },
            {
              name: "AlertDialogAction · variant",
              type: "Button variant",
              default: '"primary"',
              description: t("props.actionVariant"),
            },
            {
              name: "AlertDialogCancel · variant",
              type: "Button variant",
              default: '"outline"',
              description: t("props.cancelVariant"),
            },
            { name: "AlertDialog · open", type: "boolean", description: t("props.open") },
          ]}
        />
      </Section>
    </div>
  );
}
