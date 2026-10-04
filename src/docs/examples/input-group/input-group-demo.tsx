import { SearchIcon } from "lucide-react";

import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

export default function InputGroupDemo() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="Cari destinasi atau paket" aria-label="Cari" />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
}
