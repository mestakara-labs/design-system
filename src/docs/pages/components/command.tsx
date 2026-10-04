/** Docs page: Command — texts in `locales/<lang>/command.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PartsTable } from "../../page-parts/parts-table";
import { Section } from "../../page-parts/section";
import CommandDemo from "../../examples/command/command-demo";
import commandDemoCode from "../../examples/command/command-demo?raw";
import CommandDialogExample from "../../examples/command/command-dialog";
import commandDialogCode from "../../examples/command/command-dialog?raw";

const USAGE_CODE = `
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@mestakara/ui/command";

<Command>
  <CommandInput placeholder="Cari…" />
  <CommandList>
    <CommandEmpty>Tidak ditemukan.</CommandEmpty>
    <CommandGroup heading="Destinasi">
      <CommandItem onSelect={() => navigate("/malabar")}>Malabar Tea Village</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
`;

export default function CommandPage() {
  const { t } = useTranslation("command");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.overlay")}
        title="Command"
        description={t("description")}
      />

      <ComponentPreview example={CommandDemo} code={commandDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="command"
          exports={[
            "Command",
            "CommandEmpty",
            "CommandGroup",
            "CommandInput",
            "CommandItem",
            "CommandList",
          ]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="dialog"
          title={t("examples.dialog.title")}
          description={t("examples.dialog.description")}
          example={CommandDialogExample}
          code={commandDialogCode}
        />
      </Section>

      <Section id="anatomy" title={tCommon("sections.anatomy")}>
        <PartsTable
          rows={[
            { name: "Command", element: "<div>", description: t("parts.command") },
            { name: "CommandDialog", element: "Dialog", description: t("parts.dialog") },
            { name: "CommandInput", element: "<input>", description: t("parts.input") },
            { name: "CommandList", element: "<div>", description: t("parts.list") },
            { name: "CommandEmpty", element: "<div>", description: t("parts.empty") },
            { name: "CommandGroup", element: "<div>", description: t("parts.group") },
            { name: "CommandItem", element: "<div>", description: t("parts.item") },
            { name: "CommandShortcut", element: "<span>", description: t("parts.shortcut") },
            { name: "CommandSeparator", element: "<div>", description: t("parts.separator") },
          ]}
        />
      </Section>
    </div>
  );
}
