<script setup lang="ts">
  import { useForwardPropsEmits } from "radix-vue";
  import type { DropdownItemEmits, DropdownItemProps, DropdownItemSlots } from "./Dropdown.props";
  import { dropdownStyles } from "./Dropdown.styles";

  const staticClass = makeStaticClass<DropdownItemSlots>("dropdown-item");

  const props = withDefaults(defineProps<DropdownItemProps>(), {
    as: "button",
    asChild: false,
  });
  const emits = defineEmits<DropdownItemEmits>();

  const local = reactivePick(props, "class", "slotClasses", "icon");
  const others = reactiveOmit(props, "class", "slotClasses", "icon");

  const forwarded = useForwardPropsEmits(others, emits);

  const styles = computed(() => dropdownStyles());
</script>

<template>
  <RDropdownMenuItem
    v-bind="forwarded"
    :class="
      styles.item({
        class: [staticClass('root'), local.slotClasses?.root, local.class],
      })
    "
  >
    <UiIcon
      v-if="typeof local.icon !== 'undefined' && others.asChild === false"
      :name="local.icon"
      :class="
        styles.icon({
          class: [staticClass('icon'), local.slotClasses?.icon],
        })
      "
    />

    <slot />
  </RDropdownMenuItem>
</template>
