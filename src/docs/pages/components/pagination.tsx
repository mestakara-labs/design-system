/** Docs page: Pagination — texts in `locales/<lang>/pagination.json`. */
import { useTranslation } from "react-i18next";

import { PaginationLink, PaginationPrevious } from "@/components/ui/pagination";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import { StateMatrix } from "../../page-parts/state-matrix";
import PaginationDemo from "../../examples/pagination/pagination-demo";
import paginationDemoCode from "../../examples/pagination/pagination-demo?raw";
import PaginationSimple from "../../examples/pagination/pagination-simple";
import paginationSimpleCode from "../../examples/pagination/pagination-simple?raw";

const USAGE_CODE = `
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@mestakara/ui/pagination";

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="?page=1" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="?page=1">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="?page=2" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="?page=3" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
`;

export default function PaginationPage() {
  const { t } = useTranslation("pagination");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.navigation")}
        title="Pagination"
        description={t("description")}
      />

      <ComponentPreview example={PaginationDemo} code={paginationDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="pagination"
          exports={[
            "Pagination",
            "PaginationContent",
            "PaginationEllipsis",
            "PaginationItem",
            "PaginationLink",
            "PaginationNext",
            "PaginationPrevious",
          ]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("tip")}</p>
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="simple"
          title={t("examples.simple.title")}
          description={t("examples.simple.description")}
          example={PaginationSimple}
          code={paginationSimpleCode}
        />
      </Section>

      <Section
        id="states"
        title={tCommon("sections.states")}
        description={tCommon("sections.statesDescription")}
      >
        <StateMatrix
          rows={["PaginationLink", "PaginationLink · isActive", "PaginationPrevious"]}
          states={["default", "hover", "focus", "pressed"]}
        >
          {(_state, row) =>
            row === "PaginationPrevious" ? (
              <PaginationPrevious href="#" />
            ) : (
              <PaginationLink href="#" isActive={row === "PaginationLink · isActive"}>
                2
              </PaginationLink>
            )
          }
        </StateMatrix>
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "Pagination", element: "<nav>", description: t("parts.root") },
            { name: "PaginationContent", element: "<ul>", description: t("parts.content") },
            { name: "PaginationItem", element: "<li>", description: t("parts.item") },
            { name: "PaginationLink", element: "<a>", description: t("parts.link") },
            { name: "PaginationPrevious", element: "<a>", description: t("parts.previous") },
            { name: "PaginationNext", element: "<a>", description: t("parts.next") },
            { name: "PaginationEllipsis", element: "<span>", description: t("parts.ellipsis") },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "PaginationLink · isActive",
              type: "boolean",
              default: "false",
              description: t("props.isActive"),
            },
            {
              name: "PaginationLink · size",
              type: '"icon" | "md"',
              default: '"icon"',
              description: t("props.size"),
            },
            {
              name: "PaginationPrevious / Next · text",
              type: "string",
              default: '"Sebelumnya" / "Berikutnya"',
              description: t("props.text"),
            },
            {
              name: "Pagination · aria-label",
              type: "string",
              default: '"Navigasi halaman"',
              description: t("props.ariaLabel"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
