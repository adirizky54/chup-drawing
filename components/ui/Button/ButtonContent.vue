<script lang="ts" setup>
  import type { ButtonContentProps } from "./Button.props";

  defineOptions({
    inheritAttrs: false,
  });

  const props = defineProps<ButtonContentProps>();
</script>

<template>
  <template v-if="typeof props.leadingIcon !== 'undefined'">
    <span aria-hidden="true" :class="leadingIconClass">
      <UiIcon :name="props.leadingIcon" />
    </span>
  </template>

  <slot />

  <template v-if="typeof props.trailingIcon !== 'undefined'">
    <span aria-hidden="true" :class="trailingIconClass">
      <UiIcon :name="props.trailingIcon" />
    </span>
  </template>
</template>
