/** Docs page: Combobox — texts in `locales/<lang>/combobox.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import ComboboxClear from "../../examples/combobox/combobox-clear";
import comboboxClearCode from "../../examples/combobox/combobox-clear?raw";
import ComboboxDemo from "../../examples/combobox/combobox-demo";
import comboboxDemoCode from "../../examples/combobox/combobox-demo?raw";
import ComboboxMultiple from "../../examples/combobox/combobox-multiple";
import comboboxMultipleCode from "../../examples/combobox/combobox-multiple?raw";

const USAGE_CODE = `
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@mestakara/ui/combobox";

<Combobox items={units}>
  <ComboboxInput placeholder="Cari unit…" />
  <ComboboxContent>
    <ComboboxEmpty>Unit tidak ditemukan.</ComboboxEmpty>
    <ComboboxList>
      {(unit) => <ComboboxItem key={unit} value={unit}>{unit}</ComboboxItem>}
    </ComboboxList>
  </ComboboxContent>
</Combobox>
`;

export default function ComboboxPage() {
  const { t } = useTranslation("combobox");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.form")}
        title="Combobox"
        description={t("description")}
      />

      <ComponentPreview example={ComboboxDemo} code={comboboxDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="combobox"
          exports={[
            "Combobox",
            "ComboboxContent",
            "ComboboxEmpty",
            "ComboboxInput",
            "ComboboxItem",
            "ComboboxList",
          ]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="clear"
          title={t("examples.clear.title")}
          description={t("examples.clear.description")}
          example={ComboboxClear}
          code={comboboxClearCode}
        />
        <Example
          id="multiple"
          title={t("examples.multiple.title")}
          description={t("examples.multiple.description")}
          example={ComboboxMultiple}
          code={comboboxMultipleCode}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            { name: "Combobox · items", type: "T[]", description: t("props.items") },
            { name: "Combobox · value", type: "T | T[]", description: t("props.value") },
            {
              name: "Combobox · onValueChange",
              type: "(value) => void",
              description: t("props.onValueChange"),
            },
            {
              name: "Combobox · multiple",
              type: "boolean",
              default: "false",
              description: t("props.multiple"),
            },
            {
              name: "ComboboxInput · showTrigger",
              type: "boolean",
              default: "true",
              description: t("props.showTrigger"),
            },
            {
              name: "ComboboxInput · showClear",
              type: "boolean",
              default: "false",
              description: t("props.showClear"),
            },
          ]}
        />
        <p className="typo-body-m text-fg-secondary">{t("props.baseUi")}</p>
      </Section>
    </div>
  );
}
