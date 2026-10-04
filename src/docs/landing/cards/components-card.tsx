import { ArrowRightIcon, ChevronDownIcon, SearchIcon } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

/** A quick sample of the basic components: buttons, fields, badges and selection controls. */
export function ComponentsCard() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-5">
        <div className="flex flex-wrap gap-2">
          <Button size="sm">
            Pesan Tiket <ArrowRightIcon />
          </Button>
          <Button size="sm" variant="accent">
            Promo
          </Button>
          <Button size="sm" variant="outline">
            Detail
          </Button>
        </div>

        <InputGroup>
          <InputGroupInput placeholder="Cari destinasi" aria-label="Cari destinasi" />
          <InputGroupAddon align="inline-end">
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
        <Textarea placeholder="Pesan untuk petugas" aria-label="Pesan untuk petugas" />

        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="success">Buka</Badge>
          <Badge variant="warning">Ramai</Badge>
          <div className="ml-auto flex items-center gap-3">
            <RadioGroup defaultValue="pagi" className="flex gap-2" aria-label="Sesi">
              <RadioGroupItem value="pagi" aria-label="Sesi pagi" />
              <RadioGroupItem value="sore" aria-label="Sesi sore" />
            </RadioGroup>
            <Checkbox defaultChecked aria-label="Setuju" />
            <Switch defaultChecked aria-label="Notifikasi" />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size="sm" variant="outline">
                Batalkan Pesanan
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Batalkan pesanan ini?</AlertDialogTitle>
                <AlertDialogDescription>
                  Tiket untuk Minggu, 12 Okt akan dibatalkan dan dana dikembalikan dalam 3–5 hari
                  kerja.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Kembali</AlertDialogCancel>
                <AlertDialogAction variant="destructive">Batalkan</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <ButtonGroup>
            <Button size="sm" variant="outline">
              Gunung Mas
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon-sm" variant="outline" aria-label="Pilih unit lain">
                  <ChevronDownIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Rancabali</DropdownMenuItem>
                <DropdownMenuItem>Malabar</DropdownMenuItem>
                <DropdownMenuItem>Kertamanah</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ButtonGroup>
        </div>
      </CardContent>
    </Card>
  );
}
