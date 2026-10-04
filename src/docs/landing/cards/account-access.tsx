import { ChevronRightIcon, CircleAlertIcon, LockIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

/** Staff account security: confirm the password before changing it. */
export function AccountAccess() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Akses Akun Petugas</CardTitle>
        <CardDescription>Perbarui kata sandi atau masuk ulang untuk melanjutkan.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <FieldGroup className="gap-4">
          <Field>
            <FieldLabel htmlFor="landing-access-email">Email</FieldLabel>
            <Input id="landing-access-email" type="email" defaultValue="rina@agrowisata.id" />
          </Field>
          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="landing-access-password">Kata sandi saat ini</FieldLabel>
              <a href="#lupa-kata-sandi" className="typo-label-s text-fg-link hover:underline">
                LUPA?
              </a>
            </div>
            <Input id="landing-access-password" type="password" defaultValue="tehgunungmas" />
          </Field>
        </FieldGroup>
        <Button disabled className="w-full">
          <LockIcon />
          Perbarui Keamanan
        </Button>
        <Item asChild size="sm" variant="muted">
          <a href="#zona-berbahaya">
            <ItemMedia variant="icon">
              <CircleAlertIcon className="text-danger" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="text-fg-danger">Zona berbahaya</ItemTitle>
              <ItemDescription>Arsipkan akun dan cabut semua akses</ItemDescription>
            </ItemContent>
            <ItemActions>
              <ChevronRightIcon className="size-4 text-fg-tertiary" />
            </ItemActions>
          </a>
        </Item>
      </CardContent>
    </Card>
  );
}
