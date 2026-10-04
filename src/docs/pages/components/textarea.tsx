/** Docs page: Textarea — texts in `locales/<lang>/textarea.json`. */
import { useTranslation } from "react-i18next";

import { Textarea } from "@/components/ui/textarea";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import { StateMatrix } from "../../page-parts/state-matrix";
import TextareaDemo from "../../examples/textarea/textarea-demo";
import textareaDemoCode from "../../examples/textarea/textarea-demo?raw";
import TextareaDisabled from "../../examples/textarea/textarea-disabled";
import textareaDisabledCode from "../../examples/textarea/textarea-disabled?raw";
import TextareaInvalid from "../../examples/textarea/textarea-invalid";
import textareaInvalidCode from "../../examples/textarea/textarea-invalid?raw";
import TextareaWithLabel from "../../examples/textarea/textarea-with-label";
import textareaWithLabelCode from "../../examples/textarea/textarea-with-label?raw";

const USAGE_CODE = `
import { Textarea } from "@mestakara/ui/textarea";

<Textarea placeholder="Tulis catatan…" />
`;

export default function TextareaPage() {
  const { t } = useTranslation("textarea");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.form")}
        title="Textarea"
        description={t("description")}
      />

      <ComponentPreview example={TextareaDemo} code={textareaDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="textarea" exports={["Textarea"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="with-label"
          title={t("examples.withLabel.title")}
          description={t("examples.withLabel.description")}
          example={TextareaWithLabel}
          code={textareaWithLabelCode}
        />
        <Example
          id="invalid"
          title={t("examples.invalid.title")}
          description={t("examples.invalid.description")}
          example={TextareaInvalid}
          code={textareaInvalidCode}
        />
        <Example
          id="disabled"
          title={t("examples.disabled.title")}
          description={t("examples.disabled.description")}
          example={TextareaDisabled}
          code={textareaDisabledCode}
        />
      </Section>

      <Section
        id="states"
        title={tCommon("sections.states")}
        description={tCommon("sections.statesDescription")}
      >
        <StateMatrix
          rows={["textarea"]}
          states={["default", "hover", "focus", "invalid", "disabled"]}
        >
          {(state) => (
            <Textarea
              placeholder="Catatan…"
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
