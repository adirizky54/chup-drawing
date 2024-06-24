import type { CardSlots } from "./Card.styles";
import type { SlotProp, WithClass } from "@/utils";

export interface CardProps extends SlotProp<CardSlots>, WithClass {
  /**
   * @description Card Header
   */
  header?: string;
}
