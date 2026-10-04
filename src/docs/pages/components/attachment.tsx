/** Docs page: Attachment — texts in `locales/<lang>/attachment.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import AttachmentDemo from "../../examples/attachment/attachment-demo";
import attachmentDemoCode from "../../examples/attachment/attachment-demo?raw";
import AttachmentImages from "../../examples/attachment/attachment-images";
import attachmentImagesCode from "../../examples/attachment/attachment-images?raw";
import AttachmentSizes from "../../examples/attachment/attachment-sizes";
import attachmentSizesCode from "../../examples/attachment/attachment-sizes?raw";

const USAGE_CODE = `
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@mestakara/ui/attachment";

<Attachment state="done">
  <AttachmentMedia>
    <FileTextIcon />
  </AttachmentMedia>
  <AttachmentContent>
    <AttachmentTitle>e-tiket.pdf</AttachmentTitle>
    <AttachmentDescription>PDF · 248 KB</AttachmentDescription>
  </AttachmentContent>
</Attachment>
`;

export default function AttachmentPage() {
  const { t } = useTranslation("attachment");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.chat")}
        title="Attachment"
        description={t("description")}
      />

      <ComponentPreview example={AttachmentDemo} code={attachmentDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="attachment"
          exports={[
            "Attachment",
            "AttachmentContent",
            "AttachmentDescription",
            "AttachmentMedia",
            "AttachmentTitle",
          ]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("tip")}</p>
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="images"
          title={t("examples.images.title")}
          description={t("examples.images.description")}
          example={AttachmentImages}
          code={attachmentImagesCode}
        />
        <Example
          id="sizes"
          title={t("examples.sizes.title")}
          description={t("examples.sizes.description")}
          example={AttachmentSizes}
          code={attachmentSizesCode}
        />
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "Attachment", element: "<div>", description: t("parts.attachment") },
            { name: "AttachmentMedia", element: "<div>", description: t("parts.media") },
            { name: "AttachmentContent", element: "<div>", description: t("parts.content") },
            { name: "AttachmentTitle", element: "<span>", description: t("parts.title") },
            {
              name: "AttachmentDescription",
              element: "<span>",
              description: t("parts.description"),
            },
            { name: "AttachmentActions", element: "<div>", description: t("parts.actions") },
            { name: "AttachmentAction", element: "<button>", description: t("parts.action") },
            { name: "AttachmentTrigger", element: "<button>", description: t("parts.trigger") },
            { name: "AttachmentGroup", element: "<div>", description: t("parts.group") },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "Attachment · state",
              type: '"idle" | "uploading" | "processing" | "error" | "done"',
              default: '"done"',
              description: t("props.state"),
            },
            {
              name: "Attachment · size",
              type: '"md" | "sm" | "xs"',
              default: '"md"',
              description: t("props.size"),
            },
            {
              name: "Attachment · orientation",
              type: '"horizontal" | "vertical"',
              default: '"horizontal"',
              description: t("props.orientation"),
            },
            {
              name: "AttachmentMedia · variant",
              type: '"icon" | "image"',
              default: '"icon"',
              description: t("props.mediaVariant"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
