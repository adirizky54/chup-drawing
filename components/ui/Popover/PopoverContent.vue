<script setup lang="ts">
  import { useForwardPropsEmits } from "radix-vue";
  import type { PopoverContentEmits, PopoverContentProps } from "./Popover.props";
  import { popoverStyles, type PopoverSlots } from "./Popover.styles";

  const staticClass = makeStaticClass<PopoverSlots>("popover");

  defineOptions({
    inheritAttrs: false,
  });

  const props = withDefaults(defineProps<PopoverContentProps>(), {
    sideOffset: 4,
    placement: "bottom-start",
    sameWidth: false,
  });
  const emits = defineEmits<PopoverContentEmits>();

  const local = reactivePick(props, "placement", "sameWidth");
  const contentProps = reactiveOmit(props, "placement", "sameWidth");

  const forwarded = useForwardPropsEmits(contentProps, emits);

  const placement = computed(() => {
    const [side, align] = local.placement.split("-") as [SIDE, ALIGN];
    return { side, align };
  });

  const styles = computed(() => popoverStyles({ sameWidth: local.sameWidth }));
</script>

<template>
  <RPopoverPortal>
    <RPopoverContent
      v-bind="{ ...forwarded, ...$attrs, side: placement.side, align: placement.align }"
      :class="
        styles.root({
          class: [staticClass('root'), props?.slotClasses?.root, props.class],
        })
      "
    >
      <template v-if="!$slots.title && !$slots.content && $slots.default">
        <div
          :class="
            styles.content({
              class: [staticClass('content'), props?.slotClasses?.content],
            })
          "
        >
          <slot />
        </div>
      </template>
      <template v-else-if="!$slots.title && $slots.content">
        <div
          :class="
            styles.content({
              class: [staticClass('content'), props?.slotClasses?.content],
            })
          "
        >
          <slot name="content" />
        </div>
      </template>
      <template v-else-if="$slots.title && !$slots.content">
        <div
          :class="
            styles.title({
              class: [staticClass('title'), props?.slotClasses?.title],
            })
          "
        >
          <slot name="title" />
        </div>
      </template>
      <template v-else-if="$slots.title && $slots.content">
        <div class="flex flex-col">
          <div
            :class="
              styles.title({
                class: [staticClass('title'), props?.slotClasses?.title],
              })
            "
          >
            <slot name="title" />
          </div>
          <hr :class="styles.divider({ class: [staticClass('divider'), props?.slotClasses?.divider] })" />
          <div
            :class="
              styles.content({
                class: [staticClass('content'), props?.slotClasses?.content],
              })
            "
          >
            <slot name="content" />
          </div>
        </div>
      </template>
      <RPopoverArrow :class="styles.arrow({ class: [staticClass('arrow'), props?.slotClasses?.arrow] })" />
    </RPopoverContent>
  </RPopoverPortal>
</template>
