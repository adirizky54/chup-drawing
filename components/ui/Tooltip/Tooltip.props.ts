import type {
  TooltipContentProps as RTooltipContentProps,
  TooltipContentEmits as RTooltipContentEmits,
  TooltipRootProps,
  TooltipRootEmits,
} from "radix-vue";
import type { TooltipSlots } from "./Tooltip.styles";
import type { Placement, SlotProp, WithClass } from "@/utils";

/**
 * API Reference TooltipProps
 * @see https://www.radix-vue.com/components/tooltip.html
 */
export interface TooltipProps
  extends TooltipRootProps,
    Omit<RTooltipContentProps, "side" | "align" | "as" | "asChild">,
    SlotProp<TooltipSlots>,
    WithClass {
  /**
   * @description The placement of the Tooltip.
   * @default "top-center"
   */
  placement?: Placement;

  /**
   * @description The text shown in the tooltip.
   */
  content?: string;

  /**
   * @description Determines whether the tooltip should have an arrow.
   * @default true
   */
  withArrow?: boolean;
}

export type TooltipEmits = TooltipRootEmits & RTooltipContentEmits;

export interface TooltipContentProps
  extends Omit<RTooltipContentProps, "side" | "align" | "as" | "asChild">,
    SlotProp<TooltipSlots>,
    WithClass {
  /**
   * @description The placement of the Tooltip.
   * @default "top-center"
   */
  placement?: Placement;

  /**
   * @description The text shown in the tooltip.
   */
  content?: string;

  /**
   * @description Determines whether the tooltip should have an arrow.
   * @default true
   */
  withArrow?: boolean;
}

export type TooltipContentEmits = RTooltipContentEmits;
