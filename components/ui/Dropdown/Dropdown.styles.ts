export const dropdownStyles = tv({
  slots: {
    content:
      "z-50 min-w-32 overflow-hidden rounded-md border border-neutral-300 bg-white py-1 text-neutral-950 shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_10px_15px_-3px_rgba(0,0,0,0.1)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    item: "relative flex w-full cursor-pointer select-none items-center gap-2 px-3 py-2 text-base text-neutral-950 transition-colors hover:bg-neutral-200 focus:bg-neutral-200 focus:outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    icon: "flex-shrink-0 text-lg text-neutral-700",
  },
});
