<script lang="ts" setup>
  import { useForwardPropsEmits } from "radix-vue";
  import type { HtmlHTMLAttributes } from "vue";
  import { injectInputGroupContext } from "../InputGroup/InputGroup.vue";
  import type { OptionAttribute, SelectEmits, SelectProps, SelectSlots, LabeledValue, RawValue } from "./Select.props";
  import { selectStyles } from "./Select.styles";
  import { useFilteredOptions, useCachedValue } from "./hooks";

  const staticClass = makeStaticClass<SelectSlots>("select");

  defineOptions({
    inheritAttrs: false,
  });

  const props = withDefaults(defineProps<SelectProps>(), {
    clearable: false,
    clearSearchOnClose: true,
    closeOnSelect: true,
    debounce: 300,
    groupAttribute: "children",
    groupLabelAttribute: "label",
    hideSelectedIndicator: false,
    internalSearch: true,
    labelAttribute: "label",
    maxHeight: 256,
    multiple: false,
    sameWidth: true,
    size: "md",
    shape: "rounded",
    placeholder: "Select an option",
    placeholderSearch: "Search...",
    searchable: false,
    searchAttributes: null,
    valueAttribute: "value",
  });
  const emits = defineEmits<SelectEmits>();

  const inputGroupContext = injectInputGroupContext();

  const local = reactiveOmit(props, "multiple", "name", "shape", "size");
  const variantProps = reactivePick(props, "size", "shape");
  const listBoxProps = reactivePick(props, "multiple", "name");

  const styles = computed(() =>
    selectStyles({
      ...variantProps,
      ...inputGroupContext,
      disabled: local.disabled,
      loading: local.loading,
    })
  );

  const forwarded = useForwardPropsEmits(listBoxProps, emits);

  const open = ref(false);
  const modelValue = useVModel(props, "modelValue", emits, {
    passive: true,
    defaultValue: props.defaultValue,
    deep: true,
  });
  const search = ref("");

  const optionAttribute = computed<OptionAttribute>(() => ({
    value: local.valueAttribute,
    label: local.labelAttribute,
    search: local.searchAttributes,
    children: local.groupAttribute,
    groupLabel: local.groupLabelAttribute,
  }));

  const groupLabelOption = (option: LabeledValue) => {
    return getValueByNestedKey(option, optionAttribute.value.groupLabel) as RawValue;
  };

  const valueOption = (option: LabeledValue) => {
    return getValueByNestedKey(option, optionAttribute.value.value) as RawValue;
  };

  const labelOption = (option: LabeledValue) => {
    return getValueByNestedKey(option, optionAttribute.value.label) as RawValue;
  };

  const filteredOptions = useFilteredOptions(
    toRef(local, "options"),
    optionAttribute,
    search,
    toRef(local, "internalSearch")
  );

  const cachedValue = useCachedValue(
    modelValue,
    toRef(local, "options"),
    toRef(listBoxProps, "multiple"),
    optionAttribute
  );

  const clearSearchOnClose = () => {
    if (local.clearSearchOnClose) {
      search.value = "";
    }
  };

  const closeOnSelect = () => {
    if (local.closeOnSelect) {
      open.value = false;
    }
  };

  watch(open, (value) => {
    if (!value) {
      clearSearchOnClose();
    }
  });

  watchDebounced(
    search,
    (value) => {
      if (typeof local.internalSearch === "boolean" && local.internalSearch === false) {
        emits("search", value);
      }
    },
    { debounce: local.debounce }
  );
</script>

