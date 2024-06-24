export const sliderStyles = tv({
  slots: {
    root: "relative flex touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:flex-col",
    track:
      "relative grow overflow-hidden rounded-full bg-gray-200 data-[orientation=horizontal]:w-full data-[disabled=true]:cursor-not-allowed",
    range:
      "absolute bg-primary-200 data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full data-[disabled=true]:bg-primary-200/50",
    thumb:
      "block cursor-pointer rounded-full border-2 border-primary-200 bg-white transition-colors focus-visible:border-green-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-800/30 data-[disabled=true]:pointer-events-none data-[disabled=true]:border-primary-200/50",
  },
  variants: {
    size: {
      xs: {
        root: "data-[orientation=vertical]:w-4",
        track: "data-[orientation=horizontal]:h-1 data-[orientation=vertical]:w-1",
        thumb: "size-4",
      },
      sm: {
        root: "data-[orientation=vertical]:w-5",
        track: "data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-2",
        thumb: "size-5",
      },
      md: {
        root: "data-[orientation=vertical]:w-6",
        track: "data-[orientation=horizontal]:h-3 data-[orientation=vertical]:w-3",
        thumb: "size-6",
      },
      lg: {
        root: "data-[orientation=vertical]:w-6",
        track: "data-[orientation=horizontal]:h-4 data-[orientation=vertical]:w-4",
        thumb: "size-7",
      },
      xl: {
        root: "data-[orientation=vertical]:w-7",
        track: "data-[orientation=horizontal]:h-5 data-[orientation=vertical]:w-5",
        thumb: "size-8",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type SliderSlots = keyof Pick<typeof sliderStyles, "slots">["slots"];

export type SliderVariants = {
  /**
   * @description The size of the slider, options: `"xs"`, `"sm"`, `"md"`, `"lg"`, `"xl"`
   * @default "md"
   */
  size?: NonNullable<Parameters<typeof sliderStyles>[0]>["size"];
};
