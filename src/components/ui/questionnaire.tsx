/**
 * Questionnaire
 * A short form that asks one question at a time, e.g. a visitor satisfaction survey
 * or "help us plan your trip". Supports single choice, multiple choice and text answers,
 * required and skippable questions, and keyboard shortcuts (A/B/C or 1/2/3, Enter = next).
 *
 * Built on: @shadcn/react (unstyled questionnaire primitive)
 * Based on: https://ui.shadcn.com/docs/components/questionnaire
 *
 * Structure:
 *   <Questionnaire onSubmit={…}>                     ← a <form>
 *     <QuestionnaireProgress />                       ← "Pertanyaan 1 dari 3" + bar
 *     <QuestionnaireItem name="rating" required>     ← one question (only the active one is shown)
 *       <QuestionnaireTitle>…</QuestionnaireTitle>
 *       <QuestionnaireChoices>
 *         <QuestionnaireChoice value="5">
 *           <QuestionnaireChoiceInput /> <QuestionnaireChoiceLabel>Sangat puas</QuestionnaireChoiceLabel>
 *         </QuestionnaireChoice>
 *       </QuestionnaireChoices>
 *       <QuestionnaireError />
 *     </QuestionnaireItem>
 *     <QuestionnaireActions>
 *       <QuestionnairePrevious /> <QuestionnaireSkip /> <QuestionnaireNext /> <QuestionnaireSubmit />
 *     </QuestionnaireActions>
 *   </Questionnaire>
 *
 * The buttons hide themselves when they don't apply (no "Sebelumnya" on the first question …).
 */
import { Questionnaire as QuestionnairePrimitive } from "@shadcn/react/questionnaire";
import { cn } from "cn";
import * as React from "react";

import { controlStyles } from "../../lib/control-styles";

import { Button } from "./button";

