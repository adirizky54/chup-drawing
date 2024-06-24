import type { LabeledValue, OptionAttribute } from "../Select.props";

const includes = (test: string, search: string) => {
  return toArray(test).join("").toLowerCase().includes(search);
};

/**
 * Returns options that match the given search criteria.
 * This function is using a regular expression to search for matches.
 *
 * @param options - options array to filter.
 * @param optionAttribute - attribute to filter by.
 * @param search - search value.
 * @param internalSearch - whether to enable internal search.
 * @returns filtered options based on given search criteria.
 */
export const useFilteredOptions = (
  options: Ref<LabeledValue[]>,
  optionAttribute: ComputedRef<OptionAttribute>,
  search: Ref<string>,
  internalSearch: Ref<boolean>
) =>
  computed(() => {
    const lowerSearch = search.value.toLowerCase();
    const filteredOptions: LabeledValue[] = [];

    if (typeof internalSearch.value === "boolean" && internalSearch.value === false) {
      return options.value;
    }

    if (search.value === "") {
      return options.value;
    }

    const filterFunc = (option: LabeledValue) => {
      if (option[optionAttribute.value.children]) {
        return includes(String(option[optionAttribute.value.groupLabel]), lowerSearch);
      }

      return (optionAttribute.value.search?.length ? optionAttribute.value.search : [optionAttribute.value.label]).some(
        (searchAttribute) => {
          const child = getObject(option, searchAttribute);

          return includes(child, lowerSearch);
        }
      );
    };

    for (const option of options.value) {
      // Group should check child options
      if (Array.isArray(option[optionAttribute.value.children]) && option[optionAttribute.value.children].length > 0) {
        // Check group first
        const matchGroup = filterFunc(option);

        if (matchGroup) {
          filteredOptions.push(option);
        } else {
          // Check option
          const subOptions: LabeledValue[] = [];

          for (const optionChildren of option[optionAttribute.value.children]) {
            if (filterFunc(optionChildren)) {
              subOptions.push(optionChildren as LabeledValue);
            }
          }

          if (subOptions.length) {
            filteredOptions.push({
              ...option,
              [optionAttribute.value.children]: subOptions,
            });
          }
        }

        continue;
      }

      if (filterFunc(option)) {
        filteredOptions.push(option);
      }
    }

    return filteredOptions;
  });
