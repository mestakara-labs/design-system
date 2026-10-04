/** Docs page: Native Select — texts in `locales/<lang>/native-select.json`. */
import { useTranslation } from "react-i18next";

import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import { StateMatrix } from "../../page-parts/state-matrix";
import NativeSelectDemo from "../../examples/native-select/native-select-demo";
import nativeSelectDemoCode from "../../examples/native-select/native-select-demo?raw";
import NativeSelectGroups from "../../examples/native-select/native-select-groups";
import nativeSelectGroupsCode from "../../examples/native-select/native-select-groups?raw";
import NativeSelectInvalid from "../../examples/native-select/native-select-invalid";
import nativeSelectInvalidCode from "../../examples/native-select/native-select-invalid?raw";

const USAGE_CODE = `
import { NativeSelect, NativeSelectOption } from "@mestakara/ui/native-select";

<NativeSelect>
  <NativeSelectOption value="malabar">Malabar Tea Village</NativeSelectOption>
</NativeSelect>
`;

export default function NativeSelectPage() {
  const { t } = useTranslation("native-select");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.form")}
        title="Native Select"
        description={t("description")}
      />

      <ComponentPreview example={NativeSelectDemo} code={nativeSelectDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="native-select"
          exports={["NativeSelect", "NativeSelectOption", "NativeSelectOptGroup"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="groups"
          title={t("examples.groups.title")}
          description={t("examples.groups.description")}
          example={NativeSelectGroups}
          code={nativeSelectGroupsCode}
        />
        <Example
          id="invalid"
          title={t("examples.invalid.title")}
          description={t("examples.invalid.description")}
          example={NativeSelectInvalid}
          code={nativeSelectInvalidCode}
        />
      </Section>

      <Section
        id="states"
        title={tCommon("sections.states")}
        description={tCommon("sections.statesDescription")}
      >
        <StateMatrix
          rows={["md", "sm"]}
          states={["default", "hover", "focus", "invalid", "disabled"]}
        >
          {(state, size) => (
            <NativeSelect
              size={size}
              aria-label={`${size} ${state}`}
              aria-invalid={state === "invalid"}
              disabled={state === "disabled"}
              className="w-24"
            >
              <NativeSelectOption>Pilih</NativeSelectOption>
            </NativeSelect>
          )}
        </StateMatrix>
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            { name: "size", type: '"sm" | "md"', default: '"md"', description: t("props.size") },
            {
              name: "aria-invalid",
              type: "boolean",
              default: "false",
              description: t("props.ariaInvalid"),
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: t("props.disabled"),
            },
          ]}
        />
        <p className="typo-body-m text-fg-secondary">{t("props.native")}</p>
      </Section>
    </div>
  );
}
