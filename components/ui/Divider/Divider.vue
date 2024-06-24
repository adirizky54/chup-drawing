<script setup lang="ts">
  import { type DividerProps } from "./Divider.props";
  import { dividerStyles, type DividerSlots } from "./Divider.styles";

  defineOptions({
    inheritAttrs: false,
  });

  const staticClass = makeStaticClass<DividerSlots>("divider");

  const props = withDefaults(defineProps<DividerProps>(), {
    types: "horizontal",
  });

  const local = reactivePick(props, "class", "slotClasses");

  const isThereTitle = computed(() => {
    return Boolean(useSlots().default);
  });

  const styles = computed(() =>
    dividerStyles({
      isThereTitle: isThereTitle.value,
      ...props,
    })
  );
</script>

<template>
  <div :class="styles.root({ class: [staticClass('root'), local.slotClasses?.root, local.class] })">
    <template v-if="$slots.default && props.types === 'horizontal'">
      <div
        :class="
          styles.dividerLeft({
            class: [staticClass('dividerLeft'), local.slotClasses?.dividerLeft],
          })
        "
      ></div>
      <div :class="styles.title({ class: [staticClass('title'), local.slotClasses?.title] })">
        <slot></slot>
      </div>
      <div
        :class="
          styles.dividerRight({
            class: [staticClass('dividerRight'), local.slotClasses?.dividerRight],
          })
        "
      ></div>
    </template>
  </div>
</template>
