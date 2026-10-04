import { cn } from "cn";
import { LeafIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { AppleIcon, GoogleIcon } from "./brand-icons";

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <a href="/" className="flex flex-col items-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-md bg-primary text-fg-on-brand">
                <LeafIcon className="size-6" />
              </div>
              <span className="sr-only">Agrowisata Regional 2</span>
            </a>
            <h1 className="typo-h2 text-fg-primary">Selamat datang di Agrowisata</h1>
            <FieldDescription>
              Belum punya akun? <a href="/daftar">Daftar</a>
            </FieldDescription>
          </div>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" type="email" placeholder="nama@email.com" required />
          </Field>
          <Field>
            <Button type="submit">Masuk</Button>
          </Field>
          {/* The page background is "canvas", so the separator label uses it too. */}
          <FieldSeparator className="*:data-[slot=field-separator-content]:bg-canvas">
            Atau
          </FieldSeparator>
          <Field className="grid gap-4 sm:grid-cols-2">
            <Button variant="outline" type="button">
              <AppleIcon />
              Akun Apple
            </Button>
            <Button variant="outline" type="button">
              <GoogleIcon />
              Akun Google
            </Button>
          </Field>
        </FieldGroup>
      </form>
      <FieldDescription className="px-6 text-center">
        Dengan melanjutkan, Anda menyetujui <a href="/syarat-layanan">Syarat Layanan</a> dan{" "}
        <a href="/kebijakan-privasi">Kebijakan Privasi</a> kami.
      </FieldDescription>
    </div>
  );
}
