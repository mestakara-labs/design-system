import { FileTextIcon, ImageIcon, RotateCcwIcon, UploadIcon, XIcon } from "lucide-react";

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment";
import { Spinner } from "@/components/ui/spinner";

export default function AttachmentDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      {/* done (default) */}
      <Attachment className="w-full">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>e-tiket-gunung-mas.pdf</AttachmentTitle>
          <AttachmentDescription>PDF · 248 KB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Hapus lampiran">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>

      {/* uploading: the name shimmers, a spinner replaces the icon */}
      <Attachment state="uploading" className="w-full">
        <AttachmentMedia>
          <Spinner />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>bukti-transfer.jpg</AttachmentTitle>
          <AttachmentDescription>Mengunggah… 64%</AttachmentDescription>
        </AttachmentContent>
      </Attachment>

      {/* error */}
      <Attachment state="error" className="w-full">
        <AttachmentMedia>
          <ImageIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>foto-ktp.heic</AttachmentTitle>
          <AttachmentDescription>
            Format tidak didukung. Gunakan JPG atau PNG.
          </AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Coba lagi">
            <RotateCcwIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>

      {/* idle: an empty slot */}
      <Attachment state="idle" className="w-full">
        <AttachmentMedia>
          <UploadIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>Unggah bukti pembayaran</AttachmentTitle>
          <AttachmentDescription>JPG, PNG, atau PDF · maks. 5 MB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </div>
  );
}
