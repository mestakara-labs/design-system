/** Docs page: Carousel — texts in `locales/<lang>/carousel.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import CarouselDemo from "../../examples/carousel/carousel-demo";
import carouselDemoCode from "../../examples/carousel/carousel-demo?raw";
import CarouselDots from "../../examples/carousel/carousel-dots";
import carouselDotsCode from "../../examples/carousel/carousel-dots?raw";
import CarouselMultiple from "../../examples/carousel/carousel-multiple";
import carouselMultipleCode from "../../examples/carousel/carousel-multiple?raw";

const USAGE_CODE = `
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@mestakara/ui/carousel";

<Carousel>
  <CarouselContent>
    <CarouselItem>…</CarouselItem>
    <CarouselItem>…</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
`;

export default function CarouselPage() {
  const { t } = useTranslation("carousel");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.data-display")}
        title="Carousel"
        description={t("description")}
      />

      <ComponentPreview example={CarouselDemo} code={carouselDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="carousel"
          exports={[
            "Carousel",
            "CarouselContent",
            "CarouselItem",
            "CarouselNext",
            "CarouselPrevious",
          ]}
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
          example={CarouselMultiple}
          code={carouselMultipleCode}
        />
        <Example
          id="dots"
          title={t("examples.dots.title")}
          description={t("examples.dots.description")}
          example={CarouselDots}
          code={carouselDotsCode}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            { name: "opts", type: "EmblaOptionsType", description: t("props.opts") },
            { name: "plugins", type: "EmblaPluginType[]", description: t("props.plugins") },
            {
              name: "orientation",
              type: '"horizontal" | "vertical"',
              default: '"horizontal"',
              description: t("props.orientation"),
            },
            {
              name: "setApi",
              type: "(api: CarouselApi) => void",
              description: t("props.setApi"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
