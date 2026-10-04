import { Card, CardContent } from "@/components/ui/card";

const QR_SIZE = 25; // modules per side

/** True when a module (small square) of the sample QR code is dark. Fixed pattern, not a real code. */
function isDark(x: number, y: number) {
  // The three big corner squares of every QR code.
  const corners = [
    [0, 0],
    [QR_SIZE - 7, 0],
    [0, QR_SIZE - 7],
  ];
  for (const [cx, cy] of corners) {
    if (x >= cx && x < cx + 7 && y >= cy && y < cy + 7) {
      const dx = x - cx;
      const dy = y - cy;
      const ring = Math.min(dx, dy, 6 - dx, 6 - dy);
      return ring !== 1;
    }
  }
  // Everything else: a fixed pseudo-random pattern.
  return (x * 7 + y * 13 + x * y) % 5 < 2;
}

/** E-ticket with a QR code to show at the entrance gate. */
export function EticketQr() {
  const modules: { x: number; y: number }[] = [];
  for (let y = 0; y < QR_SIZE; y++) {
    for (let x = 0; x < QR_SIZE; x++) {
      if (isDark(x, y)) modules.push({ x, y });
    }
  }

  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-4 text-center">
        <div className="rounded-lg bg-surface p-4 shadow-md">
          <svg
            viewBox={`0 0 ${QR_SIZE} ${QR_SIZE}`}
            className="size-40"
            role="img"
            aria-label="Kode QR e-tiket"
          >
            {modules.map(({ x, y }) => (
              <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} className="fill-inverse" />
            ))}
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <span className="typo-overline text-fg-accent">E-Tiket · Gunung Mas</span>
          <span className="typo-h3">Pindai di pintu masuk</span>
          <span className="typo-body-m text-fg-secondary">
            Tunjukkan kode ini kepada petugas di gerbang. Berlaku untuk 4 orang, Minggu 12 Okt.
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
