import type { ComboboxRootEmits, ComboboxRootProps } from "radix-vue";
import type { PopoverContentProps } from "../Popover/Popover.props";
import type { SelectVariants } from "./Select.styles";
import type { SlotProp } from "@/utils";
import type { IconName } from "../Icon/Icon.props";

export type RawValue = string | number;

export type LabeledValue = {
  [key: string]: any;
  label?: string;
  value?: string | number;
  disabled?: boolean;
  children?: LabeledValue[];
};

export type SelectValue = RawValue | RawValue[];

export type OptionAttribute = {
  value: string;
  label: string;
  search: string[] | null;
  children: string;
  groupLabel: string;
};

export type SelectSlots =
  | "root"
  | "placeholder"
  | "selected"
  | "leading"
  | "container"
  | "content"
  | "group"
  | "groupLabel"
  | "item"
  | "itemContainer"
  | "selectedIconWrapper"
  | "empty"
  | "emptyIcon"
  | "emptyDescription";

export interface SelectProps
  extends Pick<ComboboxRootProps, "multiple" | "name">,
    Pick<PopoverContentProps, "sameWidth">,
    SelectVariants,
    SlotProp<SelectSlots> {
  /**
   * @description If allow to remove Select content with clear icon
   * @default false
   */
  clearable?: boolean;

  /**
   * @description Clear the search input after close select
   * @default true
   */
  clearSearchOnClose?: boolean;

  /**
   * @description Enable/disable closing after selecting an option
   * @default true
   */
  closeOnSelect?: boolean;

  /**
   * @description Adjust delay emitting value `search` when props `internalSearch` is `false`
   * @default 300
   */
  debounce?: number;

  /**
   * @description The initial select value
   */
  defaultValue?: RawValue | RawValue[];

  /**
   * @description Disable select
   * @default false
   */
  disabled?: boolean;

  /**
   * @description The name of the object property that contains the group items
   * @default "children"
   */
  groupAttribute?: string;

  /**
   * @description Which attribute will render as group label
   * @default "label"
   */
  groupLabelAttribute?: string;

  /**
   * @description Hide selected indicator
   * @default false
   */
  hideSelectedIndicator?: boolean;

  /**
   * @description Decide whether to filter the results internally based on search query. Useful for async filtering, where we search through more complex data.
   * @default true
   */
  internalSearch?: boolean;

  /**
   * @description Which attribute value of option will render as content of Select
   * @default "label"
   */
  labelAttribute?: string;

  /**
   * @description The icon to show before the select trigger
   */
  leadingIcon?: IconName;

  /**
   * @description Indicate loading state
   * @default false
   */
  loading?: boolean;

  /**
   * @description Sets max-height content Select list
   * @default 256
   */
  maxHeight?: number;

  /**
   * @description The select value
   */
  modelValue?: RawValue | RawValue[];

  /**
   * @descripion Select options
   */
  options: LabeledValue[];

  /**
   * @description The placeholder displayed when the select is empty
   * @default "Select an option"
   */
  placeholder?: string;

  /**
   * @description The placeholder displayed on search box
   * @default "Search..."
   */
  placeholderSearch?: string;

  /**
   * @description Whether Select is searchable
   * @default false
   */
  searchable?: boolean;

  /**
   * @description Which attribute value of option will be used for filtering when `internalSearch` is true, if you don't set this prop
   * the default is `label` or based on prop `labelAttribute`
   * @default null
   */
  searchAttributes?: string[] | null;

  /**
   * @description Which attribute value of option will be value of Select
   * @default "value"
   */
  valueAttribute?: string;
}

export type SelectEmits = Pick<ComboboxRootEmits<RawValue | RawValue[]>, "update:modelValue"> & {
  search: [value: string];
};
