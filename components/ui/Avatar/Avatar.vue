<script lang="ts" setup>
  import type { AvatarProps } from "./Avatar.props";
  import { avatarStyles, type AvatarSlots } from "./Avatar.styles";

  const staticClass = makeStaticClass<AvatarSlots>("avatar");

  const props = withDefaults(defineProps<AvatarProps>(), {
    size: "md",
    shape: "rounded",
  });

  const local = reactivePick(props, "class", "slotClasses", "src", "alt", "icon");
  const variantProps = reactiveOmit(props, "class", "slotClasses", "src", "alt", "icon");

  const styles = computed(() =>
    avatarStyles({
      ...variantProps,
      hasImage: typeof local.src === "string",
      isIcon: typeof local.icon === "string",
    })
  );

  const placeholder = computed(() => {
    return (local.alt || "")
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .substring(0, 2);
  });
</script>

<template>
  <RAvatarRoot
    :class="
      styles.root({
        class: [staticClass('root'), local.slotClasses?.root, local.class],
      })
    "
  >
    <template v-if="typeof local.src === 'string'">
      <RAvatarImage
        :class="styles.image({ class: [staticClass('image'), local.slotClasses?.image] })"
        :src="local.src"
        :alt="local.alt"
      />
    </template>

    <template v-if="typeof local.src === 'string' || typeof local.alt === 'string'">
      <RAvatarFallback :class="styles.alt({ class: [staticClass('alt'), local.slotClasses?.alt] })">
        {{ placeholder }}
      </RAvatarFallback>
    </template>

    <template v-if="typeof local.icon === 'string'">
      <UiIcon
        :name="local.icon"
        :class="
          styles.icon({
            class: [staticClass('icon'), local.slotClasses?.icon],
          })
        "
      />
    </template>
  </RAvatarRoot>
</template>
