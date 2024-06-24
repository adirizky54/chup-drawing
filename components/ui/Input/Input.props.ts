import type { InputVariants } from "./Input.styles";
import type { SlotProp, WithClass } from "@/utils";
import type { IconName } from "../Icon/Icon.props";

export type InputSlots = "root" | "input" | "leading" | "trailing";

export interface InputProps extends InputVariants, SlotProp<InputSlots>, WithClass {
  /**
   * Attribute identifies the element (or elements) that describes the element on which the attribute is set
   */
  ariaDescribedby?: string;

  /**
   * State indicates the entered value does not conform to the format expected by the application.
   */
  ariaInvalid?: boolean;

  /**
   * @description Whether the input is clearable
   * @default false
   */
  clearable?: boolean;

  /**
   * @description The initial input content
   */
  defaultValue?: string | number | null;

  /**
   * @description Whether the input is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * @description The ID for input
   */
  id?: string;

  /**
   * @description The icon to show before the input content
   */
  leadingIcon?: IconName;

  /**
   * @description The input content value
   */
  modelValue?: string | number | null;

  /**
   * @description The name of the input, used when submitting an HTML form
   */
  name?: string;

  /**
   * @description The placeholder displayed when the input is empty
   */
  placeholder?: string;

  /**
   * @description The icon to show after the input content
   */
  trailingIcon?: IconName;

  /**
   * @description The type of input
   * @default "text"
   */
  type?: "text" | "email" | "number" | "password" | "tel";
}

export type InputEmits = {
  (e: "update:modelValue", value?: string | number): void;
};

export type InputPasswordSlots = "root" | "input" | "leading";

export interface InputPasswordProps
  extends Omit<InputProps, "slotClasses" | "trailingIcon" | "type">,
    SlotProp<InputPasswordSlots> {}

export interface InputSearchProps extends Omit<InputProps, "slotClasses" | "type"> {
  /**
   * @description Search box with loading.
   * @default false
   */
  loading?: boolean;
}

export type InputSearchEmits = InputEmits & {
  (e: "search", value?: string): void;
};
