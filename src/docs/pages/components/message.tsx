/** Docs page: Message — texts in `locales/<lang>/message.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import MessageAssistant from "../../examples/message/message-assistant";
import messageAssistantCode from "../../examples/message/message-assistant?raw";
import MessageDemo from "../../examples/message/message-demo";
import messageDemoCode from "../../examples/message/message-demo?raw";

const USAGE_CODE = `
import { Bubble, BubbleContent } from "@mestakara/ui/bubble";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@mestakara/ui/message";

<Message>
  <MessageAvatar>…</MessageAvatar>
  <MessageContent>
    <MessageHeader>CS Gunung Mas</MessageHeader>
    <Bubble variant="secondary">
      <BubbleContent>Tiket Anda sudah aktif.</BubbleContent>
    </Bubble>
    <MessageFooter>09.41</MessageFooter>
  </MessageContent>
</Message>
`;

export default function MessagePage() {
  const { t } = useTranslation("message");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.chat")}
        title="Message"
        description={t("description")}
      />

      <ComponentPreview example={MessageDemo} code={messageDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="message"
          exports={["Message", "MessageAvatar", "MessageContent", "MessageFooter", "MessageHeader"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="assistant"
          title={t("examples.assistant.title")}
          description={t("examples.assistant.description")}
          example={MessageAssistant}
          code={messageAssistantCode}
        />
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "MessageGroup", element: "<div>", description: t("parts.group") },
            { name: "Message", element: "<div>", description: t("parts.message") },
            { name: "MessageAvatar", element: "<div>", description: t("parts.avatar") },
            { name: "MessageContent", element: "<div>", description: t("parts.content") },
            { name: "MessageHeader", element: "<div>", description: t("parts.header") },
            { name: "MessageFooter", element: "<div>", description: t("parts.footer") },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "Message · align",
              type: '"start" | "end"',
              default: '"start"',
              description: t("props.align"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
