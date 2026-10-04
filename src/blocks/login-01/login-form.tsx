import { cn } from "cn";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Masuk ke akun Anda</CardTitle>
          <CardDescription>Masukkan email Anda untuk masuk ke Agrowisata.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
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
                <Button variant="outline" type="button">
                  Masuk dengan Google
                </Button>
                <FieldDescription className="text-center">
                  Belum punya akun? <a href="/daftar">Daftar</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
