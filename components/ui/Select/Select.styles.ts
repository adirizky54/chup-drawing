export const selectStyles = tv({
  slots: {
    trigger: [
      "relative inline-flex w-full cursor-pointer select-none items-center transition duration-200",
      "border border-gray-300 bg-white shadow-sm hover-active:border-primary-200",
      "focus:outline-none focus-visible:border-primary-200 focus-visible:ring-4 focus-visible:ring-green-800/30",
      "data-[state=open]:border-primary-200 data-[state=open]:ring-4 data-[state=open]:ring-green-800/30",
      "aria-invalid:border-red-500 focus-visible:aria-invalid:ring-red-600/30 aria-invalid:hover-active:border-red-500",
    ],
    placeholder: "relative w-full truncate text-gray-400",
    selected: "relative w-full truncate text-gray-900",
    leading: "flex items-center text-gray-400",
    trailing: "flex items-center text-gray-400",
    clearWrapper: "flex items-center",
    clear: "transition-color m-0 cursor-pointer text-gray-400 duration-300 hover:text-gray-700",
    select: "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-gray-900",
    selectContent: "overflow-y-auto overflow-x-hidden py-1",
    selectGroup: "",
    selectGroupLabel:
      "relative block cursor-default select-none bg-transparent px-3 py-1.5 text-sm font-semibold text-gray-900",
    selectItem: [
      "group relative flex cursor-pointer select-none items-center justify-between gap-2 px-3 py-2 text-base text-gray-900 outline-none",
      // highlighted & selected
      "aria-selected:bg-primary-200 aria-selected:text-white data-[highlighted]:bg-primary-200 data-[highlighted]:text-white",
      // disabled
      "data-[disabled]:pointer-events-none data-[disabled]:data-[highlighted]:bg-transparent data-[disabled]:data-[state=checked]:bg-transparent data-[disabled]:text-gray-500 data-[disabled]:opacity-50",
    ],
    selectItemContainer: "flex min-w-0 items-center gap-2.5",
    selectSelectedIconWrapper:
      "flex items-center justify-center text-lg text-gray-900 group-aria-selected:text-white group-data-[highlighted]:text-white",
    selectEmpty: "flex flex-col items-center justify-center gap-y-3 py-6 text-center text-base text-gray-400",
    selectEmptyIcon: "text-4xl text-gray-500",
    selectEmptyDescription: "text-current",
  },
  variants: {
    size: {
      sm: {
        trigger: "px-3 py-[7px] text-sm",
        leading: "me-1.5 text-base",
        trailing: "ms-1.5 text-base",
        clearWrapper: "ms-1.5",
        clear: "text-base",
      },
      md: {
        trigger: "px-3 py-[7px] text-base",
        leading: "me-2 text-lg",
        trailing: "ms-2 text-lg",
        clearWrapper: "ms-2",
        clear: "text-lg",
      },
      lg: {
        trigger: "px-3.5 py-[7px] text-lg",
        leading: "me-2.5 text-xl",
        trailing: "ms-2.5 text-xl",
        clearWrapper: "ms-2.5",
        clear: "text-xl",
      },
      xl: {
        trigger: "px-4 py-[9px] text-xl",
        leading: "me-3 text-2xl",
        trailing: "ms-3 text-2xl",
        clearWrapper: "ms-3",
        clear: "text-2xl",
      },
    },
    shape: {
      none: {
        trigger: "rounded-none",
      },
      rounded: {
        trigger: "rounded-md",
      },
      pill: {
        trigger: "rounded-full",
      },
    },
    loading: {
      true: {
        trailing: "animate-spin text-primary-200",
      },
    },
    disabled: {
      true: {
        trigger:
          "pointer-events-none cursor-not-allowed border-black/10 bg-black/5 text-black/25 hover-active:border-black/10 hover-active:bg-black/5 hover-active:text-black/25",
        placeholder: "select-none text-black/25",
        leading: "text-black/25",
        trailing: "text-black/25",
      },
      false: {},
    },
  },
  defaultVariants: {
    size: "md",
    shape: "rounded",
  },
});

export type SelectVariants = {
  /**
   * @description The size of the Select, options: `sm`, `md`, `lg`, `xl`
   * @default "md"
   */
  size?: NonNullable<Parameters<typeof selectStyles>[0]>["size"];

  /**
   * @description The shape of Select, options: `rounded`, `pill`, `none`
   * @default "rounded"
   */
  shape?: NonNullable<Parameters<typeof selectStyles>[0]>["shape"];
};
