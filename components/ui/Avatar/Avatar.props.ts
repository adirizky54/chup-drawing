import type { SlotProp, WithClass } from "@/utils";
import type { IconName } from "../Icon/Icon.props";
import type { AvatarSlots, AvatarVariants } from "./Avatar.styles";

/**
 * API Reference AvatarProps
 * @see https://www.radix-vue.com/components/avatar.html#root
 */
export interface AvatarProps extends AvatarVariants, SlotProp<AvatarSlots>, WithClass {
  /**
   * @description Image url, if the image cannot be loaded or null, then placeholder is displayed instead
   */
  src?: string;

  /**
   * @description Image alt attribute, also used as title attribute for placeholder
   */
  alt?: string;

  /**
   * @description This property can be used to specify an icon to be displayed in the avatar
   */
  icon?: IconName;
}
