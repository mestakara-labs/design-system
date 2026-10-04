import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionMultiple() {
  return (
    // type="multiple" = several sections can be open together.
    <Accordion
      type="multiple"
      defaultValue={["included", "bring"]}
      className="w-full max-w-md rounded-lg border border-border bg-surface px-4"
    >
      <AccordionItem value="included">
        <AccordionTrigger>Termasuk dalam paket</AccordionTrigger>
        <AccordionContent>Tiket masuk, pemandu, dan segelas teh hijau.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="bring">
        <AccordionTrigger>Yang perlu dibawa</AccordionTrigger>
        <AccordionContent>Jaket tipis, sepatu nyaman, dan botol minum.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="parking">
        <AccordionTrigger>Parkir</AccordionTrigger>
        <AccordionContent>Tersedia untuk mobil, motor, dan bus pariwisata.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="soon" disabled>
        <AccordionTrigger>Penginapan (segera hadir)</AccordionTrigger>
        <AccordionContent>—</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
