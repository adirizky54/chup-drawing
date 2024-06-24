<script lang="ts" setup>
  import type { LabelProps } from "radix-vue";

  const staticClass = makeStaticClass<"root">("label");

  const props = defineProps<Pick<LabelProps, "for"> & { class?: string }>();

  const styles = tv({
    base: "inline-block text-left text-base font-medium text-neutral-950",
  });
</script>

<template>
  <RLabel
    :class="
      styles({
        class: [staticClass('root'), props.class],
      })
    "
    :for="props.for"
  >
    <slot />
  </RLabel>
</template>
