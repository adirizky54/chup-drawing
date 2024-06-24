<script lang="ts" setup>
  import type { IconName } from "../Icon/Icon.props";
  import { injectInputGroupContext } from "../InputGroup/InputGroup.vue";
  import type { InputEmits, InputProps, InputSlots } from "./Input.props";
  import { inputStyles } from "./Input.styles";

  defineOptions({
    inheritAttrs: false,
  });

  const staticClass = makeStaticClass<InputSlots>("input");

  const props = withDefaults(defineProps<InputProps>(), {
    clearable: false,
    disabled: false,
    shape: "rounded",
    size: "md",
    type: "text",
  });
  const emits = defineEmits<InputEmits>();
  const slots = defineSlots<{
    leading?(): unknown;
    trailing?(): unknown;
  }>();

  const inputGroupContext = injectInputGroupContext();

  const local = reactivePick(
    props,
    "ariaDescribedby",
    "ariaInvalid",
    "class",
    "slotClasses",
    "clearable",
    "leadingIcon",
    "trailingIcon"
  );
  const variantProps = reactivePick(props, "size", "shape");
  const inputProps = reactivePick(props, "disabled", "id", "name", "placeholder", "type");

  const inputRef = shallowRef<HTMLInputElement>();

  const { focused } = useFocus(inputRef);

  const hasAdditional = computed(() => {
    return [local.leadingIcon, slots.leading, local.trailingIcon, slots.trailing].some(
      (el) => typeof el !== "undefined"
    );
  });

  const styles = computed(() =>
    inputStyles({
      ...variantProps,
      ...inputGroupContext,
      isDisabled: inputProps.disabled,
      isFocused: focused.value,
      hasAdditional: hasAdditional.value || local.clearable === true,
    })
  );

  const modelValue = useVModel(props, "modelValue", emits, {
    passive: (props.modelValue === undefined) as false,
    defaultValue: props.defaultValue,
  });

  const onClear = () => {
    modelValue.value = undefined;

    focused.value = true;
  };

  const isClearable = computed(() => {
    if (local.clearable && inputProps.disabled === false) {
      if (typeof modelValue.value !== "undefined" && modelValue.value !== null) {
        if (typeof modelValue.value === "number") {
          if (modelValue.value.toString().length > 0) {
            return true;
          }
        }

        if (typeof modelValue.value === "string") {
          if (modelValue.value.length > 0) {
            return true;
          }
        }
      }
    }

    return false;
  });

  defineExpose({
    input: inputRef,
  });
</script>

<template>
  <template v-if="hasAdditional || local.clearable === true">
    <div
      :class="
        styles.root({
          class: [staticClass('root'), local.slotClasses?.root, local.class],
        })
      "
      :aria-describedby="local.ariaDescribedby"
      :aria-invalid="local.ariaInvalid"
    >
      <template v-if="typeof slots.leading !== 'undefined' || typeof local.leadingIcon !== 'undefined'">
        <span
          :class="
            styles.leading({
              class: [staticClass('leading'), local.slotClasses?.leading],
            })
          "
          @click="focused = !focused"
        >
          <slot name="leading">
            <UiIcon :name="local.leadingIcon as IconName" />
          </slot>
        </span>
      </template>

      <input
        ref="inputRef"
        v-bind="{ ...inputProps, ...$attrs }"
        v-model="modelValue"
        autocomplete="off"
        :class="
          styles.input({
            class: [staticClass('input'), local.slotClasses?.input],
          })
        "
      />

      <template v-if="isClearable">
        <span :class="styles.clearWrapper()">
          <span :class="styles.clear()" role="button" tabindex="-1" @click="onClear()">
            <UiIcon name="i-ri-close-circle-fill" />
          </span>
        </span>
      </template>

      <template v-if="typeof slots.trailing !== 'undefined' || typeof local.trailingIcon !== 'undefined'">
        <span
          :class="
            styles.trailing({
              class: [staticClass('trailing'), local.slotClasses?.trailing],
            })
          "
          @click="focused = !focused"
        >
          <slot name="trailing">
            <UiIcon :name="local.trailingIcon as IconName" />
          </slot>
        </span>
      </template>
    </div>
  </template>

  <template v-else>
    <input
      ref="inputRef"
      v-bind="{ ...inputProps, ...$attrs }"
      v-model="modelValue"
      autocomplete="off"
      :class="
        styles.input({
          class: [staticClass('root'), local.slotClasses?.root, local.class],
        })
      "
      :aria-describedby="local.ariaDescribedby"
      :aria-invalid="local.ariaInvalid"
    />
  </template>
</template>
