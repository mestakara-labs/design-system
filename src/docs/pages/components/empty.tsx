/** Docs page: Empty — texts in `locales/<lang>/empty.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { Section } from "../../page-parts/section";
import EmptyDemo from "../../examples/empty/empty-demo";
import emptyDemoCode from "../../examples/empty/empty-demo?raw";
import EmptyOutline from "../../examples/empty/empty-outline";
import emptyOutlineCode from "../../examples/empty/empty-outline?raw";

const USAGE_CODE = `
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@mestakara/ui/empty";

<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon"><TicketIcon /></EmptyMedia>
    <EmptyTitle>Belum ada tiket</EmptyTitle>
    <EmptyDescription>Tiket yang Anda pesan akan muncul di sini.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Lihat Paket</Button>
  </EmptyContent>
</Empty>
`;

export default function EmptyPage() {
  const { t } = useTranslation("empty");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.data-display")}
        title="Empty"
        description={t("description")}
      />

      <ComponentPreview example={EmptyDemo} code={emptyDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="empty"
          exports={["Empty", "EmptyContent", "EmptyDescription", "EmptyHeader", "EmptyTitle"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="outline"
          title={t("examples.outline.title")}
          description={t("examples.outline.description")}
          example={EmptyOutline}
          code={emptyOutlineCode}
        />
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "Empty", element: "<div>", description: t("parts.empty") },
            { name: "EmptyHeader", element: "<div>", description: t("parts.header") },
            { name: "EmptyMedia", element: "<div>", description: t("parts.media") },
            { name: "EmptyTitle", element: "<div>", description: t("parts.title") },
            { name: "EmptyDescription", element: "<div>", description: t("parts.description") },
            { name: "EmptyContent", element: "<div>", description: t("parts.content") },
          ]}
        />
      </Section>
    </div>
  );
}
