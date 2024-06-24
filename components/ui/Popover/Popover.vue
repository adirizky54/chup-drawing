<script setup lang="ts">
  import { useForwardPropsEmits } from "radix-vue";
  import type { PopoverEmits, PopoverProps } from "./Popover.props";

  const props = defineProps<PopoverProps>();
  const emits = defineEmits<PopoverEmits>();

  const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <RPopoverRoot v-bind="forwarded">
    <slot />
  </RPopoverRoot>
</template>
