/** Docs page: Input — texts in `locales/<lang>/input.json`. */
import { useTranslation } from "react-i18next";

import { Input } from "@/components/ui/input";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import { StateMatrix } from "../../page-parts/state-matrix";
import InputDemo from "../../examples/input/input-demo";
import inputDemoCode from "../../examples/input/input-demo?raw";
import InputDisabled from "../../examples/input/input-disabled";
import inputDisabledCode from "../../examples/input/input-disabled?raw";
import InputFile from "../../examples/input/input-file";
import inputFileCode from "../../examples/input/input-file?raw";
import InputInvalid from "../../examples/input/input-invalid";
import inputInvalidCode from "../../examples/input/input-invalid?raw";
import InputWithLabel from "../../examples/input/input-with-label";
import inputWithLabelCode from "../../examples/input/input-with-label?raw";

const USAGE_CODE = `
import { Input } from "@mestakara/ui/input";

<Input type="email" placeholder="nama@email.com" />
`;

export default function InputPage() {
  const { t } = useTranslation("input");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.form")}
        title="Input"
        description={t("description")}
      />

      <ComponentPreview example={InputDemo} code={inputDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="input" exports={["Input"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <ul className="list-disc pl-5 typo-body-m text-fg-secondary">
          <li>{t("guidelines.label")}</li>
          <li>{t("guidelines.error")}</li>
        </ul>
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="with-label"
          title={t("examples.withLabel.title")}
          description={t("examples.withLabel.description")}
          example={InputWithLabel}
          code={inputWithLabelCode}
        />
        <Example
          id="invalid"
          title={t("examples.invalid.title")}
          description={t("examples.invalid.description")}
          example={InputInvalid}
          code={inputInvalidCode}
        />
        <Example
          id="disabled"
          title={t("examples.disabled.title")}
          description={t("examples.disabled.description")}
          example={InputDisabled}
          code={inputDisabledCode}
        />
        <Example
          id="file"
          title={t("examples.file.title")}
          description={t("examples.file.description")}
          example={InputFile}
          code={inputFileCode}
        />
      </Section>

      <Section
        id="states"
        title={tCommon("sections.states")}
        description={tCommon("sections.statesDescription")}
      >
        <StateMatrix rows={["input"]} states={["default", "hover", "focus", "invalid", "disabled"]}>
          {(state) => (
            <Input
              placeholder="nama@email.com"
              aria-label={state}
              aria-invalid={state === "invalid"}
              disabled={state === "disabled"}
              className="w-full"
            />
          )}
        </StateMatrix>
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            { name: "type", type: "string", default: '"text"', description: t("props.type") },
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
