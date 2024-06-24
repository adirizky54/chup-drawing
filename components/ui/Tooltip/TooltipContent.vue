<script setup lang="ts">
  import { useForwardProps } from "radix-vue";
  import type { TooltipContentEmits, TooltipContentProps } from "./Tooltip.props";
  import { tooltipStyles, type TooltipSlots } from "./Tooltip.styles";

  const staticClass = makeStaticClass<TooltipSlots>("tooltip");

  defineOptions({
    inheritAttrs: false,
  });

  const props = withDefaults(defineProps<TooltipContentProps>(), {
    sideOffset: 4,
    placement: "top-center",
    withArrow: true,
  });
  const emits = defineEmits<TooltipContentEmits>();

  const local = reactivePick(props, "class", "content", "placement", "slotClasses", "withArrow");
  const contentProps = reactiveOmit(props, "class", "content", "placement", "slotClasses", "withArrow");

  const forwardedContent = useForwardProps(contentProps);

  const styles = computed(() => tooltipStyles());

  const placement = computed(() => {
    const [side, align] = local.placement.split("-") as [SIDE, ALIGN];
    return { side, align };
  });
</script>

<template>
  <RTooltipPortal>
    <RTooltipContent
      v-bind="{ ...forwardedContent, ...$attrs, side: placement.side, align: placement.align }"
      :class="
        styles.root({
          class: [staticClass('root'), local.slotClasses?.root, local.class],
        })
      "
      @escape-key-down="(e) => emits('escapeKeyDown', e)"
      @pointer-down-outside="(e) => emits('pointerDownOutside', e)"
    >
      <slot name="content">
        {{ local.content }}
      </slot>

      <template v-if="local.withArrow">
        <RTooltipArrow
          :class="
            styles.arrow({
              class: [staticClass('arrow'), local.slotClasses?.arrow],
            })
          "
          :width="12"
          :height="6"
        />
      </template>
    </RTooltipContent>
  </RTooltipPortal>
</template>
