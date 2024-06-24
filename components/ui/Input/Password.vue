<script lang="ts" setup>
  import { useForwardPropsEmits } from "radix-vue";
  import type { InputEmits, InputPasswordProps } from "./Input.props";

  defineOptions({
    inheritAttrs: false,
  });

  const props = withDefaults(defineProps<InputPasswordProps>(), {
    clearable: undefined,
    disabled: false,
    shape: "rounded",
    size: "md",
  });
  const emits = defineEmits<InputEmits>();

  const forwarded = useForwardPropsEmits(props, emits);

  const visibilty = ref(false);

  const toggleVisibility = () => {
    visibilty.value = !visibilty.value;
  };
</script>

<template>
  <UiInput v-bind="{ ...forwarded, ...$attrs }" :type="visibilty ? 'text' : 'password'">
    <template #trailing>
      <span
        class="transition-color m-0 cursor-pointer text-lg text-gray-500 duration-300 hover:text-gray-700"
        role="button"
        tabindex="-1"
        @click="toggleVisibility()"
      >
        <UiIcon :name="visibilty ? 'i-ri-eye-line' : 'i-ri-eye-off-line'" />
      </span>
    </template>
  </UiInput>
</template>
