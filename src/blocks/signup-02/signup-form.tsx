import { cn } from "cn";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { GoogleIcon } from "./brand-icons";

export function SignupForm({ className, ...props }: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="typo-h2 text-fg-primary">Buat akun Anda</h1>
          <p className="typo-body-m text-balance text-fg-secondary">
            Isi formulir di bawah ini untuk membuat akun Anda
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Nama lengkap</FieldLabel>
          <Input id="name" type="text" placeholder="Rina Sari" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="nama@email.com" required />
          <FieldDescription>
            Kami memakai email ini untuk menghubungi Anda dan tidak akan membagikannya.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Kata sandi</FieldLabel>
          <Input id="password" type="password" required />
          <FieldDescription>Minimal 8 karakter.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">Konfirmasi kata sandi</FieldLabel>
          <Input id="confirm-password" type="password" required />
          <FieldDescription>Ketik ulang kata sandi Anda.</FieldDescription>
        </Field>
        <Field>
          <Button type="submit">Buat Akun</Button>
        </Field>
        {/* The page background is "canvas", so the separator label uses it too. */}
        <FieldSeparator className="*:data-[slot=field-separator-content]:bg-canvas">
          Atau lanjutkan dengan
        </FieldSeparator>
        <Field>
          <Button variant="outline" type="button">
            <GoogleIcon />
            Daftar dengan Google
          </Button>
          <FieldDescription className="px-6 text-center">
            Sudah punya akun? <a href="/masuk">Masuk</a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
