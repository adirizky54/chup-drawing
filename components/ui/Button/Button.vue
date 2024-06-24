<script lang="ts" setup>
  import { injectButtonGroupContext } from "../ButtonGroup/ButtonGroup.vue";
  import { injectInputGroupContext } from "../InputGroup/InputGroup.vue";

  import type { ButtonProps } from "./Button.props";

  defineOptions({
    inheritAttrs: false,
  });

  const props = defineProps<ButtonProps>();

  const buttonGroupContext = injectButtonGroupContext();
  const inputGroupContext = injectInputGroupContext();

  const mergeProps = computed(() => ({
    ...props,
    ...buttonGroupContext,
    ...inputGroupContext,
  }));
</script>

<template>
  <UiButtonBase v-bind="{ ...mergeProps, ...$attrs }" :icon-only="false">
    <slot />
  </UiButtonBase>
</template>
