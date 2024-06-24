import type { RouteLocationRaw } from "vue-router";
import type { ButtonVariants } from "./Button.styles";
import type { SlotProp, WithClass } from "@/utils";
import type { IconName } from "../Icon/Icon.props";

export type ButtonSlots = "root" | "leadingIcon" | "trailingIcon" | "loadingIcon";

export interface ButtonBaseProps extends ButtonVariants, SlotProp<ButtonSlots>, WithClass {
  /**
   * @desciption The icon to show before the button content.
   */
  leadingIcon?: IconName;

  /**
   * @description The icon to show after the button content.
   */
  trailingIcon?: IconName;

  /**
   * @description The icon to show when the button is in loading state.
   */
  loadingIcon?: IconName;

  /**
   * @description The placement of the loading icon when the button is in a loading state.
   */
  loadingPlacement?: "center" | "leading" | "trailing";

  /**
   * @description An alias for `to`. If used with `to`, href will be ignored
   */
  href?: string;

  /**
   * @description Any URL or a route location object from Vue Router
   */
  to?: string | RouteLocationRaw;
}

export type ButtonContentProps = Pick<ButtonBaseProps, "leadingIcon" | "trailingIcon"> & {
  leadingIconClass?: string;

  trailingIconClass?: string;
};

export type ButtonProps = Omit<ButtonBaseProps, "iconOnly">;
