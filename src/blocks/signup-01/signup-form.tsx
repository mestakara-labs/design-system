import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function SignupForm(props: React.ComponentProps<typeof Card>) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Buat akun</CardTitle>
        <CardDescription>Isi data di bawah ini untuk membuat akun Anda</CardDescription>
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
              <Button variant="outline" type="button">
                Daftar dengan Google
              </Button>
              <FieldDescription className="px-6 text-center">
                Sudah punya akun? <a href="/masuk">Masuk</a>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
