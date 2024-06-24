<script lang="ts" setup>
  import type { ButtonBaseProps, ButtonSlots } from "./Button.props";
  import { buttonStyles } from "./Button.styles";

  const staticClass = makeStaticClass<ButtonSlots>("button");

  defineOptions({
    inheritAttrs: false,
  });

  const LOADING_ICON = "i-ri-loader-4-line" as const;

  const props = withDefaults(defineProps<ButtonBaseProps>(), {
    variant: "default",
    size: "md",
    shape: "rounded",
    iconOnly: false,
    uppercase: false,
    block: false,
    loadingPlacement: "leading",
    loadingIcon: LOADING_ICON,
  });

  const local = reactivePick(
    props,
    "class",
    "slotClasses",
    "loadingIcon",
    "loadingPlacement",
    "leadingIcon",
    "trailingIcon",
    "href",
    "to"
  );
  const variantProps = reactivePick(
    props,
    "variant",
    "color",
    "size",
    "shape",
    "iconOnly",
    "uppercase",
    "block",
    "loading"
  );

  const styles = computed(() => buttonStyles(variantProps));

  const element = computed(() => {
    if (local.href || local.to) {
      return resolveComponent("NuxtLink");
    }

    return "button";
  });

  const loadingIconClasses = computed(() => {
    return styles.value.icon({
      class: [
        local?.loadingPlacement === "center" ? "absolute" : "",
        staticClass("loadingIcon"),
        local.slotClasses?.loadingIcon,
      ],
    });
  });

  const leadingIcon = computed(() => {
    if (variantProps.loading && local.loadingPlacement === "leading") {
      return props.loadingIcon;
    }

    return local.leadingIcon;
  });

  const trailingIcon = computed(() => {
    if (variantProps.loading && local.loadingPlacement === "trailing") {
      return props.loadingIcon;
    }

    return local.trailingIcon;
  });

  const leadingIconClasses = computed(() => {
    const isLoading = variantProps.loading && local.loadingPlacement === "leading";
    return styles.value.icon({
      class: [staticClass("leadingIcon"), local.slotClasses?.leadingIcon, isLoading ? "animate-spin" : ""],
    });
  });

  const trailingIconClasses = computed(() => {
    const isLoading = variantProps.loading && local.loadingPlacement === "trailing";
    return styles.value.icon({
      class: [staticClass("trailingIcon"), local.slotClasses?.trailingIcon, isLoading ? "animate-spin" : ""],
    });
  });
</script>

<template>
  <component
    :is="element"
    :class="
      styles.root({
        class: [staticClass('root'), local.slotClasses?.root, local.class],
      })
    "
    :href="local.href"
    :to="local.to"
    v-bind="$attrs"
  >
    <template v-if="variantProps.loading && local.loadingPlacement === 'center'">
      <span aria-hidden="true" :class="loadingIconClasses">
        <UiIcon :name="props.loadingIcon" class="animate-spin" />
      </span>

      <template v-if="!variantProps.iconOnly">
        <span :class="styles.loadingContent()">
          <UiButtonContent
            :leading-icon-class="leadingIconClasses"
            :trailing-icon-class="trailingIconClasses"
            :leading-icon="leadingIcon"
            :trailing-icon="trailingIcon"
          >
            <slot />
          </UiButtonContent>
        </span>
      </template>
    </template>

    <template v-else>
      <UiButtonContent
        :leading-icon-class="leadingIconClasses"
        :trailing-icon-class="trailingIconClasses"
        :leading-icon="leadingIcon"
        :trailing-icon="trailingIcon"
      >
        <slot />
      </UiButtonContent>
    </template>
  </component>
</template>
