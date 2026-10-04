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

export function LoginForm({ className, ...props }: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="typo-h2 text-fg-primary">Masuk ke akun Anda</h1>
          <p className="typo-body-m text-balance text-fg-secondary">
            Masukkan email Anda untuk masuk ke akun
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="nama@email.com" required />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Kata sandi</FieldLabel>
            <a
              href="/lupa-kata-sandi"
              className="ml-auto typo-body-s text-fg-link underline-offset-4 hover:underline"
            >
              Lupa kata sandi?
            </a>
          </div>
          <Input id="password" type="password" required />
        </Field>
        <Field>
          <Button type="submit">Masuk</Button>
        </Field>
        {/* The page background is "canvas", so the separator label uses it too. */}
        <FieldSeparator className="*:data-[slot=field-separator-content]:bg-canvas">
          Atau lanjutkan dengan
        </FieldSeparator>
        <Field>
          <Button variant="outline" type="button">
            <GoogleIcon />
            Masuk dengan Google
          </Button>
          <FieldDescription className="text-center">
            Belum punya akun? <a href="/daftar">Daftar</a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
