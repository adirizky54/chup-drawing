<script lang="ts" setup>
  import type { IconProps } from "./Icon.props";

  const staticClass = makeStaticClass<"root">("icon");

  const props = defineProps<IconProps>();

  const styles = tv({
    base: "block align-middle text-current",
  });
</script>

<template>
  <span
    :class="
      styles({
        class: [staticClass('root'), props.name, props.class],
      })
    "
    aria-hidden="true"
  />
</template>
