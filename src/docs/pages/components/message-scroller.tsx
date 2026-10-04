/** Docs page: Message Scroller — texts in `locales/<lang>/message-scroller.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import MessageScrollerDemo from "../../examples/message-scroller/message-scroller-demo";
import messageScrollerDemoCode from "../../examples/message-scroller/message-scroller-demo?raw";

const USAGE_CODE = `
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@mestakara/ui/message-scroller";

<div className="h-[600px]">
  <MessageScrollerProvider>
    <MessageScroller>
      <MessageScrollerViewport>
        <MessageScrollerContent>
          {messages.map((message) => (
            <MessageScrollerItem key={message.id} messageId={message.id}>
              …
            </MessageScrollerItem>
          ))}
        </MessageScrollerContent>
      </MessageScrollerViewport>
      <MessageScrollerButton />
    </MessageScroller>
  </MessageScrollerProvider>
</div>
`;

const HOOK_CODE = `
import { useMessageScroller } from "@mestakara/ui/message-scroller";

const { scrollToEnd, scrollToMessage } = useMessageScroller();
scrollToEnd({ behavior: "smooth" });
`;

export default function MessageScrollerPage() {
  const { t } = useTranslation("message-scroller");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.chat")}
        title="Message Scroller"
        description={t("description")}
      />

      <ComponentPreview example={MessageScrollerDemo} code={messageScrollerDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="message-scroller"
          exports={[
            "MessageScroller",
            "MessageScrollerButton",
            "MessageScrollerContent",
            "MessageScrollerItem",
            "MessageScrollerProvider",
            "MessageScrollerViewport",
          ]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("tip")}</p>
        <CodeBlock code={HOOK_CODE} />
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "MessageScrollerProvider", element: "—", description: t("parts.provider") },
            { name: "MessageScroller", element: "<div>", description: t("parts.root") },
            { name: "MessageScrollerViewport", element: "<div>", description: t("parts.viewport") },
            { name: "MessageScrollerContent", element: "<div>", description: t("parts.content") },
            { name: "MessageScrollerItem", element: "<div>", description: t("parts.item") },
            { name: "MessageScrollerButton", element: "<button>", description: t("parts.button") },
            {
              name: "useMessageScroller · Scrollable · Visibility",
              element: "hook",
              description: t("parts.hooks"),
            },
          ]}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "Provider · autoScroll",
              type: "boolean",
              default: "true",
              description: t("props.autoScroll"),
            },
            {
              name: "Provider · defaultScrollPosition",
              type: '"start" | "end" | "last-anchor"',
              default: '"end"',
              description: t("props.defaultScrollPosition"),
            },
            { name: "Item · messageId", type: "string", description: t("props.messageId") },
            {
              name: "Item · scrollAnchor",
              type: "boolean",
              default: "false",
              description: t("props.scrollAnchor"),
            },
            {
              name: "Button · direction",
              type: '"start" | "end"',
              default: '"end"',
              description: t("props.direction"),
            },
            {
              name: "Button · label",
              type: "string",
              default: '"Ke pesan terbaru"',
              description: t("props.label"),
            },
          ]}
        />
      </Section>
    </div>
  );
}
