export const cardStyles = tv({
  slots: {
    root: "rounded-xl border border-neutral-300 bg-white",
    header: "border-b border-neutral-300 px-5 py-4 text-xl font-semibold",
    body: "p-5",
    footer: "px-5 py-4",
  },
  variants: {
    isThereHeader: {
      true: {
        body: "py-4",
      },
    },
  },
});

export type CardSlots = keyof Pick<typeof cardStyles, "slots">["slots"];
