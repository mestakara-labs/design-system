import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Ubah Data Pengunjung</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ubah Data Pengunjung</DialogTitle>
          <DialogDescription>
            Perubahan berlaku untuk semua tiket dalam pesanan ini.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup className="gap-4">
          <Field>
            <FieldLabel htmlFor="dlg-name">Nama Lengkap</FieldLabel>
            <Input id="dlg-name" defaultValue="Rina Sari" />
          </Field>
          <Field>
            <FieldLabel htmlFor="dlg-phone">Nomor WhatsApp</FieldLabel>
            <Input id="dlg-phone" type="tel" defaultValue="081234567890" />
          </Field>
        </FieldGroup>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Batal</Button>
          </DialogClose>
          <Button>Simpan</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
