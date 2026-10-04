import { Bubble, BubbleContent } from "@/components/ui/bubble";

const VARIANTS = [
  { variant: "default", text: "default — pesan milik pengguna" },
  { variant: "secondary", text: "secondary — balasan lawan bicara" },
  { variant: "muted", text: "muted — informasi pendukung" },
  { variant: "tinted", text: "tinted — jawaban asisten" },
  { variant: "outline", text: "outline — bingkai tipis" },
  { variant: "ghost", text: "ghost — teks biasa tanpa balon, untuk jawaban panjang" },
  { variant: "destructive", text: "destructive — pesan gagal terkirim" },
] as const;

export default function BubbleVariants() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      {VARIANTS.map(({ variant, text }) => (
        <Bubble key={variant} variant={variant}>
          <BubbleContent>{text}</BubbleContent>
        </Bubble>
      ))}
    </div>
  );
}
