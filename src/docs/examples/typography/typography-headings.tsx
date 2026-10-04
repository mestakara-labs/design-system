export default function TypographyHeadings() {
  // Inside apps, section titles use Plus Jakarta Sans in navy (text-fg-heading).
  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <h1 className="typo-h1 text-fg-heading">Dashboard Operasional</h1>
      <h2 className="typo-h2 text-fg-heading">Transaksi Hari Ini</h2>
      <h3 className="typo-h3 text-fg-primary">Rancabali Tea Valley</h3>
    </div>
  );
}
