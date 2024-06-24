<script lang="ts" setup>
  import { useForwardProps } from "radix-vue";
  import type { SeparatorProps } from "./Separator.props";
  import { separatorStyles } from "./Separator.styles";

  const staticClass = makeStaticClass<"root">("separator");

  const props = withDefaults(defineProps<SeparatorProps>(), {
    orientation: "horizontal",
  });

  const styles = computed(() =>
    separatorStyles({
      class: [staticClass("root"), props.class],
    })
  );

  const forwarded = useForwardProps(reactiveOmit(props, "class"));
</script>

<template>
  <RSeparator v-bind="forwarded" :class="styles" />
</template>
