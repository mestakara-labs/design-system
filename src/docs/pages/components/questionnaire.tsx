/** Docs page: Questionnaire — texts in `locales/<lang>/questionnaire.json`. */
import { useTranslation } from "react-i18next";

import {
  Questionnaire,
  QuestionnaireChoice,
  QuestionnaireChoiceInput,
  QuestionnaireChoiceLabel,
  QuestionnaireItem,
} from "@/components/ui/questionnaire";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import { StateMatrix } from "../../page-parts/state-matrix";
import QuestionnaireDemo from "../../examples/questionnaire/questionnaire-demo";
import questionnaireDemoCode from "../../examples/questionnaire/questionnaire-demo?raw";

const USAGE_CODE = `
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceInput,
  QuestionnaireChoiceLabel,
  QuestionnaireChoices,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@mestakara/ui/questionnaire";

<Questionnaire onSubmit={handleSubmit}>
  <QuestionnaireItem name="rating" required>
    <QuestionnaireTitle>Seberapa puas Anda?</QuestionnaireTitle>
    <QuestionnaireChoices>
      <QuestionnaireChoice value="5">
        <QuestionnaireChoiceInput />
        <QuestionnaireChoiceLabel>Sangat puas</QuestionnaireChoiceLabel>
      </QuestionnaireChoice>
    </QuestionnaireChoices>
  </QuestionnaireItem>
  <QuestionnaireActions>
    <QuestionnaireNext />
    <QuestionnaireSubmit />
  </QuestionnaireActions>
</Questionnaire>
`;

export default function QuestionnairePage() {
  const { t } = useTranslation("questionnaire");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.chat")}
        title="Questionnaire"
        description={t("description")}
      />

      <ComponentPreview
        example={QuestionnaireDemo}
        code={questionnaireDemoCode}
        className="items-start"
      />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="questionnaire"
          exports={["Questionnaire", "QuestionnaireItem", "QuestionnaireChoice"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("tip")}</p>
      </Section>

      <Section
        id="states"
        title={tCommon("sections.states")}
        description={tCommon("sections.statesDescription")}
      >
        <StateMatrix rows={["unchecked", "checked"]} states={["default", "hover", "disabled"]}>
          {(state, row) => (
            // Each cell is its own one-question questionnaire.
            <Questionnaire className="w-auto">
              <QuestionnaireItem name="preview">
                <QuestionnaireChoice
                  value="yes"
                  defaultChecked={row === "checked"}
                  disabled={state === "disabled"}
                >
                  <QuestionnaireChoiceInput />
                  <QuestionnaireChoiceLabel>Puas</QuestionnaireChoiceLabel>
                </QuestionnaireChoice>
              </QuestionnaireItem>
            </Questionnaire>
          )}
        </StateMatrix>
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "Questionnaire", element: "<form>", description: t("parts.root") },
            { name: "QuestionnaireProgress", element: "<div>", description: t("parts.progress") },
            { name: "QuestionnaireItem", element: "<fieldset>", description: t("parts.item") },
            { name: "QuestionnaireTitle", element: "<legend>", description: t("parts.title") },
            {
              name: "QuestionnaireDescription",
              element: "<p>",
              description: t("parts.description"),
            },
            { name: "QuestionnaireChoices", element: "<div>", description: t("parts.choices") },
            { name: "QuestionnaireChoice", element: "<label>", description: t("parts.choice") },
            {
              name: "QuestionnaireChoiceInput",
              element: "<input>",
              description: t("parts.choiceInput"),
            },
            {
              name: "QuestionnaireChoiceLabel",
              element: "<span>",
              description: t("parts.choiceLabel"),
            },
            {
              name: "QuestionnaireChoiceShortcut",
              element: "<span>",
              description: t("parts.choiceShortcut"),
            },
            { name: "QuestionnaireInput", element: "<input>", description: t("parts.input") },
            { name: "QuestionnaireError", element: "<p>", description: t("parts.error") },
            { name: "QuestionnaireActions", element: "<div>", description: t("parts.actions") },
            {
              name: "QuestionnairePrevious · Skip · Next · Submit",
              element: "<button>",
              description: t("parts.navigation"),
            },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "Questionnaire · shortcuts",
              type: '"letters" | "numbers"',
              description: t("props.shortcuts"),
            },
            {
              name: "Questionnaire · onSubmit",
              type: "(event: FormEvent) => void",
              description: t("props.onSubmit"),
            },
            { name: "Questionnaire · item", type: "string", description: t("props.item") },
            {
              name: "QuestionnaireItem · required",
              type: "boolean",
              default: "false",
              description: t("props.required"),
            },
            {
              name: "QuestionnaireItem · multiple",
              type: "boolean",
              default: "false",
              description: t("props.multiple"),
            },
            {
              name: "QuestionnaireProgress · label",
              type: "(current: number, total: number) => string",
              description: t("props.label"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
