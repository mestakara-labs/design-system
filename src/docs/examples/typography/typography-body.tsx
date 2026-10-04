export default function TypographyBody() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-4">
      <p className="typo-body-l text-fg-primary">
        Body/L untuk paragraf utama yang nyaman dibaca di layar ponsel.
      </p>
      <p className="typo-body-m text-fg-secondary">
        Body/M untuk teks pendukung, seperti deskripsi paket dan isi kartu.
      </p>
      <p className="typo-body-s text-fg-tertiary">
        Body/S untuk meta: lokasi, durasi, dan teks bantuan form.
      </p>
      <p className="typo-body-m text-fg-secondary">
        Gunakan{" "}
        <code className="rounded-xs bg-muted px-1.5 py-0.5 font-mono text-[13px]">kode</code> untuk
        menyebut kode pemesanan, dan{" "}
        <a href="#syarat" className="text-fg-link underline underline-offset-4">
          tautan
        </a>{" "}
        berwarna navy.
      </p>
    </div>
  );
}
