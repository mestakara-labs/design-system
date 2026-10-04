import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Paket Petik Teh & Sarapan</CardTitle>
        <CardDescription>Malabar Tea Village · 3 jam</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="typo-body-m text-fg-secondary">
          Petik pucuk teh bersama pemandu, lalu sarapan nasi liwet dengan pemandangan kebun.
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <div>
          <p className="typo-body-s text-fg-tertiary">Mulai dari</p>
          <p className="typo-h2 text-fg-brand">Rp75.000</p>
        </div>
        <Button>Pesan</Button>
      </CardFooter>
    </Card>
  );
}
