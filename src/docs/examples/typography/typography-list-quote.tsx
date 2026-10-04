export default function TypographyListQuote() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="typo-h3 text-fg-primary">Fasilitas</h3>
        <ul className="list-disc space-y-1 pl-5 typo-body-m text-fg-secondary">
          <li>Pemandu kebun berpengalaman</li>
          <li>Sarapan nasi liwet dan teh hangat</li>
          <li>Area parkir dan mushola</li>
        </ul>
      </div>

      <blockquote className="border-l-4 border-primary pl-4 typo-body-l text-fg-secondary italic">
        &ldquo;Pemandangan pagi di kebun teh ini luar biasa. Anak-anak senang sekali memetik
        teh!&rdquo;
        <footer className="mt-2 typo-label-s text-fg-tertiary not-italic">— Rina, Bandung</footer>
      </blockquote>
    </div>
  );
}
