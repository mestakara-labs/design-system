/** Docs page: Menubar — texts in `locales/<lang>/menubar.json`. */
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { Section } from "../../page-parts/section";
import MenubarDemo from "../../examples/menubar/menubar-demo";
import menubarDemoCode from "../../examples/menubar/menubar-demo?raw";
import { componentPath } from "../../paths";

const USAGE_CODE = `
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@mestakara/ui/menubar";

<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Berkas</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Transaksi Baru</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
`;

export default function MenubarPage() {
  const { t } = useTranslation("menubar");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.overlay")}
        title="Menubar"
        description={t("description")}
      />

      <ComponentPreview example={MenubarDemo} code={menubarDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="menubar"
          exports={["Menubar", "MenubarContent", "MenubarItem", "MenubarMenu", "MenubarTrigger"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <p className="typo-body-m text-fg-secondary">
          {t("parts")}{" "}
          <Link
            to={componentPath("dropdown-menu")}
            className="text-fg-link underline underline-offset-4"
          >
            Dropdown Menu
          </Link>
          .
        </p>
      </Section>
    </div>
  );
}
