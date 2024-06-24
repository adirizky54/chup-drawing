<script lang="ts" setup>
  import { inputGroupStyles } from "./InputGroup.styles";
  import { injectInputGroupContext } from "./InputGroup.vue";

  const staticClass = makeStaticClass<"addon">("input-group");

  const inputGroupContext = injectInputGroupContext();

  const styles = computed(() =>
    inputGroupStyles({
      ...inputGroupContext,
    })
  );
</script>

<template>
  <span
    :class="
      styles.addon({
        class: staticClass('addon'),
      })
    "
  >
    <slot />
  </span>
</template>
