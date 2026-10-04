import { XIcon } from "lucide-react";

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from "@/components/ui/attachment";
import { toast } from "@/components/ui/sonner";

const PHOTOS = [
  { src: "/images/tea-hills-1.svg", name: "kebun-teh-pagi.jpg", size: "1,2 MB" },
  { src: "/images/tea-hills-2.svg", name: "danau-rancabali.jpg", size: "980 KB" },
  { src: "/images/tea-hills-3.svg", name: "rumah-bosscha.jpg", size: "1,5 MB" },
];

export default function AttachmentImages() {
  return (
    // A row that scrolls sideways when there are many files.
    <AttachmentGroup className="w-full max-w-md">
      {PHOTOS.map((photo) => (
        <Attachment key={photo.name} orientation="vertical">
          <AttachmentMedia variant="image">
            <img src={photo.src} alt="" />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>{photo.name}</AttachmentTitle>
            <AttachmentDescription>{photo.size}</AttachmentDescription>
          </AttachmentContent>
          {/* Makes the whole card clickable. */}
          <AttachmentTrigger
            aria-label={`Lihat ${photo.name}`}
            onClick={() => toast(`Membuka ${photo.name}`)}
          />
          <AttachmentActions>
            <AttachmentAction
              variant="outline"
              className="size-7 bg-surface"
              aria-label={`Hapus ${photo.name}`}
            >
              <XIcon />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>
      ))}
    </AttachmentGroup>
  );
}
