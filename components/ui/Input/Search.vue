<script lang="ts" setup>
  import type { InputSearchEmits, InputSearchProps } from "./Input.props";

  const props = withDefaults(defineProps<InputSearchProps>(), {
    loading: undefined,
    clearable: undefined,
    shape: "rounded",
    size: "md",
  });
  const emits = defineEmits<InputSearchEmits>();
  const slots = defineSlots<{
    leading?(): unknown;
    trailing?(): unknown;
  }>();

  const inputRef = shallowRef<{ input: HTMLInputElement }>();

  const local = reactivePick(props, "loading");
  const inputGroupProps = reactivePick(props, "shape", "size");
  const inputProps = reactiveOmit(props, "loading", "shape", "size");

  const onSearch = () => {
    emits("search", inputRef.value?.input.value);
  };

  const onPressEnter = (e: KeyboardEvent) => {
    if (e.code === "Enter") {
      if (typeof local.loading === "boolean" && local.loading) {
        return;
      }

      onSearch();
    }
  };
</script>

<template>
  <UiInputGroup v-bind="inputGroupProps">
    <UiInput
      ref="inputRef"
      v-bind="inputProps"
      :disabled="inputProps.disabled || local.loading"
      @update:model-value="(value) => emits('update:modelValue', value)"
      @keydown="onPressEnter"
    >
      <template v-for="(slot, name) in slots" #[name]>
        <slot :name="name" />
      </template>
    </UiInput>

    <UiIconButton
      variant="outline"
      color="primary"
      class="border-gray-300 text-gray-900 focus-visible:border-primary-200 hover-active:border-primary-200"
      name="i-ri-search-2-line"
      :loading="local.loading"
      :disabled="inputProps.disabled"
      @click="onSearch()"
    />
  </UiInputGroup>
</template>
