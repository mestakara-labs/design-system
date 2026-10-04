/** Docs page: Bubble — texts in `locales/<lang>/bubble.json`. */
import { useTranslation } from "react-i18next";

import { Bubble, BubbleContent } from "@/components/ui/bubble";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import { StateMatrix } from "../../page-parts/state-matrix";
import BubbleActions from "../../examples/bubble/bubble-actions";
import bubbleActionsCode from "../../examples/bubble/bubble-actions?raw";
import BubbleDemo from "../../examples/bubble/bubble-demo";
import bubbleDemoCode from "../../examples/bubble/bubble-demo?raw";
import BubbleVariants from "../../examples/bubble/bubble-variants";
import bubbleVariantsCode from "../../examples/bubble/bubble-variants?raw";

/** Matrix rows: clickable bubbles (BubbleContent rendered as a button). */
const ROWS = ["default", "secondary", "tinted", "outline"] as const;

const USAGE_CODE = `
import { Bubble, BubbleContent } from "@mestakara/ui/bubble";

<Bubble variant="secondary">
  <BubbleContent>Halo! Ada yang bisa kami bantu?</BubbleContent>
</Bubble>
<Bubble align="end">
  <BubbleContent>Apakah tiket bisa dijadwalkan ulang?</BubbleContent>
</Bubble>
`;

export default function BubblePage() {
  const { t } = useTranslation("bubble");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.chat")}
        title="Bubble"
        description={t("description")}
      />

      <ComponentPreview example={BubbleDemo} code={bubbleDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="bubble" exports={["Bubble", "BubbleContent"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="variants"
          title={t("examples.variants.title")}
          description={t("examples.variants.description")}
          example={BubbleVariants}
          code={bubbleVariantsCode}
        />
        <Example
          id="actions"
          title={t("examples.actions.title")}
          description={t("examples.actions.description")}
          example={BubbleActions}
          code={bubbleActionsCode}
        />
      </Section>

      <Section
        id="states"
        title={tCommon("sections.states")}
        description={tCommon("sections.statesDescription")}
      >
        <StateMatrix rows={ROWS} states={["default", "hover", "focus"]}>
          {(_state, row) => (
            <Bubble variant={row} className="max-w-full">
              <BubbleContent asChild>
                <button type="button">Jam buka</button>
              </BubbleContent>
            </Bubble>
          )}
        </StateMatrix>
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "BubbleGroup", element: "<div>", description: t("parts.group") },
            { name: "Bubble", element: "<div>", description: t("parts.bubble") },
            { name: "BubbleContent", element: "<div>", description: t("parts.content") },
            { name: "BubbleReactions", element: "<div>", description: t("parts.reactions") },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "Bubble · variant",
              type: '"default" | "secondary" | "muted" | "tinted" | "outline" | "ghost" | "destructive"',
              default: '"default"',
              description: t("props.variant"),
            },
            {
              name: "Bubble · align",
              type: '"start" | "end"',
              default: '"start"',
              description: t("props.align"),
            },
            {
              name: "BubbleContent · asChild",
              type: "boolean",
              default: "false",
              description: t("props.asChild"),
            },
            {
              name: "BubbleReactions · side",
              type: '"top" | "bottom"',
              default: '"bottom"',
              description: t("props.side"),
            },
            {
              name: "BubbleReactions · align",
              type: '"start" | "end"',
              default: '"end"',
              description: t("props.reactionsAlign"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
