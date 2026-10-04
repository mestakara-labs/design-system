import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CardElevated() {
  // DESIGN.md: a card uses a border OR a shadow, never both.
  return (
    <>
      <Card variant="outline" className="w-56">
        <CardHeader>
          <CardTitle>Outline</CardTitle>
          <CardDescription>Border 1px (default)</CardDescription>
        </CardHeader>
      </Card>
      <Card variant="elevated" className="w-56">
        <CardHeader>
          <CardTitle>Elevated</CardTitle>
          <CardDescription>Elevation/1, tanpa border</CardDescription>
        </CardHeader>
      </Card>
    </>
  );
}
