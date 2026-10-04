import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const PACKAGES = [
  { value: "petik-teh", title: "Paket Petik Teh & Sarapan", info: "3 jam · Rp75.000" },
  { value: "tur-kebun", title: "Tur Kebun", info: "2 jam · Rp50.000" },
  { value: "glamping", title: "Glamping", info: "1 malam · Rp850.000" },
];

export default function FieldChoiceCard() {
  return (
    <RadioGroup defaultValue="petik-teh" className="w-full max-w-md">
      {PACKAGES.map((item) => (
        // A <FieldLabel> that wraps a whole <Field> becomes a clickable card.
        <FieldLabel key={item.value} htmlFor={`pkg-${item.value}`}>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>{item.title}</FieldTitle>
              <FieldDescription>{item.info}</FieldDescription>
            </FieldContent>
            <RadioGroupItem value={item.value} id={`pkg-${item.value}`} />
          </Field>
        </FieldLabel>
      ))}
    </RadioGroup>
  );
}
