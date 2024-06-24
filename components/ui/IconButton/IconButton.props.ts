import type { ButtonBaseProps } from "../Button/Button.props";
import type { SlotProp } from "@/utils";
import type { IconName } from "../Icon/Icon.props";

export type IconButtonSlots = "root" | "loadingIcon";

export type IconButtonProps = Omit<
  ButtonBaseProps,
  "iconOnly" | "loadingPlacement" | "leadingIcon" | "trailingIcon" | "slotClasses" | "uppercase"
> &
  SlotProp<IconButtonSlots> & {
    /**
     * @description Name of an icon, Use the `name` prop by following this pattern: `i-ri-{icon_name}`
     * @see https://icones.js.org/collection/ri
     */
    name: IconName;
  };
