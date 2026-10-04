/** Docs page: Badge — texts in `locales/<lang>/badge.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import BadgeAsLink from "../../examples/badge/badge-as-link";
import badgeAsLinkCode from "../../examples/badge/badge-as-link?raw";
import BadgeDemo from "../../examples/badge/badge-demo";
import badgeDemoCode from "../../examples/badge/badge-demo?raw";
import BadgeVariants from "../../examples/badge/badge-variants";
import badgeVariantsCode from "../../examples/badge/badge-variants?raw";
import BadgeWithoutDot from "../../examples/badge/badge-without-dot";
import badgeWithoutDotCode from "../../examples/badge/badge-without-dot?raw";

const VARIANTS = [
  "success",
  "warning",
  "danger",
  "info",
  "neutral",
  "brand",
  "premium",
  "outline",
] as const;

const USAGE_CODE = `
import { Badge } from "@mestakara/ui/badge";

<Badge variant="success">Lunas</Badge>
`;

export default function BadgePage() {
  const { t } = useTranslation("badge");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.data-display")}
        title="Badge"
        description={t("description")}
      />

      <ComponentPreview example={BadgeDemo} code={badgeDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="badge" exports={["Badge"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <ul className="list-disc pl-5 typo-body-m text-fg-secondary">
          <li>{t("guidelines.text")}</li>
          <li>{t("guidelines.contrast")}</li>
        </ul>
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="variants"
          title={t("examples.variants.title")}
          description={t("examples.variants.description")}
          example={BadgeVariants}
          code={badgeVariantsCode}
        />
        <Example
          id="without-dot"
          title={t("examples.withoutDot.title")}
          description={t("examples.withoutDot.description")}
          example={BadgeWithoutDot}
          code={badgeWithoutDotCode}
        />
        <Example
          id="as-link"
          title={t("examples.asLink.title")}
          description={t("examples.asLink.description")}
          example={BadgeAsLink}
          code={badgeAsLinkCode}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "variant",
              type: VARIANTS.map((variant) => `"${variant}"`).join(" | "),
              default: '"neutral"',
              description: t("props.variant"),
            },
            { name: "dot", type: "boolean", default: "true", description: t("props.dot") },
            { name: "asChild", type: "boolean", default: "false", description: t("props.asChild") },
          ]}
        />
      </Section>
    </div>
  );
}
