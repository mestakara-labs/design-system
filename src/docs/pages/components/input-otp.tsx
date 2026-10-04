/** Docs page: Input OTP — texts in `locales/<lang>/input-otp.json`. */
import { useTranslation } from "react-i18next";

import { CodeBlock } from "../../page-parts/code-block";
import { ComponentPreview } from "../../page-parts/component-preview";
import { Example } from "../../page-parts/example";
import { InstallSnippet } from "../../page-parts/install-snippet";
import { PageHeader } from "../../page-parts/page-header";
import { PropsTable } from "../../page-parts/props-table";
import { Section } from "../../page-parts/section";
import InputOTPDemo from "../../examples/input-otp/input-otp-demo";
import inputOtpDemoCode from "../../examples/input-otp/input-otp-demo?raw";
import InputOTPSeparatorExample from "../../examples/input-otp/input-otp-separator";
import inputOtpSeparatorCode from "../../examples/input-otp/input-otp-separator?raw";
import InputOTPStates from "../../examples/input-otp/input-otp-states";
import inputOtpStatesCode from "../../examples/input-otp/input-otp-states?raw";

const USAGE_CODE = `
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@mestakara/ui/input-otp";

<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    {/* … sampai index 5 */}
  </InputOTPGroup>
</InputOTP>
`;

export default function InputOTPPage() {
  const { t } = useTranslation("input-otp");
  const { t: tCommon } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        overline={tCommon("categories.form")}
        title="Input OTP"
        description={t("description")}
      />

      <ComponentPreview example={InputOTPDemo} code={inputOtpDemoCode} />

      <Section id="installation" title={tCommon("sections.installation")}>
        <InstallSnippet
          component="input-otp"
          exports={["InputOTP", "InputOTPGroup", "InputOTPSlot", "InputOTPSeparator"]}
        />
      </Section>

      <Section id="usage" title={tCommon("sections.usage")}>
        <CodeBlock code={USAGE_CODE} />
      </Section>

      <Section id="examples" title={tCommon("sections.examples")}>
        <Example
          id="separator"
          title={t("examples.separator.title")}
          description={t("examples.separator.description")}
          example={InputOTPSeparatorExample}
          code={inputOtpSeparatorCode}
        />
        <Example
          id="states"
          title={t("examples.states.title")}
          description={t("examples.states.description")}
          example={InputOTPStates}
          code={inputOtpStatesCode}
        />
      </Section>

      <Section id="api-reference" title={tCommon("sections.apiReference")}>
        <PropsTable
          rows={[
            { name: "InputOTP · maxLength", type: "number", description: t("props.maxLength") },
            { name: "InputOTP · value", type: "string", description: t("props.value") },
            {
              name: "InputOTP · onChange",
              type: "(value: string) => void",
              description: t("props.onChange"),
            },
            {
              name: "InputOTP · onComplete",
              type: "(value: string) => void",
              description: t("props.onComplete"),
            },
            { name: "InputOTP · pattern", type: "string", description: t("props.pattern") },
            {
              name: "InputOTP · disabled",
              type: "boolean",
              default: "false",
              description: t("props.disabled"),
            },
            { name: "InputOTPSlot · index", type: "number", description: t("props.index") },
          ]}
        />
      </Section>
    </div>
  );
}
