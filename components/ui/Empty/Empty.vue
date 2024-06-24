<script lang="ts" setup>
  import type { EmptyProps } from "./Empty.props";
  import { emptyStyles, type EmptySlots } from "./Empty.styles";

  const staticClass = makeStaticClass<EmptySlots>("empty");

  defineOptions({
    inheritAttrs: false,
  });

  const props = withDefaults(defineProps<EmptyProps>(), {
    icon: "i-ri-inbox-fill",
    title: "No Data",
  });

  const styles = computed(() => emptyStyles());
</script>

<template>
  <div
    v-bind="$attrs"
    :class="
      styles.root({
        class: [staticClass('root'), props.slotClasses?.root, props.class],
      })
    "
  >
    <div :class="styles.icon({ class: [staticClass('icon'), props.slotClasses?.icon] })">
      <slot name="icon">
        <UiIcon :name="props.icon" class="inline-block" />
      </slot>
    </div>

    <h6
      v-if="typeof props.title === 'string' && props.title !== ''"
      :class="styles.title({ class: [staticClass('title'), props.slotClasses?.title] })"
    >
      {{ props.title }}
    </h6>

    <p
      v-if="typeof props.description === 'string' && props.description !== ''"
      :class="styles.description({ class: [staticClass('description'), props.slotClasses?.description] })"
    >
      {{ props.description }}
    </p>

    <div v-if="$slots.default" :class="styles.extra({ class: [staticClass('extra'), props.slotClasses?.extra] })">
      <slot />
    </div>
  </div>
</template>
