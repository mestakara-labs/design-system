/**
 * Docs page: Data Table — texts in `locales/<lang>/data-table.json`.
 * There is no DataTable component: it is a pattern of <Table> + @tanstack/react-table.
 */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { Section } from "../../page-parts/section";
import DataTableDemo from "../../examples/data-table/data-table-demo";
import dataTableDemoCode from "../../examples/data-table/data-table-demo?raw";

export default function DataTablePage() {
  const { t } = useTranslation("data-table");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.data-display")}
        title="Data Table"
        description={t("description")}
      />

      <ComponentPreview
        example={DataTableDemo}
        code={dataTableDemoCode}
        className="items-start p-4"
      />

      <Section
        id="installation"
        title={tCommon("sections.installation")}
        description={t("installation")}
      >
        <InstallSnippet
          component="table"
          exports={["Table", "TableBody", "TableCell", "TableHead", "TableHeader", "TableRow"]}
        />
        <CodeBlock language="bash" code="npm install @tanstack/react-table@8" />
      </Section>

      <Section id="how-it-works" title={t("howItWorks.title")}>
        <ol className="list-decimal pl-5 typo-body-m text-fg-secondary">
          <li>{t("howItWorks.columns")}</li>
          <li>{t("howItWorks.table")}</li>
          <li>{t("howItWorks.render")}</li>
        </ol>
        <p className="typo-body-m text-fg-secondary">{t("docs")}</p>
      </Section>
    </div>
  );
}
