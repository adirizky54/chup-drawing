<script lang="ts" setup>
  import { useForwardProps } from "radix-vue";
  import type { TooltipEmits, TooltipProps } from "./Tooltip.props";
  defineOptions({
    inheritAttrs: false,
  });

  const props = withDefaults(defineProps<TooltipProps>(), {
    sideOffset: 4,
    placement: "top-center",
    delayDuration: 100,
    withArrow: true,
  });
  const emits = defineEmits<TooltipEmits>();
  const slots = defineSlots<{
    default?(): unknown;
    content?(): unknown;
  }>();

  const rootProps = reactivePick(
    props,
    "defaultOpen",
    "open",
    "delayDuration",
    "disableClosingTrigger",
    "disableHoverableContent"
  );
  const contentProps = reactiveOmit(
    props,
    "defaultOpen",
    "open",
    "delayDuration",
    "disableClosingTrigger",
    "disableHoverableContent"
  );

  const forwardedRoot = useForwardProps(rootProps);
</script>

<template>
  <RTooltipRoot v-bind="forwardedRoot" @update:open="(open) => emits('update:open', open)">
    <RTooltipTrigger as-child>
      <slot />
    </RTooltipTrigger>

    <UiTooltipContent v-bind="contentProps">
      <template v-if="slots.content" #content>
        <slot name="content" />
      </template>
    </UiTooltipContent>
  </RTooltipRoot>
</template>
