/** Docs page: Table — texts in `locales/<lang>/table.json`. */
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import TableBasic from "../../examples/table/table-basic";
import tableBasicCode from "../../examples/table/table-basic?raw";
import TableDemo from "../../examples/table/table-demo";
import tableDemoCode from "../../examples/table/table-demo?raw";
import { componentPath } from "../../paths";

const USAGE_CODE = `
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@mestakara/ui/table";

<Table striped>
  <TableHeader>
    <TableRow>
      <TableHead>Kode</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>RCB-0021</TableCell>
      <TableCell><Badge variant="success">Lunas</Badge></TableCell>
    </TableRow>
  </TableBody>
</Table>
`;

export default function TablePage() {
  const { t } = useTranslation("table");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.data-display")}
        title="Table"
        description={t("description")}
      />

      <ComponentPreview example={TableDemo} code={tableDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="table"
          exports={["Table", "TableBody", "TableCell", "TableHead", "TableHeader", "TableRow"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <p className="typo-body-m text-fg-secondary">
          {t("dataTable")}{" "}
          <Link
            to={componentPath("data-table")}
            className="text-fg-link underline underline-offset-4"
          >
            Data Table
          </Link>
          .
        </p>
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="basic"
          title={t("examples.basic.title")}
          description={t("examples.basic.description")}
          example={TableBasic}
          code={tableBasicCode}
        />
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "Table", element: "<table>", description: t("parts.table") },
            { name: "TableHeader", element: "<thead>", description: t("parts.header") },
            { name: "TableBody", element: "<tbody>", description: t("parts.body") },
            { name: "TableFooter", element: "<tfoot>", description: t("parts.footer") },
            { name: "TableRow", element: "<tr>", description: t("parts.row") },
            { name: "TableHead", element: "<th>", description: t("parts.head") },
            { name: "TableCell", element: "<td>", description: t("parts.cell") },
            { name: "TableCaption", element: "<caption>", description: t("parts.caption") },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "Table · striped",
              type: "boolean",
              default: "false",
              description: t("props.striped"),
            },
            {
              name: 'TableRow · data-state="selected"',
              type: "string",
              description: t("props.selected"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
