import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

export default function InputGroupTextExample() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>Rp</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput inputMode="numeric" placeholder="75.000" aria-label="Harga" />
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="nama" aria-label="Email kantor" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@agrowisata.id</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
