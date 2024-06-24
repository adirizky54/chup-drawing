export const tooltipStyles = tv({
  slots: {
    root: [
      "z-50 max-w-sm break-words rounded border border-neutral-800 bg-neutral-800 px-3 py-2 text-sm text-white",

      // Animation
      "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",

      // Placement
      "will-change-[transform,opacity] data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    ],
    arrow: "h-1.5 w-3 fill-neutral-800",
  },
});

export type TooltipSlots = keyof Pick<typeof tooltipStyles, "slots">["slots"];
