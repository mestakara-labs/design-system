import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function CardWithForm() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="border-b border-border">
        <CardTitle>Masuk</CardTitle>
        <CardDescription>Gunakan email yang terdaftar saat memesan.</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup className="gap-4">
          <Field>
            <FieldLabel htmlFor="login-email">Email</FieldLabel>
            <Input id="login-email" type="email" placeholder="nama@email.com" />
          </Field>
          <Field>
            <FieldLabel htmlFor="login-password">Kata Sandi</FieldLabel>
            <Input id="login-password" type="password" />
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter className="flex-col">
        <Button className="w-full">Masuk</Button>
        <Button variant="ghost" className="w-full">
          Lupa kata sandi?
        </Button>
      </CardFooter>
    </Card>
  );
}
