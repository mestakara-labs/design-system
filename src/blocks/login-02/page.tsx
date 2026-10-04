import { LeafIcon } from "lucide-react";

import { LoginForm } from "./login-form";

export default function Page() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 typo-label-l text-fg-brand">
            <div className="flex size-6 items-center justify-center rounded-sm bg-primary text-fg-on-brand">
              <LeafIcon className="size-4" />
            </div>
            Agrowisata Regional 2
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      {/* Cover image, only on wide screens. */}
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/images/tea-hills-2.svg"
          alt="Hamparan kebun teh"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
