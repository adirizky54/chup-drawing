<script lang="ts" setup>
  import { useForwardPropsEmits } from "radix-vue";
  import type { TooltipProps } from "../Tooltip/Tooltip.props";
  import type { SliderEmits, SliderProps } from "./Slider.props";
  import { sliderStyles, type SliderSlots } from "./Slider.styles";

  const staticClass = makeStaticClass<SliderSlots>("slider");

  const props = withDefaults(defineProps<SliderProps>(), {
    defaultValue: () => [0],
    orientation: "horizontal",
    min: 0,
    max: 100,
    step: 1,
    size: "md",
    tooltip: false,
  });
  const emits = defineEmits<SliderEmits>();

  const local = reactivePick(props, "class", "slotClasses", "tooltip", "tooltipFormatter");
  const variants = reactivePick(props, "size");
  const others = reactiveOmit(props, "class", "slotClasses", "size", "tooltip", "tooltipFormatter");

  const forwarded = useForwardPropsEmits(others, emits);

  const styles = computed(() => sliderStyles(variants));

  const tooltip = computed<Pick<TooltipProps, "placement" | "withArrow"> | undefined>(() => {
    if (typeof local.tooltip === "boolean") {
      if (local.tooltip) {
        if (others.orientation === "horizontal") {
          return {
            placement: "top-center",
            withArrow: true,
          };
        }

        if (others.orientation === "vertical") {
          return {
            placement: "right-center",
            withArrow: true,
          };
        }
      }
    }

    if (typeof local.tooltip === "object") {
      if (others.orientation === "horizontal") {
        return {
          placement: "top-center",
          withArrow: true,
          ...local.tooltip,
        };
      }

      if (others.orientation === "vertical") {
        return {
          placement: "right-center",
          withArrow: true,
          ...local.tooltip,
        };
      }
    }

    return undefined;
  });
</script>

<template>
  <RSliderRoot
    v-slot="{ modelValue: val }"
    v-bind="forwarded"
    :class="
      styles.root({
        class: [staticClass('root'), local.slotClasses?.root, local.class],
      })
    "
  >
    <RSliderTrack
      :class="
        styles.track({
          class: [staticClass('track'), local.slotClasses?.track],
        })
      "
    >
      <RSliderRange
        :class="
          styles.range({
            class: [staticClass('range'), local.slotClasses?.range],
          })
        "
      />
    </RSliderTrack>

    <template v-for="(t, i) in val.length" :key="i">
      <template v-if="typeof tooltip !== 'undefined'">
        <UiTooltip
          :content="
            typeof local?.tooltipFormatter !== 'undefined' ? local?.tooltipFormatter(val[i]) : val[i].toString()
          "
          :placement="tooltip.placement"
          :with-arrow="tooltip.withArrow"
          disable-closing-trigger
        >
          <RSliderThumb
            :class="
              styles.thumb({
                class: [staticClass('thumb'), local.slotClasses?.thumb],
              })
            "
          />
        </UiTooltip>
      </template>

      <template v-else>
        <RSliderThumb
          :class="
            styles.thumb({
              class: [staticClass('thumb'), local.slotClasses?.thumb],
            })
          "
        />
      </template>
    </template>
  </RSliderRoot>
</template>
