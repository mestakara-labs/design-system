/** Docs page: Input Group — texts in `locales/<lang>/input-group.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import InputGroupButtonExample from "../../examples/input-group/input-group-button";
import inputGroupButtonCode from "../../examples/input-group/input-group-button?raw";
import InputGroupDemo from "../../examples/input-group/input-group-demo";
import inputGroupDemoCode from "../../examples/input-group/input-group-demo?raw";
import InputGroupInvalid from "../../examples/input-group/input-group-invalid";
import inputGroupInvalidCode from "../../examples/input-group/input-group-invalid?raw";
import InputGroupTextExample from "../../examples/input-group/input-group-text";
import inputGroupTextCode from "../../examples/input-group/input-group-text?raw";
import InputGroupTextareaExample from "../../examples/input-group/input-group-textarea";
import inputGroupTextareaCode from "../../examples/input-group/input-group-textarea?raw";

const USAGE_CODE = `
import { InputGroup, InputGroupAddon, InputGroupInput } from "@mestakara/ui/input-group";

<InputGroup>
  <InputGroupInput placeholder="Cari destinasi" />
  <InputGroupAddon>
    <SearchIcon />
  </InputGroupAddon>
</InputGroup>
`;

export default function InputGroupPage() {
  const { t } = useTranslation("input-group");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.form")}
        title="Input Group"
        description={t("description")}
      />

      <ComponentPreview example={InputGroupDemo} code={inputGroupDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="input-group"
          exports={["InputGroup", "InputGroupAddon", "InputGroupInput"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="text"
          title={t("examples.text.title")}
          description={t("examples.text.description")}
          example={InputGroupTextExample}
          code={inputGroupTextCode}
        />
        <Example
          id="button"
          title={t("examples.button.title")}
          description={t("examples.button.description")}
          example={InputGroupButtonExample}
          code={inputGroupButtonCode}
        />
        <Example
          id="textarea"
          title={t("examples.textarea.title")}
          description={t("examples.textarea.description")}
          example={InputGroupTextareaExample}
          code={inputGroupTextareaCode}
        />
        <Example
          id="invalid"
          title={t("examples.invalid.title")}
          description={t("examples.invalid.description")}
          example={InputGroupInvalid}
          code={inputGroupInvalidCode}
        />
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "InputGroup", element: "<div>", description: t("parts.group") },
            { name: "InputGroupInput", element: "<input>", description: t("parts.input") },
            { name: "InputGroupTextarea", element: "<textarea>", description: t("parts.textarea") },
            { name: "InputGroupAddon", element: "<div>", description: t("parts.addon") },
            { name: "InputGroupText", element: "<span>", description: t("parts.text") },
            { name: "InputGroupButton", element: "<button>", description: t("parts.button") },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "InputGroupAddon · align",
              type: '"inline-start" | "inline-end" | "block-start" | "block-end"',
              default: '"inline-start"',
              description: t("props.align"),
            },
            {
              name: "InputGroupButton · size",
              type: '"xs" | "sm" | "icon-xs" | "icon-sm"',
              default: '"xs"',
              description: t("props.size"),
            },
            {
              name: "InputGroupButton · variant",
              type: "Button variant",
              default: '"ghost"',
              description: t("props.variant"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
