<script setup lang="ts">
  import type { DropdownMenuTriggerProps } from "radix-vue";

  const props = withDefaults(defineProps<DropdownMenuTriggerProps>(), {
    asChild: true,
  });
</script>

<template>
  <RDropdownMenuTrigger v-bind="props">
    <slot />
  </RDropdownMenuTrigger>
</template>