<template>
  <UiPopover v-model:open="open">
    <UiPopoverTrigger>
      <div
        :id="$attrs.id as HtmlHTMLAttributes['id']"
        role="button"
        :class="
          styles.trigger({
            class: [staticClass('root'), local.slotClasses?.root, $attrs?.class as string],
          })
        "
        :aria-expanded="open"
        :aria-invalid="$attrs['aria-invalid'] as HtmlHTMLAttributes['aria-invalid']"
        :aria-describedby="$attrs['aria-describedby'] as HtmlHTMLAttributes['aria-describedby']"
        :tabindex="local.disabled === true ? undefined : 0"
      >
        <template v-if="typeof local.leadingIcon !== 'undefined'">
          <span
            :class="
              styles.leading({
                class: [staticClass('leading'), local.slotClasses?.leading],
              })
            "
          >
            <UiIcon :name="local.leadingIcon" />
          </span>
        </template>

        <template v-if="typeof cachedValue === 'undefined' || (Array.isArray(cachedValue) && !cachedValue.length)">
          <span
            :class="
              styles.placeholder({
                class: [staticClass('placeholder'), local.slotClasses?.placeholder],
              })
            "
          >
            {{ local.placeholder }}
          </span>
        </template>

        <template v-else>
          <slot name="selected" :value="cachedValue">
            <span
              v-if="props.multiple && Array.isArray(cachedValue) && cachedValue.length"
              :class="
                styles.selected({
                  class: [staticClass('selected'), local.slotClasses?.selected],
                })
              "
            >
              {{ cachedValue.length }} selected
            </span>

            <span
              v-else
              :class="
                styles.selected({
                  class: [staticClass('selected'), local.slotClasses?.selected],
                })
              "
            >
              {{ labelOption(cachedValue) }}
            </span>
          </slot>
        </template>

        <template v-if="local.clearable && local.disabled === false && typeof cachedValue !== 'undefined'">
          <span :class="styles.clearWrapper()">
            <button :class="styles.clear()" type="button" tabindex="-1" @click.stop="modelValue = undefined">
              <UiIcon name="i-ri-close-circle-fill" />
            </button>
          </span>
        </template>

        <span :class="styles.trailing()">
          <UiIcon :name="local.loading ? 'i-ri-loader-4-line' : 'i-ri-expand-up-down-line'" />
        </span>
      </div>
    </UiPopoverTrigger>

    <UiPopoverContent :slot-classes="{ content: 'p-0' }" :same-width="local.sameWidth">
      <RListboxRoot
        v-bind="forwarded"
        v-model="modelValue"
        :class="
          styles.select({
            class: [staticClass('container'), local.slotClasses?.container],
          })
        "
        :highlight-on-hover="true"
        :selection-behavior="listBoxProps.multiple ? 'toggle' : 'replace'"
      >
        <template v-if="local.searchable">
          <div class="flex items-center border-b">
            <UiInput
              v-model="search"
              :placeholder="local.placeholderSearch"
              name="q"
              size="md"
              leading-icon="i-ri-search-2-line"
              class="!border-transparent pt-[7px] !ring-0 !ring-transparent"
            />
          </div>
        </template>

        <RListboxContent
          :class="
            styles.selectContent({
              class: [staticClass('content'), local.slotClasses?.content],
            })
          "
          :style="{ maxHeight: `${local.maxHeight}px` }"
        >
          <template v-if="filteredOptions.length > 0">
            <template v-for="(option, index) in filteredOptions">
              <RListboxGroup
                v-if="Array.isArray(option[local.groupAttribute])"
                :key="`group-${index}`"
                :class="
                  styles.selectGroup({
                    class: [staticClass('group'), local.slotClasses?.group],
                  })
                "
              >
                <RListboxGroupLabel
                  :class="
                    styles.selectGroupLabel({
                      class: [staticClass('groupLabel'), local.slotClasses?.groupLabel],
                    })
                  "
                >
                  <slot name="group-label" :label="groupLabelOption(option)" :options="option[local.groupAttribute]">
                    {{ groupLabelOption(option) }}
                  </slot>
                </RListboxGroupLabel>

                <RListboxItem
                  v-for="(optionGroupItem, indexGroupItem) in option[local.groupAttribute]"
                  :key="`group-${index}-item-${indexGroupItem}`"
                  :class="
                    styles.selectItem({
                      class: [staticClass('item'), local.slotClasses?.item],
                    })
                  "
                  :value="valueOption(optionGroupItem)"
                  :disabled="optionGroupItem.disabled"
                  @select="closeOnSelect()"
                >
                  <div
                    :class="
                      styles.selectItemContainer({
                        class: [staticClass('itemContainer'), local.slotClasses?.itemContainer],
                      })
                    "
                  >
                    <slot name="option" :option="optionGroupItem">
                      <span class="truncate">{{ labelOption(optionGroupItem) }}</span>
                    </slot>
                  </div>

                  <div
                    v-if="!local.hideSelectedIndicator"
                    :class="
                      styles.selectSelectedIconWrapper({
                        class: [staticClass('selectedIconWrapper'), local.slotClasses?.selectedIconWrapper],
                      })
                    "
                  >
                    <RListboxItemIndicator as-child>
                      <UiIcon name="i-ri-check-line" />
                    </RListboxItemIndicator>
                  </div>
                </RListboxItem>

                <RSeparator v-if="filteredOptions.length - 1 !== index" class="my-1 h-px bg-gray-200" />
              </RListboxGroup>

              <RListboxItem
                v-else
                :key="`item-${index}`"
                :class="
                  styles.selectItem({
                    class: [staticClass('item'), local.slotClasses?.item],
                  })
                "
                :value="valueOption(option)"
                :disabled="option.disabled"
                @select="closeOnSelect()"
              >
                <div
                  :class="
                    styles.selectItemContainer({
                      class: [staticClass('itemContainer'), local.slotClasses?.itemContainer],
                    })
                  "
                >
                  <slot name="option" :option="option">
                    <span class="truncate">{{ labelOption(option) }}</span>
                  </slot>
                </div>

                <div
                  v-if="!local.hideSelectedIndicator"
                  :class="
                    styles.selectSelectedIconWrapper({
                      class: [staticClass('selectedIconWrapper'), local.slotClasses?.selectedIconWrapper],
                    })
                  "
                >
                  <RListboxItemIndicator as-child>
                    <UiIcon name="i-ri-check-line" />
                  </RListboxItemIndicator>
                </div>
              </RListboxItem>
            </template>
          </template>

          <div
            v-else
            :class="
              styles.selectEmpty({
                class: [staticClass('empty'), local.slotClasses?.empty],
              })
            "
          >
            <slot name="option-empty" :searchable="local.searchable" :search="search">
              <template v-if="local.searchable && search">
                <UiIcon
                  name="i-ri-search-2-line"
                  :class="
                    styles.selectEmptyIcon({
                      class: [staticClass('emptyIcon'), local.slotClasses?.emptyIcon],
                    })
                  "
                />
                <p
                  :class="
                    styles.selectEmptyDescription({
                      class: [staticClass('emptyDescription'), local.slotClasses?.emptyDescription],
                    })
                  "
                >
                  No result for "{{ search }}"
                </p>
              </template>

              <template v-else>
                <UiIcon
                  name="i-ri-inbox-2-fill"
                  :class="
                    styles.selectEmptyIcon({
                      class: [staticClass('emptyIcon'), local.slotClasses?.emptyIcon],
                    })
                  "
                />
                <p
                  :class="
                    styles.selectEmptyDescription({
                      class: [staticClass('emptyDescription'), local.slotClasses?.emptyDescription],
                    })
                  "
                >
                  No Data
                </p>
              </template>
            </slot>
          </div>
        </RListboxContent>
      </RListboxRoot>
    </UiPopoverContent>
  </UiPopover>
</template>
