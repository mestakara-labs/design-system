/** Docs page: Slider — texts in `locales/<lang>/slider.json`. */
import { useTranslation } from "react-i18next";

import { Slider } from "@/components/ui/slider";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import { StateMatrix } from "../../page-parts/state-matrix";
import SliderDemo from "../../examples/slider/slider-demo";
import sliderDemoCode from "../../examples/slider/slider-demo?raw";
import SliderDisabled from "../../examples/slider/slider-disabled";
import sliderDisabledCode from "../../examples/slider/slider-disabled?raw";
import SliderRange from "../../examples/slider/slider-range";
import sliderRangeCode from "../../examples/slider/slider-range?raw";

const USAGE_CODE = `
import { Slider } from "@mestakara/ui/slider";

<Slider defaultValue={[40]} max={100} step={1} />
`;

export default function SliderPage() {
  const { t } = useTranslation("slider");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.form")}
        title="Slider"
        description={t("description")}
      />

      <ComponentPreview example={SliderDemo} code={sliderDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="slider" exports={["Slider"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="range"
          title={t("examples.range.title")}
          description={t("examples.range.description")}
          example={SliderRange}
          code={sliderRangeCode}
        />
        <Example
          id="disabled"
          title={t("examples.disabled.title")}
          description={t("examples.disabled.description")}
          example={SliderDisabled}
          code={sliderDisabledCode}
        />
      </Section>

      <Section
        id="states"
        title={tCommon("sections.states")}
        description={tCommon("sections.statesDescription")}
      >
        <StateMatrix rows={["slider"]} states={["default", "hover", "focus", "disabled"]}>
          {(state) => (
            <Slider
              defaultValue={[50]}
              aria-label={state}
              disabled={state === "disabled"}
              className="w-full"
            />
          )}
        </StateMatrix>
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            { name: "value", type: "number[]", description: t("props.value") },
            { name: "defaultValue", type: "number[]", description: t("props.defaultValue") },
            {
              name: "onValueChange",
              type: "(value: number[]) => void",
              description: t("props.onValueChange"),
            },
            { name: "min", type: "number", default: "0", description: t("props.min") },
            { name: "max", type: "number", default: "100", description: t("props.max") },
            { name: "step", type: "number", default: "1", description: t("props.step") },
            {
              name: "orientation",
              type: '"horizontal" | "vertical"',
              default: '"horizontal"',
              description: t("props.orientation"),
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
