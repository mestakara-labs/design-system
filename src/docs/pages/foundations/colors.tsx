/**
 * Docs page: Foundations → Colors
 * Token lists mirror `src/styles/primitives.css` and `src/styles/semantic.css`.
 * Hex values are read from the CSS at runtime, so only the NAMES are listed here.
 */
import { useTranslation } from "react-i18next";

import { PageHeader } from "../../page-parts/page-header";
import { Section } from "../../page-parts/section";
import { readCssVariable } from "../../lib/read-css-variable";

const PRIMITIVE_SCALES = [
  { name: "green", shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: "orange", shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: "navy", shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: "forest", shades: [50, 100, 300, 500, 700, 800, 900] },
  { name: "gold", shades: [50, 100, 300, 500, 700, 900] },
  { name: "sky", shades: [100, 500, 700] },
  { name: "neutral", shades: [0, 25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: "red", shades: [50, 500, 700] },
];

/** `token` = CSS variable in semantic.css, `className` = the Tailwind class to use. */
const SEMANTIC_GROUPS = [
  {
    id: "background",
    tokens: [
      { token: "bg-canvas", className: "bg-canvas" },
      { token: "bg-surface", className: "bg-surface" },
      { token: "bg-subtle", className: "bg-subtle" },
      { token: "bg-muted", className: "bg-muted" },
      { token: "bg-brand", className: "bg-brand" },
      { token: "bg-brand-subtle", className: "bg-brand-subtle" },
      { token: "bg-inverse", className: "bg-inverse" },
      { token: "bg-accent-subtle", className: "bg-accent-subtle" },
    ],
  },
  {
    id: "action",
    tokens: [
      { token: "action-primary", className: "bg-primary" },
      { token: "action-primary-hover", className: "bg-primary-hover" },
      { token: "action-primary-pressed", className: "bg-primary-pressed" },
      { token: "action-secondary", className: "bg-secondary" },
      { token: "action-tertiary", className: "bg-tertiary" },
      { token: "action-tonal", className: "bg-tonal" },
      { token: "action-danger", className: "bg-danger" },
      { token: "action-disabled", className: "bg-disabled" },
    ],
  },
  {
    id: "text",
    tokens: [
      { token: "text-primary", className: "text-fg-primary" },
      { token: "text-secondary", className: "text-fg-secondary" },
      { token: "text-tertiary", className: "text-fg-tertiary" },
      { token: "text-disabled", className: "text-fg-disabled" },
      { token: "text-brand", className: "text-fg-brand" },
      { token: "text-heading", className: "text-fg-heading" },
      { token: "text-link", className: "text-fg-link" },
      { token: "text-on-brand", className: "text-fg-on-brand" },
      { token: "text-accent", className: "text-fg-accent" },
    ],
  },
  {
    id: "border",
    tokens: [
      { token: "border-default", className: "border-border" },
      { token: "border-strong", className: "border-border-strong" },
      { token: "border-focus", className: "border-focus" },
    ],
  },
  {
    id: "status",
    tokens: [
      { token: "status-success", className: "text-success" },
      { token: "status-success-bg", className: "bg-success-subtle" },
      { token: "status-warning", className: "text-warning" },
      { token: "status-warning-bg", className: "bg-warning-subtle" },
      { token: "status-danger", className: "text-danger" },
      { token: "status-danger-bg", className: "bg-danger-subtle" },
      { token: "status-info", className: "text-info" },
      { token: "status-info-bg", className: "bg-info-subtle" },
      { token: "status-success-text", className: "text-fg-success" },
      { token: "status-warning-text", className: "text-fg-warning" },
      { token: "status-danger-text", className: "text-fg-danger" },
      { token: "status-info-text", className: "text-fg-info" },
      { token: "accent-gold", className: "bg-premium" },
    ],
  },
] as const;

export default function ColorsPage() {
  const { t } = useTranslation("foundations");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("nav.foundations")}
        title={tCommon("nav.colors")}
        description={t("colors.description")}
      />

      <Section
        id="semantic"
        title={t("colors.semantic.title")}
        description={t("colors.semantic.description")}
      >
        {SEMANTIC_GROUPS.map((group) => (
          <Section key={group.id} level="h3" id={group.id} title={t(`colors.groups.${group.id}`)}>
            <div className="overflow-hidden rounded-md border border-border bg-surface">
              {group.tokens.map((item) => (
                <SemanticRow
                  key={item.token}
                  token={item.token}
                  className={item.className}
                  usage={t(`colors.usage.${item.token}`)}
                />
              ))}
            </div>
          </Section>
        ))}
      </Section>

      <Section
        id="primitives"
        title={t("colors.primitives.title")}
        description={t("colors.primitives.description")}
      >
        {PRIMITIVE_SCALES.map((scale) => (
          <div key={scale.name} className="flex flex-col gap-2">
            <p className="typo-label-m text-fg-primary capitalize">{scale.name}</p>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-6">
              {scale.shades.map((shade) => (
                <PrimitiveSwatch key={shade} name={`${scale.name}-${shade}`} />
              ))}
            </div>
          </div>
        ))}
      </Section>
    </div>
  );
}

function PrimitiveSwatch({ name }: { name: string }) {
  const value = readCssVariable(`--color-${name}`);

  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="h-14 rounded-sm border border-border"
        style={{ backgroundColor: `var(--color-${name})` }}
      />
      <div>
        <p className="typo-label-s text-fg-primary">{name}</p>
        <p className="font-mono text-[11px] text-fg-tertiary uppercase">{value}</p>
      </div>
    </div>
  );
}

type SemanticRowProps = {
  token: string;
  className: string;
  usage: string;
};

function SemanticRow({ token, className, usage }: SemanticRowProps) {
  const value = readCssVariable(`--${token}`);

  return (
    <div className="flex items-center gap-4 border-b border-border px-4 py-3 last:border-b-0">
      <div
        className="size-10 shrink-0 rounded-sm border border-border"
        style={{ backgroundColor: `var(--${token})` }}
      />
      <div className="min-w-0 flex-1">
        <p className="typo-label-m text-fg-primary">{token.replace("-", "/")}</p>
        <p className="typo-body-s text-fg-secondary">{usage}</p>
      </div>
      <div className="hidden text-right sm:block">
        <code className="block font-mono text-[12px] text-fg-link">{className}</code>
        <code className="block font-mono text-[11px] text-fg-tertiary uppercase">{value}</code>
      </div>
    </div>
  );
}
