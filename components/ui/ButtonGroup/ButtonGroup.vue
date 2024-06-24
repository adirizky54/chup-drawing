<script lang="ts">
  import type { ButtonGroupProps } from "./ButtonGroup.props";
  import { buttonGroupStyles } from "./ButtonGroup.styles";

  export const [injectButtonGroupContext, provideButtonGroupContext] =
    createContext<Omit<ButtonGroupProps, "class">>("ButtonGroup");
</script>

<script lang="ts" setup>
  const staticClass = makeStaticClass<"root">("button-group");

  const props = withDefaults(defineProps<ButtonGroupProps>(), {
    variant: "default",
    size: "md",
    shape: "rounded",
    block: false,
  });

  const local = reactivePick(props, "class", "block");
  const stateContext = reactiveOmit(props, "class");

  const styles = computed(() =>
    buttonGroupStyles({
      block: local.block,
      class: [staticClass("root"), local.class],
    })
  );

  provideButtonGroupContext(stateContext);
</script>

<template>
  <div :class="styles" role="group">
    <slot />
  </div>
</template>
