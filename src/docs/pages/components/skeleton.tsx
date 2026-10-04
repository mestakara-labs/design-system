/** Docs page: Skeleton — texts in `locales/<lang>/skeleton.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { Section } from "../../page-parts/section";
import SkeletonCard from "../../examples/skeleton/skeleton-card";
import skeletonCardCode from "../../examples/skeleton/skeleton-card?raw";
import SkeletonDemo from "../../examples/skeleton/skeleton-demo";
import skeletonDemoCode from "../../examples/skeleton/skeleton-demo?raw";

const USAGE_CODE = `
import { Skeleton } from "@mestakara/ui/skeleton";

<Skeleton className="h-4 w-48" />
`;

export default function SkeletonPage() {
  const { t } = useTranslation("skeleton");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.data-display")}
        title="Skeleton"
        description={t("description")}
      />

      <ComponentPreview example={SkeletonDemo} code={skeletonDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="skeleton" exports={["Skeleton"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("tip")}</p>
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="card"
          title={t("examples.card.title")}
          description={t("examples.card.description")}
          example={SkeletonCard}
          code={skeletonCardCode}
        />
      </Section>
    </div>
  );
}
