import { cn } from "cn";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Selamat datang kembali</CardTitle>
          <CardDescription>Masuk dengan akun Apple atau Google Anda</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <Button variant="outline" type="button">
                  <AppleIcon />
                  Masuk dengan Apple
                </Button>
                <Button variant="outline" type="button">
                  <GoogleIcon />
                  Masuk dengan Google
                </Button>
              </Field>
              <FieldSeparator>Atau lanjutkan dengan</FieldSeparator>
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
                <FieldDescription className="text-center">
                  Belum punya akun? <a href="/daftar">Daftar</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        Dengan melanjutkan, Anda menyetujui <a href="/syarat-layanan">Syarat Layanan</a> dan{" "}
        <a href="/kebijakan-privasi">Kebijakan Privasi</a> kami.
      </FieldDescription>
    </div>
  );
}
