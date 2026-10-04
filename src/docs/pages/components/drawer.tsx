/** Docs page: Drawer — texts in `locales/<lang>/drawer.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import DrawerDemo from "../../examples/drawer/drawer-demo";
import drawerDemoCode from "../../examples/drawer/drawer-demo?raw";
import DrawerRight from "../../examples/drawer/drawer-right";
import drawerRightCode from "../../examples/drawer/drawer-right?raw";

const USAGE_CODE = `
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@mestakara/ui/drawer";

<Drawer>
  <DrawerTrigger asChild>
    <Button>Pesan Tiket</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Jumlah Tiket</DrawerTitle>
    </DrawerHeader>
  </DrawerContent>
</Drawer>
`;

export default function DrawerPage() {
  const { t } = useTranslation("drawer");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.overlay")}
        title="Drawer"
        description={t("description")}
      />

      <ComponentPreview example={DrawerDemo} code={drawerDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="drawer"
          exports={["Drawer", "DrawerContent", "DrawerHeader", "DrawerTitle", "DrawerTrigger"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="right"
          title={t("examples.right.title")}
          description={t("examples.right.description")}
          example={DrawerRight}
          code={drawerRightCode}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "Drawer · direction",
              type: '"bottom" | "top" | "left" | "right"',
              default: '"bottom"',
              description: t("props.direction"),
            },
            { name: "Drawer · open", type: "boolean", description: t("props.open") },
            {
              name: "Drawer · onOpenChange",
              type: "(open: boolean) => void",
              description: t("props.onOpenChange"),
            },
          ]}
        />
        <p className="typo-body-m text-fg-secondary">{t("props.vaul")}</p>
      </Section>
    </div>
  );
}
