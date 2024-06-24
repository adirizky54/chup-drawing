import type { LabeledValue, OptionAttribute, SelectProps } from "../Select.props";

/**
 * A utility function to cache the value, then uses a computed function to
 * determine whether the given value is valid or not. If the value is not present in the
 * options list, it will return the previously cached value or a new object with value
 * and label matching the original value.
 *
 * @param value - a value to be compared.
 * @param options - an array of object with the option values.
 * @param multiple - boolean that determine if the options is a single value (false) or an array of values (true).
 * @param optionAttribute - a value to specify the attribute of the options.
 * @returns a cache value that correspond to the given value.
 */
export const useCachedValue = (
  value: Ref<SelectProps["modelValue"]>,
  options: Ref<SelectProps["options"]>,
  multiple: Ref<SelectProps["multiple"]>,
  optionAttribute: ComputedRef<OptionAttribute>
) => {
  const cacheValue = shallowRef<LabeledValue | LabeledValue[]>();

  const filledLabeledValues = (rawValue: SelectProps["modelValue"]) => {
    if (typeof rawValue !== "undefined") {
      if (multiple.value && Array.isArray(rawValue)) {
        const mergedValues: LabeledValue[] = [];

        for (const v of rawValue) {
          let option: LabeledValue | undefined;

          for (const obj of options.value) {
            if (Array.isArray(obj[optionAttribute.value.children]) && obj[optionAttribute.value.children].length > 0) {
              for (const optionChildren of obj[optionAttribute.value.children]) {
                if (getValueByNestedKey(optionChildren, optionAttribute.value.value) === v) {
                  option = optionChildren;
                }
              }
            }

            if (getValueByNestedKey(obj, optionAttribute.value.value) === v) {
              option = obj;
            }
          }

          if (typeof option !== "undefined") {
            mergedValues.push(option);
          } else {
            // if selected value doesn't exist on option list
            const prevCacheValue = cacheValue.value;

            // if selected value same as cache value
            if (typeof prevCacheValue !== "undefined") {
              if (Array.isArray(prevCacheValue)) {
                let optionPrevCacheValue: LabeledValue | undefined;

                for (const obj of prevCacheValue) {
                  if (getValueByNestedKey(obj, optionAttribute.value.value) === v) {
                    optionPrevCacheValue = obj;
                  }
                }

                if (typeof optionPrevCacheValue !== "undefined") {
                  mergedValues.push(optionPrevCacheValue);
                }
              }
            } else {
              // if selected value isn't same with cache value or option list still fetching will return this object
              mergedValues.push({
                [optionAttribute.value.value]: v,
                [optionAttribute.value.label]: v,
              });
            }
          }
        }

        return mergedValues;
      } else {
        let option: LabeledValue | undefined;

        for (const obj of options.value) {
          if (Array.isArray(obj[optionAttribute.value.children]) && obj[optionAttribute.value.children].length > 0) {
            for (const optionChildren of obj[optionAttribute.value.children]) {
              if (getValueByNestedKey(optionChildren, optionAttribute.value.value) === rawValue) {
                option = optionChildren;
              }
            }
          }

          if (getValueByNestedKey(obj, optionAttribute.value.value) === rawValue) {
            option = obj;
          }
        }

        // if selected value exist on option list
        if (typeof option !== "undefined") {
          return option;
        } else {
          // if selected value doesn't exist on option list
          const prevCacheValue = cacheValue.value;

          // if selected value same as cache value
          if (typeof prevCacheValue !== "undefined") {
            if (!Array.isArray(prevCacheValue)) {
              if (prevCacheValue[optionAttribute.value.value] === rawValue) {
                return prevCacheValue;
              }
            }
          } else {
            // if selected value isn't same with cache value or option list still fetching will return this object
            return {
              [optionAttribute.value.value]: rawValue,
              [optionAttribute.value.label]: rawValue,
            };
          }
        }
      }
    }
  };

  watchEffect(() => {
    cacheValue.value = filledLabeledValues(value.value);
  });

  return cacheValue;
};
