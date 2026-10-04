export default function TypographyDemo() {
  // A typical unit page header: overline (unit name) → one Fraunces title → body text.
  return (
    <article className="flex max-w-lg flex-col gap-3">
      <p className="typo-overline text-fg-accent">Rancabali Tea Valley</p>
      <h1 className="typo-display-m text-fg-brand">Paket Petik Teh & Sarapan</h1>
      <p className="typo-body-l text-fg-secondary">
        Mulai hari dengan memetik pucuk teh bersama pemandu lokal, lalu nikmati sarapan hangat
        dengan pemandangan kebun yang lapang.
      </p>
      <p className="typo-body-s text-fg-tertiary">Sabtu, 17 Okt 2026 · 08.00–11.00</p>
    </article>
  );
}
