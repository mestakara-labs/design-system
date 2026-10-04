/** Docs page: Toggle — texts in `locales/<lang>/toggle.json`. */
import { HeartIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Toggle } from "@/components/ui/toggle";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import { StateMatrix } from "../../page-parts/state-matrix";
import ToggleDemo from "../../examples/toggle/toggle-demo";
import toggleDemoCode from "../../examples/toggle/toggle-demo?raw";
import ToggleDisabled from "../../examples/toggle/toggle-disabled";
import toggleDisabledCode from "../../examples/toggle/toggle-disabled?raw";
import ToggleOutline from "../../examples/toggle/toggle-outline";
import toggleOutlineCode from "../../examples/toggle/toggle-outline?raw";
import ToggleSizes from "../../examples/toggle/toggle-sizes";
import toggleSizesCode from "../../examples/toggle/toggle-sizes?raw";

/** Each matrix row = one variant in one on/off state. */
const ROWS = {
  "default · off": { variant: "default", pressed: false },
  "default · on": { variant: "default", pressed: true },
  "outline · off": { variant: "outline", pressed: false },
  "outline · on": { variant: "outline", pressed: true },
} as const;

const USAGE_CODE = `
import { Toggle } from "@mestakara/ui/toggle";

<Toggle aria-label="Simpan ke favorit">
  <HeartIcon />
  Favorit
</Toggle>
`;

export default function TogglePage() {
  const { t } = useTranslation("toggle");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.form")}
        title="Toggle"
        description={t("description")}
      />

      <ComponentPreview example={ToggleDemo} code={toggleDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="toggle" exports={["Toggle"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="outline"
          title={t("examples.outline.title")}
          description={t("examples.outline.description")}
          example={ToggleOutline}
          code={toggleOutlineCode}
        />
        <Example
          id="sizes"
          title={t("examples.sizes.title")}
          description={t("examples.sizes.description")}
          example={ToggleSizes}
          code={toggleSizesCode}
        />
        <Example
          id="disabled"
          title={t("examples.disabled.title")}
          description={t("examples.disabled.description")}
          example={ToggleDisabled}
          code={toggleDisabledCode}
        />
      </Section>

      <Section
        id="states"
        title={tCommon("sections.states")}
        description={tCommon("sections.statesDescription")}
      >
        <StateMatrix
          rows={Object.keys(ROWS) as (keyof typeof ROWS)[]}
          states={["default", "hover", "focus", "disabled"]}
        >
          {(state, row) => (
            <Toggle
              variant={ROWS[row].variant}
              pressed={ROWS[row].pressed}
              disabled={state === "disabled"}
              aria-label={`${row} ${state}`}
            >
              <HeartIcon />
            </Toggle>
          )}
        </StateMatrix>
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "variant",
              type: '"default" | "outline"',
              default: '"default"',
              description: t("props.variant"),
            },
            {
              name: "size",
              type: '"sm" | "md" | "lg"',
              default: '"md"',
              description: t("props.size"),
            },
            { name: "pressed", type: "boolean", description: t("props.pressed") },
            {
              name: "defaultPressed",
              type: "boolean",
              default: "false",
              description: t("props.defaultPressed"),
            },
            {
              name: "onPressedChange",
              type: "(pressed: boolean) => void",
              description: t("props.onPressedChange"),
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: t("props.disabled"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
