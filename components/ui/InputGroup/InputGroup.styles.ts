export const inputGroupStyles = tv({
  slots: {
    root: [
      "relative flex w-full flex-wrap items-stretch",
      "[&>*:not(:first-child)]:ml-[-1px] [&>*:not(:first-child)]:rounded-l-none",
      "[&>*:not(:last-child)]:rounded-r-none",
      "[&>.chup-input.input-focus]:z-[5] [&>.chup-input:focus]:z-[5] [&>.chup-input:hover]:z-[5] [&>.chup-input]:w-[1%] [&>.chup-input]:min-w-0 [&>.chup-input]:flex-auto",
      "[&>.chup-button]:z-[2]",
      "[&>.chup-select:focus]:z-[5] [&>.chup-select:hover]:z-[5] [&>.chup-select]:w-[1%] [&>.chup-select]:min-w-0 [&>.chup-select]:flex-auto",
    ],
    addon:
      "relative inline-flex items-center justify-center border border-gray-300 bg-gray-100 text-center text-gray-900",
  },
  variants: {
    size: {
      sm: {
        addon: "px-2.5 text-sm",
      },
      md: {
        addon: "px-3 text-base",
      },
      lg: {
        addon: "px-3.5 text-lg",
      },
      xl: {
        addon: "px-4 text-xl",
      },
    },
    shape: {
      none: {
        addon: "rounded-none",
      },
      rounded: {
        addon: "rounded-md",
      },
      pill: {
        addon: "rounded-full",
      },
    },
  },
});

export type InputGroupVariants = {
  /**
   * @description The size of the Input Group, options: `sm`, `md`, `lg`, `xl`
   * @default "md"
   */
  size?: NonNullable<Parameters<typeof inputGroupStyles>[0]>["size"];

  /**
   * @description The shape of Input Group, options: `rounded`, `pill`, `none`
   * @default "rounded"
   */
  shape?: NonNullable<Parameters<typeof inputGroupStyles>[0]>["shape"];
};
