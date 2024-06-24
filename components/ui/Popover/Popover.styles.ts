export const popoverStyles = tv({
  slots: {
    root: "z-50 min-w-32 rounded-md bg-white text-neutral-950 shadow-[8px_4px_32px_-1px_#4E5D7C3D] outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
    arrow: "h-1.5 w-3 fill-white",
    title: "px-4 py-2 text-lg font-medium",
    content: "px-4 py-2 text-base",
    divider: "border-t border-neutral-300",
  },
  variants: {
    sameWidth: {
      true: {
        root: "max-h-[var(--radix-popover-content-available-height)] w-[var(--radix-popover-trigger-width)]",
      },
      false: {},
    },
  },
});

export type PopoverSlots = keyof Pick<typeof popoverStyles, "slots">["slots"];
