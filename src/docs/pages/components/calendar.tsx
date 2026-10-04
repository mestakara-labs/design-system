/** Docs page: Calendar — texts in `locales/<lang>/calendar.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import CalendarDemo from "../../examples/calendar/calendar-demo";
import calendarDemoCode from "../../examples/calendar/calendar-demo?raw";
import CalendarDisabledDays from "../../examples/calendar/calendar-disabled-days";
import calendarDisabledDaysCode from "../../examples/calendar/calendar-disabled-days?raw";
import CalendarDropdown from "../../examples/calendar/calendar-dropdown";
import calendarDropdownCode from "../../examples/calendar/calendar-dropdown?raw";
import CalendarRange from "../../examples/calendar/calendar-range";
import calendarRangeCode from "../../examples/calendar/calendar-range?raw";

const USAGE_CODE = `
import { Calendar } from "@mestakara/ui/calendar";

const [date, setDate] = useState<Date>();

<Calendar mode="single" selected={date} onSelect={setDate} />
`;

export default function CalendarPage() {
  const { t } = useTranslation("calendar");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.form")}
        title="Calendar"
        description={t("description")}
      />

      <ComponentPreview example={CalendarDemo} code={calendarDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet component="calendar" exports={["Calendar"]} />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
        <p className="typo-body-m text-fg-secondary">{t("locale")}</p>
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="range"
          title={t("examples.range.title")}
          description={t("examples.range.description")}
          example={CalendarRange}
          code={calendarRangeCode}
        />
        <Example
          id="disabled-days"
          title={t("examples.disabledDays.title")}
          description={t("examples.disabledDays.description")}
          example={CalendarDisabledDays}
          code={calendarDisabledDaysCode}
        />
        <Example
          id="dropdown"
          title={t("examples.dropdown.title")}
          description={t("examples.dropdown.description")}
          example={CalendarDropdown}
          code={calendarDropdownCode}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            {
              name: "mode",
              type: '"single" | "multiple" | "range"',
              description: t("props.mode"),
            },
            {
              name: "selected",
              type: "Date | Date[] | DateRange",
              description: t("props.selected"),
            },
            { name: "onSelect", type: "(value) => void", description: t("props.onSelect") },
            { name: "disabled", type: "Matcher | Matcher[]", description: t("props.disabled") },
            {
              name: "numberOfMonths",
              type: "number",
              default: "1",
              description: t("props.numberOfMonths"),
            },
            {
              name: "captionLayout",
              type: '"label" | "dropdown" | "dropdown-months" | "dropdown-years"',
              default: '"label"',
              description: t("props.captionLayout"),
            },
            { name: "locale", type: "Locale", default: "id", description: t("props.localeProp") },
          ]}
        />
        <p className="typo-body-m text-fg-secondary">{t("props.dayPicker")}</p>
      </Section>
    </div>
  );
}
