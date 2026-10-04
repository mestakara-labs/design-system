/**
 * Toggle Group
 * A set of toggles. `type="single"` = pick one (like tabs), `type="multiple"` = pick several.
 *
 * Based on: https://ui.shadcn.com/docs/components/toggle-group
 */
import { type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui";
import * as React from "react";

import { toggleVariants } from "./toggle";

type ToggleGroupStyle = VariantProps<typeof toggleVariants> & {
  /** Space between items, in Tailwind units (1 = 4px). 0 = items touch, like one bar. */
  spacing?: number;
};

// Lets every <ToggleGroupItem> inherit variant/size/spacing from the group.
const ToggleGroupContext = React.createContext<ToggleGroupStyle>({
  variant: "default",
  size: "md",
  spacing: 0,
});

function ToggleGroup({
  className,
  variant,
  size,
  spacing = 0,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> & ToggleGroupStyle) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      style={{ "--gap": spacing } as React.CSSProperties}
      className={cn(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md",
        className,
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, spacing }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext);
  const itemVariant = context.variant || variant;
  const itemSize = context.size || size;

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={itemVariant}
      data-size={itemSize}
      data-spacing={context.spacing}
      className={cn(
        toggleVariants({ variant: itemVariant, size: itemSize }),
        "w-auto min-w-0 shrink-0 focus:z-10 focus-visible:z-10",
        // spacing=0: join the items into one bar (only the outer corners are rounded).
        "data-[spacing=0]:rounded-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md",
        // Outline items overlap by 1px so neighbouring borders don't double up. The selected item
        // is raised above its neighbours, so its green border shows on all four sides.
        "data-[spacing=0]:data-[variant=outline]:-ml-px data-[spacing=0]:data-[variant=outline]:first:ml-0",
        "data-[state=on]:z-10",
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
}

export { ToggleGroup, ToggleGroupItem };
