/**
 * Docs page: Date Picker — texts in `locales/<lang>/date-picker.json`.
 * There is no DatePicker component: it is a pattern built from Popover + Calendar + Button.
 */
import { useTranslation } from "react-i18next";

import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { Section } from "../../page-parts/section";
import DatePickerDemo from "../../examples/date-picker/date-picker-demo";
import datePickerDemoCode from "../../examples/date-picker/date-picker-demo?raw";
import DatePickerRange from "../../examples/date-picker/date-picker-range";
import datePickerRangeCode from "../../examples/date-picker/date-picker-range?raw";
import DatePickerWithField from "../../examples/date-picker/date-picker-with-field";
import datePickerWithFieldCode from "../../examples/date-picker/date-picker-with-field?raw";

export default function DatePickerPage() {
  const { t } = useTranslation("date-picker");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.form")}
        title="Date Picker"
        description={t("description")}
      />

      <ComponentPreview example={DatePickerDemo} code={datePickerDemoCode} />

      <Section
        id="installation"
        title={tCommon("sections.installation")}
        description={t("installation")}
      >
        <InstallSnippet
          component="popover"
          exports={["Popover", "PopoverContent", "PopoverTrigger"]}
        />
        <InstallSnippet component="calendar" exports={["Calendar"]} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="range"
          title={t("examples.range.title")}
          description={t("examples.range.description")}
          example={DatePickerRange}
          code={datePickerRangeCode}
        />
        <Example
          id="with-field"
          title={t("examples.withField.title")}
          description={t("examples.withField.description")}
          example={DatePickerWithField}
          code={datePickerWithFieldCode}
        />
      </Section>
    </div>
  );
}
