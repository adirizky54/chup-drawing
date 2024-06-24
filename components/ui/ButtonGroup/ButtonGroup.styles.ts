export const buttonGroupStyles = tv({
  base: [
    "relative inline-flex h-auto",
    "[&>*:first-of-type:not(:last-of-type)]:rounded-r-none [&>*:first-of-type:not(:last-of-type)]:border-e-[1px]",
    "[&>*:not(:first-of-type):not(:last-of-type)]:rounded-none [&>*:not(:first-of-type):not(:last-of-type)]:border-s-0",
    "[&>*:not(:first-of-type):last-of-type]:rounded-l-none [&>*:not(:first-of-type):last-of-type]:border-s-0",
    "[&>.chup-button:focus-visible]:z-[2]",
  ],
  variants: {
    block: {
      true: "w-full",
    },
  },
  defaultVariants: {
    block: false,
  },
});
