export const dividerStyles = tv({
  slots: {
    root: "relative flex w-full items-center gap-4",
    dividerLeft: "relative w-1/2 border border-neutral-300",
    dividerRight: "relative w-1/2 border border-neutral-300",
    title: "whitespace-nowrap",
  },
  variants: {
    orientation: {
      left: {
        dividerLeft: "w-[21px]",
        dividerRight: "w-full",
      },
      right: {
        dividerLeft: "w-full",
        dividerRight: "w-[21px]",
      },
    },
    types: {
      vertical: {
        root: "min-h-3 border border-neutral-300",
      },
      horizontal: {},
    },
    dashed: {
      true: {
        dividerLeft: "border-dashed",
        dividerRight: "border-dashed",
      },
    },
    isThereTitle: {
      false: {
        root: "relative w-full border border-neutral-300",
      },
    },
  },
  compoundVariants: [
    {
      isThereTitle: false,
      dashed: true,
      class: {
        root: "border-dashed",
      },
    },
    {
      types: "vertical",
      dashed: true,
      class: {
        root: "border-dashed",
      },
    },
    {
      types: "vertical",
      class: {
        root: "w-px",
      },
    },
  ],
});

export type DividerSlots = keyof Pick<typeof dividerStyles, "slots">["slots"];

export type DividerVariants = {
  orientation?: keyof (typeof dividerStyles)["variants"]["orientation"];
  dashed?: boolean;
  types?: keyof (typeof dividerStyles)["variants"]["types"];
};
