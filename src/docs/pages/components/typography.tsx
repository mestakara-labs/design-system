/**
 * Docs page: Typography — texts in `locales/<lang>/typography.json`.
 * There is no Typography component: text is styled with the `typo-*` classes.
 */
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { PageHeader } from "../../page-parts/page-header";
import { Section } from "../../page-parts/section";
import TypographyBody from "../../examples/typography/typography-body";
import typographyBodyCode from "../../examples/typography/typography-body?raw";
import TypographyDemo from "../../examples/typography/typography-demo";
import typographyDemoCode from "../../examples/typography/typography-demo?raw";
import TypographyHeadings from "../../examples/typography/typography-headings";
import typographyHeadingsCode from "../../examples/typography/typography-headings?raw";
import TypographyListQuote from "../../examples/typography/typography-list-quote";
import typographyListQuoteCode from "../../examples/typography/typography-list-quote?raw";
import { foundationPath } from "../../paths";

export default function TypographyPage() {
  const { t } = useTranslation("typography");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.data-display")}
        title="Typography"
        description={t("description")}
      />

      <ComponentPreview example={TypographyDemo} code={typographyDemoCode} />

      <Section id="usage" title={tCommon("sections.usage")}>
        <p className="typo-body-m text-fg-secondary">
          {t("usage")}{" "}
          <Link
            to={foundationPath("typography")}
            className="text-fg-link underline underline-offset-4"
          >
            {tCommon("nav.foundations")} → {tCommon("nav.typography")}
          </Link>
        </p>
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="headings"
          title={t("examples.headings.title")}
          description={t("examples.headings.description")}
          example={TypographyHeadings}
          code={typographyHeadingsCode}
        />
        <Example
          id="body"
          title={t("examples.body.title")}
          description={t("examples.body.description")}
          example={TypographyBody}
          code={typographyBodyCode}
        />
        <Example
          id="list-quote"
          title={t("examples.listQuote.title")}
          description={t("examples.listQuote.description")}
          example={TypographyListQuote}
          code={typographyListQuoteCode}
        />
      </Section>
    </div>
  );
}
