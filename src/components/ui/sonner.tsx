/**
 * Sonner (toast)
 * Short, temporary messages in a corner of the screen: "Tiket ditambahkan ke keranjang".
 *
 *   // 1. Once, near the root of your app:
 *   <Toaster />
 *
 *   // 2. Anywhere:
 *   import { toast } from "@mestakara/ui/sonner";
 *   toast.success("Pembayaran berhasil");
 *
 * Always import `toast` from this file (not from "sonner" directly), so it talks to this <Toaster>.
 *
 * Design: Elevation/2 panel; success/warning/error/info use the status colors (DESIGN.md §2).
 * Based on: https://ui.shadcn.com/docs/components/sonner (uses Sonner: https://sonner.emilkowal.ski)
 */
import {
  CircleCheckIcon,
  InfoIcon,
  LoaderCircleIcon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { Toaster as Sonner, toast, type ToasterProps } from "sonner";

function Toaster(props: ToasterProps) {
  return (
    <Sonner
      className="toaster group"
      // Colored backgrounds for success / error / warning / info toasts.
      richColors
      icons={{
        success: <CircleCheckIcon className="size-5" />,
        info: <InfoIcon className="size-5" />,
        warning: <TriangleAlertIcon className="size-5" />,
        error: <OctagonXIcon className="size-5" />,
        loading: <LoaderCircleIcon className="size-5 animate-spin" />,
      }}
      // Sonner reads these CSS variables. They point to the design system tokens.
      style={
        {
          "--normal-bg": "var(--bg-surface)",
          "--normal-text": "var(--text-primary)",
          "--normal-border": "var(--border-default)",
          "--success-bg": "var(--status-success-bg)",
          "--success-text": "var(--status-success-text)",
          "--success-border": "var(--status-success-bg)",
          "--warning-bg": "var(--status-warning-bg)",
          "--warning-text": "var(--status-warning-text)",
          "--warning-border": "var(--status-warning-bg)",
          "--error-bg": "var(--status-danger-bg)",
          "--error-text": "var(--status-danger-text)",
          "--error-border": "var(--status-danger-bg)",
          "--info-bg": "var(--status-info-bg)",
          "--info-text": "var(--status-info-text)",
          "--info-border": "var(--status-info-bg)",
          "--border-radius": "12px",
          fontFamily: "var(--font-sans)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "shadow-md! typo-body-m!",
          title: "typo-label-m!",
          description: "typo-body-s! opacity-90",
        },
      }}
      {...props}
    />
  );
}

export { toast, Toaster };
