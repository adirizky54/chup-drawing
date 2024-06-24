export const buttonStyles = tv({
  slots: {
    root: "inline-flex cursor-pointer items-center justify-center transition focus:outline-none disabled:cursor-not-allowed disabled:shadow-none",
    icon: "",
    loadingContent: "inline-flex items-center justify-center opacity-0",
  },
  variants: {
    variant: {
      default: {
        root: [
          "border border-gray-300 bg-white text-gray-900 shadow-sm hover-active:bg-gray-50",
          "focus-visible:bg-gray-50",
          "disabled:hover:bg-white disabled:hover:text-gray-900",
        ],
      },
      solid: {
        root: "border text-white shadow-sm",
      },
      outline: {
        root: "border bg-transparent shadow-sm focus-visible:text-white disabled:hover:bg-transparent hover-active:text-white",
      },
      soft: {
        root: "border",
      },
      text: {
        root: [
          "border border-transparent bg-transparent text-neutral-950",
          "hover:border-neutral-100 hover:bg-neutral-100 focus-visible:border-neutral-100 focus-visible:bg-neutral-100 active:border-neutral-200 active:bg-neutral-200",
          "disabled:text-neutral-400 disabled:opacity-50 disabled:hover:border-transparent disabled:hover:bg-transparent disabled:hover:text-neutral-400",
        ],
      },
    },
    color: {
      primary: {},
      secondary: {},
      success: {},
      info: {},
      warning: {},
      danger: {},
      indigo: {},
      cobaltBlue: {},
    },
    size: {
      xs: {
        root: "h-8 gap-2",
        loadingContent: "gap-2",
      },
      sm: {
        root: "h-9 gap-2",
        loadingContent: "gap-2",
      },
      md: {
        root: "h-10 gap-2",
        loadingContent: "gap-2",
      },
      lg: {
        root: "h-11 gap-2",
        loadingContent: "gap-2",
      },
      xl: {
        root: "h-12 gap-2",
        loadingContent: "gap-2",
      },
    },
    shape: {
      none: {
        root: "rounded-none",
      },
      rounded: {
        root: "rounded-md",
      },
      pill: {
        root: "rounded-full",
      },
    },
    iconOnly: {
      true: {
        root: "p-0 leading-none",
      },
    },
    uppercase: {
      true: {
        root: "uppercase",
      },
    },
    block: {
      true: {
        root: "flex w-full",
      },
      false: {},
    },
    loading: {
      true: {
        root: "pointer-events-none select-none opacity-[.65]",
      },
    },
  },
  compoundVariants: [
    // variant solid + color
    {
      variant: "solid",
      color: "primary",
      class: {
        root: "border-primary-200 bg-primary-200 focus-visible:border-primary-100 focus-visible:bg-primary-100 hover-active:border-primary-100 hover-active:bg-primary-100",
      },
    },
    {
      variant: "solid",
      color: "secondary",
      class: {
        root: "border-secondary-200 bg-secondary-200 focus-visible:border-secondary-100 focus-visible:bg-secondary-100 hover-active:border-secondary-100 hover-active:bg-secondary-100",
      },
    },
    {
      variant: "solid",
      color: "success",
      class: {
        root: "border-success-200 bg-success-200 focus-visible:border-success-100 focus-visible:bg-success-100 hover-active:border-success-100 hover-active:bg-success-100",
      },
    },
    {
      variant: "solid",
      color: "info",
      class: {
        root: "border-info-200 bg-info-200 focus-visible:border-info-100 focus-visible:bg-info-100 hover-active:border-info-100 hover-active:bg-info-100",
      },
    },
    {
      variant: "solid",
      color: "warning",
      class: {
        root: "border-warning-200 bg-warning-200 focus-visible:border-warning-100 focus-visible:bg-warning-100 hover-active:border-warning-100 hover-active:bg-warning-100",
      },
    },
    {
      variant: "solid",
      color: "danger",
      class: {
        root: "border-error-200 bg-error-200 focus-visible:border-error-100 focus-visible:bg-error-100 hover-active:border-error-100 hover-active:bg-error-100",
      },
    },
    {
      variant: "solid",
      color: "indigo",
      class: {
        root: "border-indigo-200 bg-indigo-200 focus-visible:border-indigo-100 focus-visible:bg-indigo-100 hover-active:border-indigo-100 hover-active:bg-indigo-100",
      },
    },
    {
      variant: "solid",
      color: "cobaltBlue",
      class: {
        root: "bg-cobaltBlue-200 focus-visible:border-cobaltBlue-100 focus-visible:bg-cobaltBlue-100 hover-active:border-cobaltBlue-100 hover-active:bg-cobaltBlue-100",
      },
    },

    // variant outline + color
    {
      variant: "outline",
      color: "primary",
      class: {
        root: "border-primary-200 text-primary-200 focus-visible:bg-primary-200 hover-active:bg-primary-200",
      },
    },
    {
      variant: "outline",
      color: "secondary",
      class: {
        root: "border-secondary-200 text-secondary-200 focus-visible:bg-secondary-200 hover-active:bg-secondary-200",
      },
    },
    {
      variant: "outline",
      color: "success",
      class: {
        root: "border-success-200 text-success-200 focus-visible:bg-success-200 hover-active:bg-success-200",
      },
    },
    {
      variant: "outline",
      color: "info",
      class: {
        root: "border-info-200 text-info-200 focus-visible:bg-info-200 hover-active:bg-info-200",
      },
    },
    {
      variant: "outline",
      color: "warning",
      class: {
        root: "border-warning-200 text-warning-200 focus-visible:bg-warning-200 hover-active:bg-warning-200 ",
      },
    },
    {
      variant: "outline",
      color: "danger",
      class: {
        root: "border-error-200 text-error-200 focus-visible:bg-error-200 hover-active:bg-error-200",
      },
    },
    {
      variant: "outline",
      color: "indigo",
      class: {
        root: "border-indigo-200 text-indigo-200 focus-visible:bg-indigo-200 hover-active:bg-indigo-200",
      },
    },
    {
      variant: "outline",
      color: "cobaltBlue",
      class: {
        root: "border-cobaltBlue-200 text-cobaltBlue-200 focus-visible:bg-cobaltBlue-200 hover-active:bg-cobaltBlue-200",
      },
    },

    // variant soft + color
    {
      variant: "soft",
      color: "primary",
      class: {
        root: "border-primary-0 bg-primary-0 text-primary-200 focus-visible:border-primary-200 focus-visible:bg-primary-200 focus-visible:text-white hover-active:border-primary-200 hover-active:bg-primary-200 hover-active:text-white",
      },
    },
    {
      variant: "soft",
      color: "secondary",
      class: {
        root: "border-secondary-0 bg-secondary-0 text-secondary-200 focus-visible:border-secondary-200 focus-visible:bg-secondary-200 focus-visible:text-white hover-active:border-secondary-200 hover-active:bg-secondary-200 hover-active:text-white",
      },
    },
    {
      variant: "soft",
      color: "success",
      class: {
        root: "border-success-0 bg-success-0 text-success-200 focus-visible:border-success-200 focus-visible:bg-success-200 focus-visible:text-white hover-active:border-success-200 hover-active:bg-success-200 hover-active:text-white",
      },
    },
    {
      variant: "soft",
      color: "info",
      class: {
        root: "border-info-0 bg-info-0 text-info-200 focus-visible:border-info-200 focus-visible:bg-info-200 focus-visible:text-white hover-active:border-info-200 hover-active:bg-info-200 hover-active:text-white",
      },
    },
    {
      variant: "soft",
      color: "warning",
      class: {
        root: "border-warning-0 bg-warning-0 text-warning-200 focus-visible:border-warning-200 focus-visible:bg-warning-200 focus-visible:text-white hover-active:border-warning-200 hover-active:bg-warning-200 hover-active:text-white",
      },
    },
    {
      variant: "soft",
      color: "danger",
      class: {
        root: "border-error-0 bg-error-0 text-error-200 focus-visible:border-error-200 focus-visible:bg-error-200 focus-visible:text-white hover-active:border-error-200 hover-active:bg-error-200 hover-active:text-white",
      },
    },
    {
      variant: "soft",
      color: "indigo",
      class: {
        root: "border-indigo-0 bg-indigo-0 text-indigo-200 focus-visible:border-indigo-200 focus-visible:bg-indigo-200 focus-visible:text-white hover-active:border-indigo-200 hover-active:bg-indigo-200 hover-active:text-white",
      },
    },
    {
      variant: "soft",
      color: "cobaltBlue",
      class: {
        root: "border-cobaltBlue-0 bg-cobaltBlue-0 text-cobaltBlue-200 focus-visible:border-cobaltBlue-200 focus-visible:bg-cobaltBlue-200 focus-visible:text-white hover-active:border-cobaltBlue-200 hover-active:bg-cobaltBlue-200 hover-active:text-white",
      },
    },

    // variant + disabled
    {
      variant: ["default", "solid", "outline", "soft"],
      class: {
        root: "disabled:border disabled:border-black/10 disabled:bg-black/5 disabled:text-black/25 disabled:hover:border-black/10 disabled:hover:bg-black/5 disabled:hover:text-black/25",
      },
    },

    // button
    { iconOnly: false, block: false, class: { root: "w-auto" } },
    {
      size: "xs",
      iconOnly: false,
      class: { root: "px-2.5 text-xs", icon: "text-base" },
    },
    {
      size: "sm",
      iconOnly: false,
      class: { root: "px-2.5 text-sm", icon: "text-base" },
    },
    {
      size: "md",
      iconOnly: false,
      class: { root: "px-3 text-base", icon: "text-lg" },
    },
    {
      size: "lg",
      iconOnly: false,
      class: { root: "px-3.5 text-lg", icon: "text-xl" },
    },
    {
      size: "xl",
      iconOnly: false,
      class: { root: "px-4 text-xl", icon: "text-2xl" },
    },

    // icon only button
    { size: "xs", iconOnly: true, class: { root: "text-base" } },
    { size: "sm", iconOnly: true, class: { root: "text-base" } },
    { size: "md", iconOnly: true, class: { root: "text-lg" } },
    { size: "lg", iconOnly: true, class: { root: "text-xl" } },
    { size: "xl", iconOnly: true, class: { root: "text-2xl" } },

    // squared icon only button
    { size: "xs", iconOnly: true, block: false, class: { root: "w-8" } },
    { size: "sm", iconOnly: true, block: false, class: { root: "w-9" } },
    { size: "md", iconOnly: true, block: false, class: { root: "w-10" } },
    { size: "lg", iconOnly: true, block: false, class: { root: "w-11" } },
    { size: "xl", iconOnly: true, block: false, class: { root: "w-12" } },
  ],
  defaultVariants: {
    size: "md",
    shape: "rounded",
  },
});

export type ButtonVariants = {
  /**
   * @description The visual style of the Button
   * @default "default"
   */
  variant?: NonNullable<Parameters<typeof buttonStyles>[0]>["variant"];

  /**
   * @description The color of the Button
   */
  color?: NonNullable<Parameters<typeof buttonStyles>[0]>["color"];

  /**
   * @description The size of the Button
   * @default "md"
   */
  size?: NonNullable<Parameters<typeof buttonStyles>[0]>["size"];

  /**
   * @description The shape of Button
   * @default "rounded"
   */
  shape?: NonNullable<Parameters<typeof buttonStyles>[0]>["shape"];

  iconOnly?: NonNullable<Parameters<typeof buttonStyles>[0]>["iconOnly"];

  /**
   * @description Set button text to uppercase
   * @default false
   */
  uppercase?: NonNullable<Parameters<typeof buttonStyles>[0]>["uppercase"];

  /**
   * @description Option to fit button width to its parent width
   * @default false
   */
  block?: NonNullable<Parameters<typeof buttonStyles>[0]>["block"];

  /**
   * @description Set the loading status of button
   * @default false
   */
  loading?: NonNullable<Parameters<typeof buttonStyles>[0]>["loading"];
};
