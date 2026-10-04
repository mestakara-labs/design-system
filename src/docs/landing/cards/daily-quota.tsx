import { XIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";

/** Daily visitor quota of a unit, set with a slider. */
export function DailyQuota() {
  const [quota, setQuota] = useState([2500]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kuota Harian</CardTitle>
        <CardDescription>
          Batas pengunjung per hari sebelum penjualan tiket ditutup.
        </CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm" aria-label="Tutup">
            <XIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <Field>
          <FieldLabel htmlFor="landing-quota-unit">Unit</FieldLabel>
          <Select defaultValue="gunung-mas">
            <SelectTrigger id="landing-quota-unit">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gunung-mas">Gunung Mas — Bogor</SelectItem>
              <SelectItem value="rancabali">Rancabali — Bandung</SelectItem>
              <SelectItem value="malabar">Malabar — Bandung</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <div className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between">
            <span className="typo-label-m">Kuota pengunjung</span>
            <span className="typo-h2 text-fg-brand tabular-nums">
              {quota[0].toLocaleString("id-ID")}
            </span>
          </div>
          <Slider
            value={quota}
            onValueChange={setQuota}
            min={500}
            max={5000}
            step={100}
            aria-label="Kuota pengunjung"
          />
          <div className="flex justify-between typo-body-s text-fg-secondary">
            <span>500 (min)</span>
            <span>5.000 (maks)</span>
          </div>
        </div>
        <Field>
          <FieldLabel htmlFor="landing-quota-notes">Catatan</FieldLabel>
          <Textarea
            id="landing-quota-notes"
            placeholder="cth. Kuota dinaikkan saat libur sekolah"
          />
        </Field>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Simpan Kuota</Button>
      </CardFooter>
    </Card>
  );
}
