/** Docs page: Kbd — texts in `locales/<lang>/kbd.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { Section } from "../../page-parts/section";
import KbdDemo from "../../examples/kbd/kbd-demo";
import kbdDemoCode from "../../examples/kbd/kbd-demo?raw";

const USAGE_CODE = `
import { Kbd, KbdGroup } from "@mestakara/ui/kbd";

<KbdGroup>
  <Kbd>Ctrl</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>
`;

export default function KbdPage() {
  const { t } = useTranslation("kbd");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.data-display")}
        title="Kbd"
        description={t("description")}
      />

      <ComponentPreview example={KbdDemo} code={kbdDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="kbd" exports={["Kbd", "KbdGroup"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "Kbd", element: "<kbd>", description: t("parts.kbd") },
            { name: "KbdGroup", element: "<kbd>", description: t("parts.group") },
          ]}
        />
      </Section>
    </div>
  );
}
