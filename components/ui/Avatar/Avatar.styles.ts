export const avatarStyles = tv({
  slots: {
    root: "relative inline-flex flex-shrink-0 items-center justify-center bg-neutral-200",
    image: "h-[inherit] w-[inherit] rounded-[inherit] object-cover",
    alt: "truncate font-sans leading-none text-neutral-950",
    icon: "flex-shrink-0 text-neutral-700",
  },
  variants: {
    size: {
      xs: {
        root: "size-6",
        alt: "text-xs/[18px]",
      },
      sm: {
        root: "size-8",
        alt: "text-sm/[21px]",
      },
      md: {
        root: "size-10",
        alt: "text-base",
      },
      lg: {
        root: "size-12",
        alt: "text-lg/[27px]",
      },
      xl: {
        root: "size-14",
        alt: "text-xl/[30px]",
      },
    },
    shape: {
      none: {
        root: "rounded-none",
      },
      rounded: {
        root: "rounded-md",
      },
      circle: {
        root: "rounded-full",
      },
    },
    hasImage: {
      true: {
        root: "border-0",
      },
    },
    isIcon: {
      true: {},
    },
  },
  compoundVariants: [
    // icon avatar
    { size: "xs", isIcon: true, class: { icon: "size-5" } },
    { size: "sm", isIcon: true, class: { icon: "size-6" } },
    { size: "md", isIcon: true, class: { icon: "size-7" } },
    { size: "lg", isIcon: true, class: { icon: "size-8" } },
    { size: "xl", isIcon: true, class: { icon: "size-9" } },
  ],
  defaultVariants: {
    size: "md",
    shape: "rounded",
  },
});

export type AvatarSlots = keyof Pick<typeof avatarStyles, "slots">["slots"];

export type AvatarVariants = {
  /**
   * @description The size of the Avatar, options: `xs`, `sm`, `md`, `lg`, `xl`
   * @default "md"
   */
  size?: NonNullable<Parameters<typeof avatarStyles>[0]>["size"];

  /**
   * @description The shape of Avatar, options: `rounded`, `circle`, `none`
   * @default "rounded"
   */
  shape?: NonNullable<Parameters<typeof avatarStyles>[0]>["shape"];
};
