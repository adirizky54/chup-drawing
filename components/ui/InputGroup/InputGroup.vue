<script lang="ts">
  import type { InputGroupProps } from "./InputGroup.props";
  import { inputGroupStyles } from "./InputGroup.styles";

  export const [injectInputGroupContext, provideInputGroupContext] =
    createContext<Omit<InputGroupProps, "class">>("InputGroup");
</script>

<script lang="ts" setup>
  const staticClass = makeStaticClass<"root">("input-group");

  const props = withDefaults(defineProps<InputGroupProps>(), {
    size: "md",
    shape: "rounded",
  });

  const local = reactivePick(props, "class");
  const ctxProps = reactiveOmit(props, "class");

  provideInputGroupContext(ctxProps);
</script>

<template>
  <div
    :class="
      inputGroupStyles().root({
        class: [staticClass('root'), local.class],
      })
    "
    role="group"
  >
    <slot />
  </div>
</template>
