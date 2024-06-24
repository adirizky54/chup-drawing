<script setup lang="ts">
  import { useForwardPropsEmits } from "radix-vue";
  import type { DropdownEmits, DropdownProps } from "./Dropdown.props";

  const props = withDefaults(defineProps<DropdownProps>(), {
    modal: false,
  });
  const emits = defineEmits<DropdownEmits>();

  const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <RDropdownMenuRoot v-bind="forwarded">
    <slot />
  </RDropdownMenuRoot>
</template>
