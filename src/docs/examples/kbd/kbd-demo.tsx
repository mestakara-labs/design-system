import { Kbd, KbdGroup } from "@/components/ui/kbd";

export default function KbdDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span className="typo-body-s text-fg-tertiary">+</span>
        <Kbd>K</Kbd>
      </KbdGroup>
      <p className="typo-body-m text-fg-secondary">
        Tekan <Kbd>Enter</Kbd> untuk mencari, <Kbd>Esc</Kbd> untuk menutup.
      </p>
    </div>
  );
}
