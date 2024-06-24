import type { SliderRootEmits, SliderRootProps } from "radix-vue";
import type { TooltipProps } from "../Tooltip/Tooltip.props";
import type { SliderSlots, SliderVariants } from "./Slider.styles";
import type { SlotProp, WithClass } from "@/utils";

/**
 * API Reference SliderProps
 * @see https://www.radix-vue.com/components/slider.html#root
 */
export interface SliderProps
  extends Omit<SliderRootProps, "as" | "asChild" | "dir">,
    SliderVariants,
    SlotProp<SliderSlots>,
    WithClass {
  tooltip?: Pick<TooltipProps, "placement" | "withArrow"> | boolean;

  tooltipFormatter?: (value: number) => string;
}

/**
 * API Reference SliderEmits
 * @see https://www.radix-vue.com/components/slider.html#root
 */
export type SliderEmits = SliderRootEmits;
