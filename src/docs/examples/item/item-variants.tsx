import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item";

export default function ItemVariants() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Item variant="default">
        <ItemContent>
          <ItemTitle>Default</ItemTitle>
          <ItemDescription>Tanpa border dan latar.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Outline</ItemTitle>
          <ItemDescription>Dengan border, latar putih.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Muted</ItemTitle>
          <ItemDescription>Latar krem lembut.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  );
}
