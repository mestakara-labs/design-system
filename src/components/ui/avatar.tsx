/**
 * Avatar
 * A round photo of a person, with initials as fallback while loading or when there is no photo.
 *
 * Design: radius full (DESIGN.md §4).
 * Based on: https://ui.shadcn.com/docs/components/avatar
 */
import { cn } from "cn";
import { Avatar as AvatarPrimitive } from "radix-ui";
import * as React from "react";

type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root> & {
  /** sm 32px · md 40px · lg 56px */
  size?: "sm" | "md" | "lg";
};

function Avatar({ className, size = "md", ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        "group/avatar relative flex shrink-0 overflow-hidden rounded-full select-none",
        "data-[size=lg]:size-10 data-[size=md]:size-8 data-[size=sm]:size-6",
        className,
      )}
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full object-cover", className)}
      {...props}
    />
  );
}

/** Shown while the image loads or when it fails, usually the person's initials. */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-brand-subtle text-fg-brand",
        "group-data-[size=lg]/avatar:typo-label-m group-data-[size=md]/avatar:typo-label-s group-data-[size=sm]/avatar:typo-label-s",
        className,
      )}
      {...props}
    />
  );
}

/** Small dot in the bottom-right corner, e.g. "online". */
function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-fg-on-brand ring-2 ring-surface select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=md]/avatar:size-2.5 group-data-[size=md]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        className,
      )}
      {...props}
    />
  );
}

/** Overlapping row of avatars. */
function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-surface",
        className,
      )}
      {...props}
    />
  );
}

/** "+3" circle at the end of an <AvatarGroup>. */
function AvatarGroupCount({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted typo-label-s text-fg-secondary ring-2 ring-surface",
        "group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6",
        "[&>svg]:size-4",
        className,
      )}
      {...props}
    />
  );
}

export {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
  type AvatarProps,
};
