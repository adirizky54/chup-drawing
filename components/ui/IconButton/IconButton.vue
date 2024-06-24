<script lang="ts" setup>
  import { injectButtonGroupContext } from "../ButtonGroup/ButtonGroup.vue";
  import { injectInputGroupContext } from "../InputGroup/InputGroup.vue";

  import type { IconButtonProps } from "./IconButton.props";

  defineOptions({
    inheritAttrs: false,
  });

  const props = defineProps<IconButtonProps>();
  const buttonProps = reactiveOmit(props, "name");
  const iconProps = reactivePick(props, "name");

  const buttonGroupContext = injectButtonGroupContext();
  const inputGroupContext = injectInputGroupContext();

  const mergeProps = computed(() => ({
    ...buttonProps,
    ...buttonGroupContext,
    ...inputGroupContext,
  }));
</script>

<template>
  <UiButtonBase v-bind="{ ...mergeProps, ...$attrs }" :icon-only="true">
    <UiIcon v-if="!buttonProps.loading" :name="iconProps.name" />
  </UiButtonBase>
</template>
