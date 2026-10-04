/**
 * Field
 * Building blocks for accessible form layouts: label + control + description + error.
 *
 *   <Field>
 *     <FieldLabel htmlFor="email">Email</FieldLabel>
 *     <Input id="email" />
 *     <FieldDescription>Kami kirim e-tiket ke email ini.</FieldDescription>
 *   </Field>
 *
 * Design: DESIGN.md §5 "Text Field" — label Label/M above, helper text Body/S,
 *         error text in red that explains how to fix it.
 * Based on: https://ui.shadcn.com/docs/components/field
 */
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { useMemo } from "react";

import { Label } from "./label";
import { Separator } from "./separator";

/** Groups related fields under a <FieldLegend>. Renders a <fieldset>. */
function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className,
      )}
      {...props}
    />
  );
}

/** Title of a <FieldSet>. `variant="label"` makes it look like a normal field label. */
function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        "mb-3 text-fg-primary",
        "data-[variant=legend]:typo-h3",
        "data-[variant=label]:typo-label-m",
        className,
      )}
      {...props}
    />
  );
}

/** Stacks several <Field>s with consistent spacing. */
function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "group/field-group @container/field-group flex w-full flex-col gap-6 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        className,
      )}
      {...props}
    />
  );
}

const fieldVariants = cva("group/field flex w-full gap-2", {
  variants: {
    orientation: {
      // Label above the control (default).
      vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
      // Label next to the control, e.g. for a checkbox or switch.
      horizontal: [
        "flex-row items-center gap-3",
        "[&>[data-slot=field-label]]:flex-auto",
        "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-0.5",
      ],
      // Vertical on small containers, horizontal on wider ones.
      responsive: [
        "flex-col @md/field-group:flex-row @md/field-group:items-center [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto",
        "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
        "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-0.5",
      ],
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

/** One form field. Add `data-invalid` when it has an error, `data-disabled` when disabled. */
function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  );
}

/** Wraps label + description when they sit next to a checkbox, radio or switch. */
function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn("group/field-content flex flex-1 flex-col gap-1", className)}
      {...props}
    />
  );
}

/**
 * Label of a field. When it wraps a whole <Field>, it becomes a selectable "choice card"
 * that turns green when its checkbox/radio is checked.
 */
function FieldLabel({ className, ...props }: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "group/field-label peer/field-label flex w-fit gap-2 group-data-[disabled=true]/field:text-fg-disabled",
        // Choice card
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border has-[>[data-slot=field]]:border-border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:border-primary has-data-[state=checked]:bg-brand-subtle",
        className,
      )}
      {...props}
    />
  );
}

/** Like <FieldLabel>, but not linked to a control (plain text title). */
function FieldTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        "flex w-fit items-center gap-2 typo-label-m text-fg-primary group-data-[disabled=true]/field:text-fg-disabled",
        className,
      )}
      {...props}
    />
  );
}

/** Helper text under (or next to) the control. */
function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "typo-body-s text-fg-secondary group-has-[[data-orientation=horizontal]]/field:text-balance",
        "[&>a]:text-fg-link [&>a]:underline [&>a]:underline-offset-4",
        className,
      )}
      {...props}
    />
  );
}

/** A line between fields, with optional text in the middle (e.g. "atau"). */
function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & { children?: React.ReactNode }) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn("relative -my-2 h-5 typo-body-s", className)}
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          data-slot="field-separator-content"
          className="relative mx-auto block w-fit bg-surface px-2 text-fg-tertiary"
        >
          {children}
        </span>
      )}
    </div>
  );
}

/**
 * Error message in red. Pass `children`, or `errors` (e.g. from react-hook-form / zod):
 * one error shows as text, several show as a list.
 */
function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>;
}) {
  const content = useMemo(() => {
    if (children) return children;
    if (!errors?.length) return null;

    // Remove duplicate messages.
    const uniqueErrors = [...new Map(errors.map((error) => [error?.message, error])).values()];
    if (uniqueErrors.length === 1) return uniqueErrors[0]?.message;

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {uniqueErrors.map((error, index) => error?.message && <li key={index}>{error.message}</li>)}
      </ul>
    );
  }, [children, errors]);

  if (!content) return null;

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("typo-body-s text-danger", className)}
      {...props}
    >
      {content}
    </div>
  );
}

export {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
};
