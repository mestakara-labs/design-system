/**
 * Docs page: Button
 * Use this file as the template for every other component page.
 *
 * Texts:    src/docs/i18n/locales/<lang>/button.json
 * Examples: src/docs/examples/button/*.tsx (each one is shown live AND as code)
 */
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

import { CodeBlock } from "../../page-parts/code-block";
import { Example } from "../../page-parts/example";
import { ComponentPreview } from "../../page-parts/component-preview";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import { StateMatrix } from "../../page-parts/state-matrix";
import ButtonAsLink from "../../examples/button/button-as-link";
import buttonAsLinkCode from "../../examples/button/button-as-link?raw";
import ButtonDemo from "../../examples/button/button-demo";
import buttonDemoCode from "../../examples/button/button-demo?raw";
import ButtonIconOnly from "../../examples/button/button-icon-only";
import buttonIconOnlyCode from "../../examples/button/button-icon-only?raw";
import ButtonLoading from "../../examples/button/button-loading";
import buttonLoadingCode from "../../examples/button/button-loading?raw";
import ButtonSizes from "../../examples/button/button-sizes";
import buttonSizesCode from "../../examples/button/button-sizes?raw";
import ButtonVariants from "../../examples/button/button-variants";
import buttonVariantsCode from "../../examples/button/button-variants?raw";
import ButtonWithIcon from "../../examples/button/button-with-icon";
import buttonWithIconCode from "../../examples/button/button-with-icon?raw";

const VARIANTS = ["primary", "accent", "tonal", "outline", "ghost", "link", "destructive"] as const;

const USAGE_CODE = `
import { Button } from "@mestakara/ui/button";

export function BookingAction() {
  return <Button onClick={() => console.log("Pesan")}>Pesan Tiket</Button>;
}
`;

export default function ButtonPage() {
  const { t } = useTranslation("button");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.form")}
        title="Button"
        description={t("description")}
      />

      <ComponentPreview example={ButtonDemo} code={buttonDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="button" exports={["Button"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <ul className="list-disc pl-5 typo-body-m text-fg-secondary">
          <li>{t("guidelines.onePrimary")}</li>
          <li>{t("guidelines.shortVerbs")}</li>
          <li>{t("guidelines.accentText")}</li>
        </ul>
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="variants"
          title={t("examples.variants.title")}
          description={t("examples.variants.description")}
          example={ButtonVariants}
          code={buttonVariantsCode}
        />

        <Example
          id="sizes"
          title={t("examples.sizes.title")}
          description={t("examples.sizes.description")}
          example={ButtonSizes}
          code={buttonSizesCode}
        />

        <Example
          id="with-icon"
          title={t("examples.withIcon.title")}
          description={t("examples.withIcon.description")}
          example={ButtonWithIcon}
          code={buttonWithIconCode}
        />

        <Example
          id="icon-only"
          title={t("examples.iconOnly.title")}
          description={t("examples.iconOnly.description")}
          example={ButtonIconOnly}
          code={buttonIconOnlyCode}
        />

        <Example
          id="loading"
          title={t("examples.loading.title")}
          description={t("examples.loading.description")}
          example={ButtonLoading}
          code={buttonLoadingCode}
        />

        <Example
          id="as-link"
          title={t("examples.asLink.title")}
          description={t("examples.asLink.description")}
          example={ButtonAsLink}
          code={buttonAsLinkCode}
        />
      </Section>

      <Section
        id="states"
        title={tCommon("sections.states")}
        description={tCommon("sections.statesDescription")}
      >
        <StateMatrix rows={VARIANTS}>
          {(state, variant) => (
            <Button variant={variant} disabled={state === "disabled"}>
              Pesan
            </Button>
          )}
        </StateMatrix>
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "variant",
              type: VARIANTS.map((variant) => `"${variant}"`).join(" | "),
              default: '"primary"',
              description: t("props.variant"),
            },
            {
              name: "size",
              type: '"sm" | "md" | "lg" | "icon-sm" | "icon" | "icon-lg"',
              default: '"md"',
              description: t("props.size"),
            },
            {
              name: "asChild",
              type: "boolean",
              default: "false",
              description: t("props.asChild"),
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
