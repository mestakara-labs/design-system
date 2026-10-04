/** Docs page: Dropdown Menu — texts in `locales/<lang>/dropdown-menu.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import DropdownMenuCheckboxes from "../../examples/dropdown-menu/dropdown-menu-checkboxes";
import dropdownMenuCheckboxesCode from "../../examples/dropdown-menu/dropdown-menu-checkboxes?raw";
import DropdownMenuDemo from "../../examples/dropdown-menu/dropdown-menu-demo";
import dropdownMenuDemoCode from "../../examples/dropdown-menu/dropdown-menu-demo?raw";
import DropdownMenuRadio from "../../examples/dropdown-menu/dropdown-menu-radio";
import dropdownMenuRadioCode from "../../examples/dropdown-menu/dropdown-menu-radio?raw";
import DropdownMenuRowActions from "../../examples/dropdown-menu/dropdown-menu-row-actions";
import dropdownMenuRowActionsCode from "../../examples/dropdown-menu/dropdown-menu-row-actions?raw";

const USAGE_CODE = `
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@mestakara/ui/dropdown-menu";

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Aksi</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Ubah</DropdownMenuItem>
    <DropdownMenuItem variant="destructive">Batalkan</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
`;

export default function DropdownMenuPage() {
  const { t } = useTranslation("dropdown-menu");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.overlay")}
        title="Dropdown Menu"
        description={t("description")}
      />

      <ComponentPreview example={DropdownMenuDemo} code={dropdownMenuDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="dropdown-menu"
          exports={[
            "DropdownMenu",
            "DropdownMenuContent",
            "DropdownMenuItem",
            "DropdownMenuTrigger",
          ]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="checkboxes"
          title={t("examples.checkboxes.title")}
          description={t("examples.checkboxes.description")}
          example={DropdownMenuCheckboxes}
          code={dropdownMenuCheckboxesCode}
        />
        <Example
          id="radio"
          title={t("examples.radio.title")}
          description={t("examples.radio.description")}
          example={DropdownMenuRadio}
          code={dropdownMenuRadioCode}
        />
        <Example
          id="row-actions"
          title={t("examples.rowActions.title")}
          description={t("examples.rowActions.description")}
          example={DropdownMenuRowActions}
          code={dropdownMenuRowActionsCode}
        />
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")} description={t("anatomy")}>
        <PartsTable
          rows={[
            { name: "DropdownMenuTrigger", element: "<button>", description: t("parts.trigger") },
            { name: "DropdownMenuContent", element: "<div>", description: t("parts.content") },
            { name: "DropdownMenuItem", element: "<div>", description: t("parts.item") },
            {
              name: "DropdownMenuCheckboxItem",
              element: "<div>",
              description: t("parts.checkbox"),
            },
            {
              name: "DropdownMenuRadioGroup / RadioItem",
              element: "<div>",
              description: t("parts.radio"),
            },
            { name: "DropdownMenuLabel", element: "<div>", description: t("parts.label") },
            { name: "DropdownMenuSeparator", element: "<div>", description: t("parts.separator") },
            { name: "DropdownMenuShortcut", element: "<span>", description: t("parts.shortcut") },
            {
              name: "DropdownMenuSub / SubTrigger / SubContent",
              element: "<div>",
              description: t("parts.sub"),
            },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "DropdownMenuItem · variant",
              type: '"default" | "destructive"',
              default: '"default"',
              description: t("props.variant"),
            },
            {
              name: "DropdownMenuItem · inset",
              type: "boolean",
              default: "false",
              description: t("props.inset"),
            },
            {
              name: "DropdownMenuContent · align",
              type: '"start" | "center" | "end"',
              default: '"center"',
              description: t("props.align"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
