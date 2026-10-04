import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarInput } from "@/components/ui/sidebar";

export function SidebarOptInForm() {
  return (
    <Card className="gap-2 py-4 shadow-none">
      <CardHeader className="px-4">
        <CardTitle className="typo-body-m">Berlangganan kabar terbaru</CardTitle>
        <CardDescription>Dapatkan info promo dan acara terbaru dari Agrowisata.</CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <form>
          <div className="grid gap-2.5">
            <SidebarInput type="email" placeholder="Email" />
            <Button className="w-full bg-primary text-fg-on-brand shadow-none" size="sm">
              Berlangganan
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
