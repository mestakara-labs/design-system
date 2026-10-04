import { useState } from "react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

const MAX_LENGTH = 200;

export default function InputGroupTextareaExample() {
  const [text, setText] = useState("");

  return (
    <InputGroup className="max-w-md">
      <InputGroupTextarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        maxLength={MAX_LENGTH}
        placeholder="Ceritakan pengalaman Anda di kebun teh…"
        aria-label="Ulasan"
      />
      <InputGroupAddon align="block-end">
        <InputGroupText className="ml-auto">
          {text.length}/{MAX_LENGTH}
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}
