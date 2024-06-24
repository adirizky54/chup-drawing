<script lang="ts" setup>
  import type { CardProps } from "./Card.props";
  import { cardStyles, type CardSlots } from "./Card.styles";

  const staticClass = makeStaticClass<CardSlots>("card");

  const props = defineProps<CardProps>();

  const local = reactivePick(props, "class", "slotClasses", "header");

  const isThereHeader = computed(() => {
    return Boolean(useSlots().header) || (typeof local.header === "string" && Boolean(local.header));
  });

  const styles = computed(() =>
    cardStyles({
      isThereHeader: isThereHeader.value,
    })
  );
</script>

<template>
  <div
    :class="
      styles.root({
        class: [staticClass('root'), local.slotClasses?.root, local.class],
      })
    "
  >
    <template v-if="isThereHeader">
      <div :class="styles.header({ class: [staticClass('header'), local.slotClasses?.header] })">
        <slot name="header">
          {{ local.header }}
        </slot>
      </div>
    </template>

    <div
      :class="
        styles.body({
          class: [staticClass('body'), local.slotClasses?.body],
        })
      "
    >
      <slot />
    </div>

    <template v-if="$slots.footer">
      <div :class="styles.footer({ class: [staticClass('footer'), local.slotClasses?.footer] })">
        <slot name="footer" />
      </div>
    </template>
  </div>
</template>
