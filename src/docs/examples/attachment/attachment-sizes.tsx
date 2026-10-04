import { FileTextIcon } from "lucide-react";

import {
  Attachment,
  AttachmentContent,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment";

export default function AttachmentSizes() {
  return (
    <div className="flex flex-col items-start gap-3">
      {(["md", "sm", "xs"] as const).map((size) => (
        <Attachment key={size} size={size}>
          <AttachmentMedia>
            <FileTextIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>size=&quot;{size}&quot;</AttachmentTitle>
          </AttachmentContent>
        </Attachment>
      ))}
    </div>
  );
}
