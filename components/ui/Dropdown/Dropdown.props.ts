import type {
  DropdownMenuContentEmits,
  DropdownMenuContentProps,
  DropdownMenuItemEmits,
  DropdownMenuItemProps,
  DropdownMenuRootEmits,
  DropdownMenuRootProps,
} from "radix-vue";
import type { Placement, SlotProp, WithClass } from "@/utils";
import type { IconName } from "../Icon/Icon.props";

/**
 * API Reference DropdownProps
 * @see https://www.radix-vue.com/components/dropdown-menu.html#root
 */
export type DropdownProps = DropdownMenuRootProps;

/**
 * API Reference DropdownEmits
 * @see https://www.radix-vue.com/components/dropdown-menu.html#root
 */
export type DropdownEmits = DropdownMenuRootEmits;

/**
 * API Reference DropdownContentProps
 * @see https://www.radix-vue.com/components/dropdown-menu.html#content
 */
export type DropdownContentProps = Omit<DropdownMenuContentProps, "side" | "align"> &
  WithClass & {
    /**
     * @description The placement of the Dropdown
     * @default "bottom-start"
     */
    placement?: Placement;
  };

/**
 * API Reference DropdownContentEmits
 * @see https://www.radix-vue.com/components/dropdown-menu.html#content
 */
export type DropdownContentEmits = DropdownMenuContentEmits;

export type DropdownItemSlots = "root" | "icon";

/**
 * API Reference DropdownItemProps
 * @see https://www.radix-vue.com/components/dropdown-menu.html#item
 */
export interface DropdownItemProps extends DropdownMenuItemProps, WithClass, SlotProp<DropdownItemSlots> {
  /**
   * @description The icon to show before the dropdown item content.
   */
  icon?: IconName;
}

/**
 * API Reference DropdownItemEmits
 * @see https://www.radix-vue.com/components/dropdown-menu.html#item
 */
export type DropdownItemEmits = DropdownMenuItemEmits;
