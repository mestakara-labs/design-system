/**
 * Native Select
 * The browser's own <select>, styled like the other fields.
 * Choose this over <Select> for long simple lists and the best mobile experience.
 *
 * Design: DESIGN.md §5 "Text Field" — shared styles live in `src/lib/control-styles.ts`.
 * Based on: https://ui.shadcn.com/docs/components/native-select
 */
import { cn } from "cn";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

import { controlStyles } from "../../lib/control-styles";

type NativeSelectProps = Omit<React.ComponentProps<"select">, "size"> & {
  size?: "sm" | "md";
};

function NativeSelect({ className, size = "md", ...props }: NativeSelectProps) {
  return (
    <div data-slot="native-select-wrapper" className="group/native-select relative w-fit">
      <select
        data-slot="native-select"
        data-size={size}
        className={cn(
          controlStyles.base,
          controlStyles.focus,
          controlStyles.invalid,
          controlStyles.disabled,
          "cursor-pointer appearance-none pr-11",
          size === "md" ? "h-12 pl-4 typo-body-l" : "h-10 pl-3 typo-body-m",
          className,
        )}
        {...props}
      />
      <ChevronDownIcon
        aria-hidden="true"
        data-slot="native-select-icon"
        className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-fg-tertiary"
      />
    </div>
  );
}

function NativeSelectOption(props: React.ComponentProps<"option">) {
  return <option data-slot="native-select-option" {...props} />;
}

function NativeSelectOptGroup(props: React.ComponentProps<"optgroup">) {
  return <optgroup data-slot="native-select-optgroup" {...props} />;
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption, type NativeSelectProps };
