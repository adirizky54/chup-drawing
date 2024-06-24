export const inputStyles = tv({
  slots: {
    root: "relative inline-flex w-full min-w-0 border border-solid border-gray-300 bg-white transition duration-200",
    input: "transition duration-200",
    leading: "flex items-center",
    trailing: "flex items-center",
    clearWrapper: "flex items-center",
    clear: "transition-color m-0 cursor-pointer text-gray-400 duration-300 hover:text-gray-700",
  },
  variants: {
    size: {
      sm: {},
      md: {},
      lg: {},
      xl: {},
    },
    shape: {
      none: {},
      rounded: {},
      pill: {},
    },
    isDisabled: {
      true: {},
      false: {},
    },
    isFocused: {
      true: {},
      false: {},
    },
    hasAdditional: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    // additional
    {
      hasAdditional: true,
      class: {
        root: "text-gray-400 hover:border-primary-200 aria-invalid:border-red-500",
        input: [
          "relative m-0 w-full min-w-0 p-0",
          "inline-block appearance-none rounded-none border-none outline-none",
          "text-gray-900 placeholder:text-gray-400",
        ],
      },
    },

    // additional + size
    {
      hasAdditional: true,
      size: "sm",
      class: {
        root: "px-2.5 py-[7px]",
        input: "text-sm",
        leading: "me-1.5 text-base/[0]",
        trailing: "ms-1.5 text-base/[0]",
        clearWrapper: "ms-1.5",
        clear: "text-base",
      },
    },
    {
      hasAdditional: true,
      size: "md",
      class: {
        root: "px-3 py-[7px]",
        input: "text-base",
        leading: "me-2 text-lg/[0]",
        trailing: "ms-2 text-lg/[0]",
        clearWrapper: "ms-2",
        clear: "text-lg",
      },
    },
    {
      hasAdditional: true,
      size: "lg",
      class: {
        root: "px-3.5 py-[7px]",
        input: "text-lg",
        leading: "me-2.5 text-xl/[0]",
        trailing: "ms-2.5 text-xl/[0]",
        clearWrapper: "ms-2.5",
        clear: "text-xl",
      },
    },
    {
      hasAdditional: true,
      size: "xl",
      class: {
        root: "px-4 py-[9px]",
        input: "text-xl",
        leading: "me-3 text-2xl/[0]",
        trailing: "ms-3 text-2xl/[0]",
        clearWrapper: "ms-3",
        clear: "text-2xl",
      },
    },

    // additional + shape
    { hasAdditional: true, shape: "none", class: { root: "rounded-none" } },
    { hasAdditional: true, shape: "rounded", class: { root: "rounded-md" } },
    { hasAdditional: true, shape: "pill", class: { root: "rounded-full" } },

    // additional + focus
    {
      hasAdditional: true,
      isFocused: true,
      class: {
        root: "input-focus border-primary-200 text-gray-400 ring-4 ring-green-800/30 aria-invalid:ring-red-600/30",
      },
    },

    // additional + disabled
    {
      hasAdditional: true,
      isDisabled: true,
      class: {
        root: "cursor-not-allowed border-black/10 bg-black/5 text-black/25 hover:border-black/10 hover:bg-black/5 hover:text-black/25 [&>*]:pointer-events-none [&>*]:select-none",
        input: "cursor-not-allowed select-none bg-transparent placeholder:text-black/25",
      },
    },

    // no additional
    {
      hasAdditional: false,
      class: {
        input: [
          "relative m-0 w-full min-w-0",
          "appearance-none outline-none",
          "text-gray-900 disabled:text-black/25",
          "placeholder:text-gray-400 disabled:placeholder:text-black/25",
          "bg-white disabled:bg-black/5",
          "border border-solid border-gray-300 hover:border-primary-200 focus:border-primary-200 disabled:border-black/10",
          "focus-visible:ring-4 focus-visible:ring-green-800/30 focus-visible:aria-invalid:ring-red-600/30",
          "aria-invalid:border-red-500",
          "disabled:cursor-not-allowed",
        ],
      },
    },

    // no additional + size
    {
      hasAdditional: false,
      size: "sm",
      class: {
        input: "px-2.5 py-[7px] text-sm",
      },
    },
    {
      hasAdditional: false,
      size: "md",
      class: {
        input: "px-3 py-[7px] text-base",
      },
    },
    {
      hasAdditional: false,
      size: "lg",
      class: {
        input: "px-3.5 py-[7px] text-lg",
      },
    },
    {
      hasAdditional: false,
      size: "xl",
      class: {
        input: "px-4 py-[9px] text-xl",
      },
    },

    // no additional + shape
    { hasAdditional: false, shape: "none", class: { input: "rounded-none" } },
    { hasAdditional: false, shape: "rounded", class: { input: "rounded-md" } },
    { hasAdditional: false, shape: "pill", class: { input: "rounded-full" } },
  ],
  defaultVariants: {
    size: "md",
    shape: "rounded",
  },
});

export type InputVariants = {
  /**
   * @description The size of the Input, options: `sm`, `md`, `lg`, `xl`
   * @default "md"
   */
  size?: NonNullable<Parameters<typeof inputStyles>[0]>["size"];

  /**
   * @description The shape of Input, options: `rounded`, `pill`, `none`
   * @default "rounded"
   */
  shape?: NonNullable<Parameters<typeof inputStyles>[0]>["shape"];
};
