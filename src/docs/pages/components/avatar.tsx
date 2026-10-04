/** Docs page: Avatar — texts in `locales/<lang>/avatar.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import AvatarBadgeExample from "../../examples/avatar/avatar-badge";
import avatarBadgeCode from "../../examples/avatar/avatar-badge?raw";
import AvatarDemo from "../../examples/avatar/avatar-demo";
import avatarDemoCode from "../../examples/avatar/avatar-demo?raw";
import AvatarGroupExample from "../../examples/avatar/avatar-group";
import avatarGroupCode from "../../examples/avatar/avatar-group?raw";
import AvatarSizes from "../../examples/avatar/avatar-sizes";
import avatarSizesCode from "../../examples/avatar/avatar-sizes?raw";

const USAGE_CODE = `
import { Avatar, AvatarFallback, AvatarImage } from "@mestakara/ui/avatar";

<Avatar>
  <AvatarImage src="/foto.jpg" alt="Rina Sari" />
  <AvatarFallback>RS</AvatarFallback>
</Avatar>
`;

export default function AvatarPage() {
  const { t } = useTranslation("avatar");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.data-display")}
        title="Avatar"
        description={t("description")}
      />

      <ComponentPreview example={AvatarDemo} code={avatarDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="avatar" exports={["Avatar", "AvatarFallback", "AvatarImage"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="sizes"
          title={t("examples.sizes.title")}
          description={t("examples.sizes.description")}
          example={AvatarSizes}
          code={avatarSizesCode}
        />
        <Example
          id="badge"
          title={t("examples.badge.title")}
          description={t("examples.badge.description")}
          example={AvatarBadgeExample}
          code={avatarBadgeCode}
        />
        <Example
          id="group"
          title={t("examples.group.title")}
          description={t("examples.group.description")}
          example={AvatarGroupExample}
          code={avatarGroupCode}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "Avatar · size",
              type: '"sm" | "md" | "lg"',
              default: '"md"',
              description: t("props.size"),
            },
            { name: "AvatarImage · src", type: "string", description: t("props.src") },
            { name: "AvatarImage · alt", type: "string", description: t("props.alt") },
            {
              name: "AvatarFallback · delayMs",
              type: "number",
              description: t("props.delayMs"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
