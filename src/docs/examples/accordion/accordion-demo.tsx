import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = [
  {
    id: "hours",
    question: "Jam berapa kebun teh buka?",
    answer: "Setiap hari pukul 07.00–17.00 WIB, termasuk hari libur nasional.",
  },
  {
    id: "refund",
    question: "Apakah tiket bisa dibatalkan?",
    answer:
      "Bisa, paling lambat 24 jam sebelum jadwal kunjungan. Dana kembali dalam 3–5 hari kerja.",
  },
  {
    id: "kids",
    question: "Apakah anak-anak perlu tiket?",
    answer: "Anak di bawah 3 tahun gratis. Usia 3–12 tahun memakai tiket anak.",
  },
];

export default function AccordionDemo() {
  return (
    // type="single" + collapsible = one answer open at a time, and it can be closed again.
    <Accordion type="single" collapsible defaultValue="hours" className="w-full max-w-md">
      {FAQ.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