function Questionnaire({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Root>) {
  return (
    <QuestionnairePrimitive.Root
      data-slot="questionnaire"
      className={cn("flex w-full flex-col gap-6", className)}
      {...props}
    />
  );
}

/** "Pertanyaan 2 dari 5" with a progress bar. Pass `label` to change the text. */
function QuestionnaireProgress({
  className,
  label = (current, total) => `Pertanyaan ${current} dari ${total}`,
}: {
  className?: string;
  label?: (current: number, total: number) => string;
}) {
  return (
    <QuestionnairePrimitive.Progress
      render={(props, { current, total }) => (
        <div
          {...(props as React.ComponentProps<"div">)}
          data-slot="questionnaire-progress"
          aria-label={label(current, total)}
          aria-valuetext={label(current, total)}
          className={cn("flex flex-col gap-2", className)}
        >
          <span className="typo-label-s text-fg-secondary">{label(current, total)}</span>
          <span className="h-1.5 overflow-hidden rounded-full bg-muted">
            <span
              className="block h-full rounded-full bg-primary transition-[width] duration-300"
              style={{ width: total ? `${(current / total) * 100}%` : 0 }}
            />
          </span>
        </div>
      )}
    />
  );
}

/** One question. Only the active question is visible. */
// Lets <QuestionnaireError> pick its default text: required questions cannot be skipped.
const QuestionnaireRequiredContext = React.createContext(false);

function QuestionnaireItem({
  className,
  required = false,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Item>) {
  return (
    <QuestionnaireRequiredContext.Provider value={required}>
      <QuestionnairePrimitive.Item
        data-slot="questionnaire-item"
        required={required}
        className={cn("m-0 flex min-w-0 flex-col gap-4 border-0 p-0 outline-none", className)}
        {...props}
      />
    </QuestionnaireRequiredContext.Provider>
  );
}

/** The question (a <legend>). */
function QuestionnaireTitle({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Title>) {
  return (
    <QuestionnairePrimitive.Title
      data-slot="questionnaire-title"
      className={cn("mb-3 typo-h3 text-fg-heading", className)}
      {...props}
    />
  );
}

function QuestionnaireDescription({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Description>) {
  return (
    <QuestionnairePrimitive.Description
      data-slot="questionnaire-description"
      className={cn("typo-body-m text-fg-secondary", className)}
      {...props}
    />
  );
}

/** List of answer choices. Add `multiple` on the item for checkboxes instead of radios. */
function QuestionnaireChoices({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Choices>) {
  return (
    <QuestionnairePrimitive.Choices
      data-slot="questionnaire-choices"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

/** One answer: a card with a radio/checkbox, the label, and its shortcut key. */
function QuestionnaireChoice({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Choice>) {
  return (
    <QuestionnairePrimitive.Choice
      data-slot="questionnaire-choice"
      className={cn(
        "flex cursor-pointer items-center gap-3 rounded-md border border-border bg-surface px-3 py-2.5 typo-body-m text-fg-primary transition-colors",
        "hover:border-border-strong has-focus-visible:outline-2 has-focus-visible:outline-focus",
        "has-checked:border-primary has-checked:bg-brand-subtle",
        "has-disabled:cursor-not-allowed has-disabled:bg-muted has-disabled:text-fg-disabled",
        "has-aria-invalid:border-danger",
        className,
      )}
      {...props}
    />
  );
}

/** The native radio/checkbox, colored with the brand green. */
function QuestionnaireChoiceInput({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.ChoiceInput>) {
  return (
    <QuestionnairePrimitive.ChoiceInput
      data-slot="questionnaire-choice-input"
      className={cn("size-4 shrink-0 cursor-[inherit] accent-primary outline-none", className)}
      {...props}
    />
  );
}

function QuestionnaireChoiceLabel({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.ChoiceLabel>) {
  return (
    <QuestionnairePrimitive.ChoiceLabel
      data-slot="questionnaire-choice-label"
      className={cn("min-w-0 flex-1", className)}
      {...props}
    />
  );
}

/** The key that picks this answer (A, B, C … or 1, 2, 3 …). Needs `shortcuts` on <Questionnaire>. */
function QuestionnaireChoiceShortcut({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.ChoiceShortcut>) {
  return (
    <QuestionnairePrimitive.ChoiceShortcut
      data-slot="questionnaire-choice-shortcut"
      className={cn(
        "inline-flex h-5 min-w-5 items-center justify-center rounded-xs border border-border bg-subtle px-1 typo-label-s text-fg-secondary",
        className,
      )}
      {...props}
    />
  );
}

/** Text answer (looks like <Input>). */
function QuestionnaireInput({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Input>) {
  return (
    <QuestionnairePrimitive.Input
      data-slot="questionnaire-input"
      className={cn(
        controlStyles.base,
        controlStyles.focus,
        controlStyles.invalid,
        controlStyles.disabled,
        "h-9 px-3 typo-field",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Shown when the user tries to continue without answering.
 * An optional question must be answered or skipped, so its default text mentions "Lewati".
 */
function QuestionnaireError({
  className,
  children,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Error>) {
  const required = React.useContext(QuestionnaireRequiredContext);
  const defaultText = required
    ? "Pilih atau isi jawaban untuk melanjutkan."
    : "Jawab pertanyaan ini atau pilih “Lewati”.";

  return (
    <QuestionnairePrimitive.Error
      data-slot="questionnaire-error"
      className={cn("typo-body-s text-fg-danger", className)}
      {...props}
    >
      {children ?? defaultText}
    </QuestionnairePrimitive.Error>
  );
}

/** Row with the navigation buttons. */
function QuestionnaireActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="questionnaire-actions"
      className={cn("flex flex-wrap items-center justify-end gap-2", className)}
      {...props}
    />
  );
}

/** Goes back one question. Hidden on the first question. */
function QuestionnairePrevious({
  className,
  children = "Sebelumnya",
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Previous>) {
  return (
    <QuestionnairePrimitive.Previous
      data-slot="questionnaire-previous"
      // mr-auto pushes it to the left of the row.
      className={cn("mr-auto", className)}
      render={<Button variant="ghost" />}
      {...props}
    >
      {children}
    </QuestionnairePrimitive.Previous>
  );
}

/** Skips the question. Hidden when the question is `required`. */
function QuestionnaireSkip({
  children = "Lewati",
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Skip>) {
  return (
    <QuestionnairePrimitive.Skip
      data-slot="questionnaire-skip"
      render={<Button variant="outline" />}
      {...props}
    >
      {children}
    </QuestionnairePrimitive.Skip>
  );
}

/** Goes to the next question (also Enter). Hidden on the last question. */
function QuestionnaireNext({
  children = "Berikutnya",
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Next>) {
  return (
    <QuestionnairePrimitive.Next data-slot="questionnaire-next" render={<Button />} {...props}>
      {children}
    </QuestionnairePrimitive.Next>
  );
}

/** Sends the form. Only shown on the last question. */
function QuestionnaireSubmit({
  children = "Kirim",
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Submit>) {
  return (
    <QuestionnairePrimitive.Submit data-slot="questionnaire-submit" render={<Button />} {...props}>
      {children}
    </QuestionnairePrimitive.Submit>
  );
}

export {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceInput,
  QuestionnaireChoiceLabel,
  QuestionnaireChoices,
  QuestionnaireChoiceShortcut,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
};
