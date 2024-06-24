import type { DividerSlots, DividerVariants } from "./Divider.styles";
import type { SlotProp, WithClass } from "@/utils";

export type DividerProps = WithClass & SlotProp<DividerSlots> & DividerVariants;
