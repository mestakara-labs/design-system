import { cn } from "cn";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function SignupForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Buat akun Anda</CardTitle>
          <CardDescription>Masukkan email Anda untuk membuat akun</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Nama lengkap</FieldLabel>
                <Input id="name" type="text" placeholder="Rina Sari" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" type="email" placeholder="nama@email.com" required />
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
                <FieldDescription className="text-center">
                  Sudah punya akun? <a href="/masuk">Masuk</a>
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
