import type {
  PopoverRootEmits,
  PopoverRootProps,
  PopoverContentEmits as RPopoverContentEmits,
  PopoverContentProps as RPopoverContentProps,
} from "radix-vue";
import type { Placement, SlotProp, WithClass } from "@/utils";
import type { PopoverSlots } from "./Popover.styles";

/**
 * API Reference PopoverProps
 * @see https://www.radix-vue.com/components/popover.html#root
 */
export type PopoverProps = PopoverRootProps;

/**
 * API Reference PopoverEmits
 * @see https://www.radix-vue.com/components/popover.html#root
 */
export type PopoverEmits = PopoverRootEmits;

/**
 * API Reference PopoverContentProps
 * @see https://www.radix-vue.com/components/popover.html#content
 */
export type PopoverContentProps = Omit<RPopoverContentProps, "side" | "align"> &
  WithClass &
  SlotProp<PopoverSlots> & {
    /**
     * @description The placement of the Popover
     * @default "bottom-start"
     */
    placement?: Placement;

    /**
     * @description Whether the menu content should have the same width as the trigger element
     * @default false
     */
    sameWidth?: boolean;
  };

/**
 * API Reference PopoverContentEmits
 * @see https://www.radix-vue.com/components/popover.html#content
 */
export type PopoverContentEmits = RPopoverContentEmits;
