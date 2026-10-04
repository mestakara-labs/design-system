import { LeafIcon } from "lucide-react";

import { SignupForm } from "./signup-form";

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="self-center">
          <a href="/" className="flex items-center gap-2 typo-label-l text-fg-brand">
            <div className="flex size-6 items-center justify-center rounded-sm bg-primary text-fg-on-brand">
              <LeafIcon className="size-4" />
            </div>
            Agrowisata Regional 2
          </a>
        </div>
        <SignupForm />
      </div>
    </div>
  );
}
