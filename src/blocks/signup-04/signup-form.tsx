import { cn } from "cn";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { AppleIcon, GoogleIcon, MetaIcon } from "./brand-icons";

export function SignupForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        {/* Form on the left, cover image on the right (image hidden on phones). */}
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="typo-h2 text-fg-primary">Buat akun Anda</h1>
                <p className="typo-body-m text-balance text-fg-secondary">
                  Masukkan email Anda untuk membuat akun
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" type="email" placeholder="nama@email.com" required />
                <FieldDescription>
                  Kami memakai email ini untuk menghubungi Anda dan tidak akan membagikannya.
                </FieldDescription>
              </Field>
              <Field>
                {/* Two password fields side by side. */}
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Kata sandi</FieldLabel>
                    <Input id="password" type="password" required />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">Konfirmasi</FieldLabel>
                    <Input id="confirm-password" type="password" required />
                  </Field>
                </Field>
                <FieldDescription>Minimal 8 karakter.</FieldDescription>
              </Field>
              <Field>
                <Button type="submit">Buat Akun</Button>
              </Field>
              <FieldSeparator>Atau lanjutkan dengan</FieldSeparator>
              <Field className="grid grid-cols-3 gap-4">
                <Button variant="outline" type="button">
                  <AppleIcon />
                  <span className="sr-only">Daftar dengan Apple</span>
                </Button>
                <Button variant="outline" type="button">
                  <GoogleIcon />
                  <span className="sr-only">Daftar dengan Google</span>
                </Button>
                <Button variant="outline" type="button">
                  <MetaIcon />
                  <span className="sr-only">Daftar dengan Meta</span>
                </Button>
              </Field>
              <FieldDescription className="text-center">
                Sudah punya akun? <a href="/masuk">Masuk</a>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="relative hidden bg-muted md:block">
            <img
              src="/images/tea-hills-2.svg"
              alt="Hamparan kebun teh"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        Dengan melanjutkan, Anda menyetujui <a href="/syarat-layanan">Syarat Layanan</a> dan{" "}
        <a href="/kebijakan-privasi">Kebijakan Privasi</a> kami.
      </FieldDescription>
    </div>
  );
}
