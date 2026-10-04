/** Docs page: Accordion — texts in `locales/<lang>/accordion.json`. */
import { useTranslation } from "react-i18next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import { StateMatrix } from "../../page-parts/state-matrix";
import AccordionDemo from "../../examples/accordion/accordion-demo";
import accordionDemoCode from "../../examples/accordion/accordion-demo?raw";
import AccordionMultiple from "../../examples/accordion/accordion-multiple";
import accordionMultipleCode from "../../examples/accordion/accordion-multiple?raw";

const USAGE_CODE = `
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@mestakara/ui/accordion";

<Accordion type="single" collapsible>
  <AccordionItem value="hours">
    <AccordionTrigger>Jam berapa kebun teh buka?</AccordionTrigger>
    <AccordionContent>Setiap hari pukul 07.00–17.00 WIB.</AccordionContent>
  </AccordionItem>
</Accordion>
`;

export default function AccordionPage() {
  const { t } = useTranslation("accordion");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.navigation")}
        title="Accordion"
        description={t("description")}
      />

      <ComponentPreview example={AccordionDemo} code={accordionDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="accordion"
          exports={["Accordion", "AccordionContent", "AccordionItem", "AccordionTrigger"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="multiple"
          title={t("examples.multiple.title")}
          description={t("examples.multiple.description")}
          example={AccordionMultiple}
          code={accordionMultipleCode}
        />
      </Section>

      <Section
        id="states"
        title={tCommon("sections.states")}
        description={tCommon("sections.statesDescription")}
      >
        <StateMatrix rows={["closed", "open"]} states={["default", "hover", "focus", "disabled"]}>
          {(state, row) => (
            <Accordion type="single" value={row === "open" ? "item" : ""} className="w-full">
              <AccordionItem value="item" disabled={state === "disabled"}>
                <AccordionTrigger>Parkir</AccordionTrigger>
                <AccordionContent className="text-left">Gratis.</AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </StateMatrix>
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "Accordion", element: "<div>", description: t("parts.root") },
            { name: "AccordionItem", element: "<div>", description: t("parts.item") },
            { name: "AccordionTrigger", element: "<h3> <button>", description: t("parts.trigger") },
            { name: "AccordionContent", element: "<div>", description: t("parts.content") },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "Accordion · type",
              type: '"single" | "multiple"',
              description: t("props.type"),
            },
            {
              name: "Accordion · collapsible",
              type: "boolean",
              default: "false",
              description: t("props.collapsible"),
            },
            {
              name: "Accordion · defaultValue",
              type: "string | string[]",
              description: t("props.defaultValue"),
            },
            { name: "Accordion · value", type: "string | string[]", description: t("props.value") },
            {
              name: "AccordionItem · disabled",
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
