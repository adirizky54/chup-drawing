export const emptyStyles = tv({
  slots: {
    root: "mx-2 my-8 text-center",
    icon: "mb-3 text-5xl text-gray-300",
    title: "mb-1.5 font-semibold text-gray-900",
    description: "text-sm text-gray-600",
    extra: "mt-4",
  },
});

export type EmptySlots = keyof Pick<typeof emptyStyles, "slots">["slots"];
