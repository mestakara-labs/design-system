import {
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
} from "@/components/ui/questionnaire";
import { toast } from "@/components/ui/sonner";

const RATINGS = [
  { value: "5", label: "Sangat puas" },
  { value: "4", label: "Puas" },
  { value: "3", label: "Biasa saja" },
  { value: "2", label: "Kurang puas" },
];

const FAVORITES = [
  { value: "tour", label: "Tur kebun teh" },
  { value: "food", label: "Kuliner" },
  { value: "view", label: "Pemandangan" },
  { value: "guide", label: "Pemandu" },
];

export default function QuestionnaireDemo() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const answers = new FormData(event.currentTarget);
    toast.success(`Terima kasih! Nilai Anda: ${answers.get("rating")}`);
  }

  return (
    // shortcuts="letters": press A, B, C … to pick an answer, Enter to continue.
    <Questionnaire shortcuts="letters" onSubmit={handleSubmit} className="max-w-md">
      <QuestionnaireProgress />

      {/* required = cannot be skipped */}
      <QuestionnaireItem name="rating" required>
        <QuestionnaireTitle>Seberapa puas Anda dengan kunjungan hari ini?</QuestionnaireTitle>
        <QuestionnaireChoices>
          {RATINGS.map((choice) => (
            <QuestionnaireChoice key={choice.value} value={choice.value}>
              <QuestionnaireChoiceInput />
              <QuestionnaireChoiceLabel>{choice.label}</QuestionnaireChoiceLabel>
              <QuestionnaireChoiceShortcut />
            </QuestionnaireChoice>
          ))}
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      {/* multiple = checkboxes, pick several */}
      <QuestionnaireItem name="favorite" multiple>
        <QuestionnaireTitle>Apa yang paling Anda sukai?</QuestionnaireTitle>
        <QuestionnaireDescription>Boleh pilih lebih dari satu.</QuestionnaireDescription>
        <QuestionnaireChoices>
          {FAVORITES.map((choice) => (
            <QuestionnaireChoice key={choice.value} value={choice.value}>
              <QuestionnaireChoiceInput />
              <QuestionnaireChoiceLabel>{choice.label}</QuestionnaireChoiceLabel>
              <QuestionnaireChoiceShortcut />
            </QuestionnaireChoice>
          ))}
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem name="suggestion">
        <QuestionnaireTitle>Ada saran untuk kami?</QuestionnaireTitle>
        <QuestionnaireInput placeholder="Tulis saran Anda" aria-label="Saran" />
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSkip />
        <QuestionnaireNext />
        <QuestionnaireSubmit />
      </QuestionnaireActions>
    </Questionnaire>
  );
}
