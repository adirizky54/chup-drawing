export const loadingOverlayStyles = tv({
  slots: {
    root: "absolute inset-0 flex cursor-wait flex-col items-center justify-center overflow-hidden",
    overlay: "absolute inset-0 z-[200] rounded-none bg-white/80",
    icon: "relative inline-block stroke-primary-200",
    description: "relative select-none pt-2 text-sm font-medium tracking-wide text-primary-200",
  },
});
