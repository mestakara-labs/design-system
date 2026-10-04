/** Docs page: Item — texts in `locales/<lang>/item.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import ItemDemo from "../../examples/item/item-demo";
import itemDemoCode from "../../examples/item/item-demo?raw";
import ItemGroupExample from "../../examples/item/item-group";
import itemGroupCode from "../../examples/item/item-group?raw";
import ItemMenu from "../../examples/item/item-menu";
import itemMenuCode from "../../examples/item/item-menu?raw";
import ItemVariants from "../../examples/item/item-variants";
import itemVariantsCode from "../../examples/item/item-variants?raw";

const USAGE_CODE = `
import { Item, ItemContent, ItemDescription, ItemTitle } from "@mestakara/ui/item";

<Item variant="outline">
  <ItemContent>
    <ItemTitle>Tiket Terusan</ItemTitle>
    <ItemDescription>Berlaku 17 Okt 2026</ItemDescription>
  </ItemContent>
</Item>
`;

export default function ItemPage() {
  const { t } = useTranslation("item");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.data-display")}
        title="Item"
        description={t("description")}
      />

      <ComponentPreview example={ItemDemo} code={itemDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="item"
          exports={["Item", "ItemContent", "ItemDescription", "ItemMedia", "ItemTitle"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="variants"
          title={t("examples.variants.title")}
          description={t("examples.variants.description")}
          example={ItemVariants}
          code={itemVariantsCode}
        />
        <Example
          id="menu"
          title={t("examples.menu.title")}
          description={t("examples.menu.description")}
          example={ItemMenu}
          code={itemMenuCode}
        />
        <Example
          id="group"
          title={t("examples.group.title")}
          description={t("examples.group.description")}
          example={ItemGroupExample}
          code={itemGroupCode}
        />
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "ItemGroup", element: "<div>", description: t("parts.group") },
            { name: "Item", element: "<div>", description: t("parts.item") },
            { name: "ItemMedia", element: "<div>", description: t("parts.media") },
            { name: "ItemContent", element: "<div>", description: t("parts.content") },
            { name: "ItemTitle", element: "<div>", description: t("parts.title") },
            { name: "ItemDescription", element: "<p>", description: t("parts.description") },
            { name: "ItemActions", element: "<div>", description: t("parts.actions") },
            {
              name: "ItemHeader / ItemFooter",
              element: "<div>",
              description: t("parts.headerFooter"),
            },
            { name: "ItemSeparator", element: "<div>", description: t("parts.separator") },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "Item · variant",
              type: '"default" | "outline" | "muted"',
              default: '"default"',
              description: t("props.variant"),
            },
            {
              name: "Item · size",
              type: '"sm" | "md"',
              default: '"md"',
              description: t("props.size"),
            },
            {
              name: "Item · asChild",
              type: "boolean",
              default: "false",
              description: t("props.asChild"),
            },
            {
              name: "ItemMedia · variant",
              type: '"default" | "icon" | "image"',
              default: '"default"',
              description: t("props.mediaVariant"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
