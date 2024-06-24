import type { IconName } from "../Icon/Icon.props";
import type { EmptySlots } from "./Empty.styles";
import type { SlotProp, WithClass } from "@/utils";

export interface EmptyProps extends SlotProp<EmptySlots>, WithClass {
  /**
   * Customize title
   */
  icon?: IconName;

  /**
   * Customize title
   */
  title?: string;

  /**
   * Customize description
   */
  description?: string;
}
