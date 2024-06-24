<script setup lang="ts">
  import { useForwardPropsEmits } from "radix-vue";
  import { dropdownStyles } from "./Dropdown.styles";
  import type { DropdownContentEmits, DropdownContentProps } from "./Dropdown.props";

  const staticClass = makeStaticClass<"root">("dropdown");

  const props = withDefaults(defineProps<DropdownContentProps>(), {
    sideOffset: 4,
    placement: "bottom-start",
  });
  const emits = defineEmits<DropdownContentEmits>();
  const propsWithoutPlacement = reactiveOmit(props, "placement");

  const forwarded = useForwardPropsEmits(propsWithoutPlacement, emits);
  const placement = computed(() => {
    const [side, align] = props.placement.split("-") as [SIDE, ALIGN];
    return { side, align };
  });

  const styles = computed(() => dropdownStyles());
</script>

<template>
  <RDropdownMenuPortal>
    <RDropdownMenuContent
      :class="
        styles.content({
          class: [staticClass('root'), props.class],
        })
      "
      v-bind="{ ...forwarded, ...$attrs, side: placement.side, align: placement.align }"
    >
      <slot />
    </RDropdownMenuContent>
  </RDropdownMenuPortal>
</template>
