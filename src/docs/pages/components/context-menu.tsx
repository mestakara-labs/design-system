/** Docs page: Context Menu — texts in `locales/<lang>/context-menu.json`. */
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { Section } from "../../page-parts/section";
import ContextMenuDemo from "../../examples/context-menu/context-menu-demo";
import contextMenuDemoCode from "../../examples/context-menu/context-menu-demo?raw";
import { componentPath } from "../../paths";

const USAGE_CODE = `
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@mestakara/ui/context-menu";

<ContextMenu>
  <ContextMenuTrigger>Klik kanan di sini</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Salin Kode</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
`;

export default function ContextMenuPage() {
  const { t } = useTranslation("context-menu");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.overlay")}
        title="Context Menu"
        description={t("description")}
      />

      <ComponentPreview example={ContextMenuDemo} code={contextMenuDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="context-menu"
          exports={["ContextMenu", "ContextMenuContent", "ContextMenuItem", "ContextMenuTrigger"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <ul className="list-disc pl-5 typo-body-m text-fg-secondary">
          <li>{t("guidelines.visible")}</li>
          <li>
            {t("guidelines.parts")}{" "}
            <Link
              to={componentPath("dropdown-menu")}
              className="text-fg-link underline underline-offset-4"
            >
              Dropdown Menu
            </Link>
            .
          </li>
        </ul>
      </Section>
    </div>
  );
}
