<script lang="ts" setup>
  import type { LoadingOverlayProps } from "./LoadingOverlay.props";
  import { loadingOverlayStyles } from "./LoadingOverlay.styles";

  defineOptions({
    inheritAttrs: false,
  });

  const props = withDefaults(defineProps<LoadingOverlayProps>(), {
    size: "md",
    zIndex: 2,
  });

  const sizeLoader = {
    sm: 24,
    md: 36,
    lg: 48,
  };

  const styles = computed(() => loadingOverlayStyles());
</script>

<template>
  <div v-if="props.loading" :class="styles.root()" :style="{ zIndex: props.zIndex }">
    <div :class="styles.overlay()" :style="{ zIndex: props.zIndex }" />

    <svg
      :width="sizeLoader[props.size]"
      :height="sizeLoader[props.size]"
      :class="styles.icon()"
      :style="{ zIndex: `calc(${props.zIndex} + 1)` }"
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(2.5 2.5)" stroke-width="5">
          <circle stroke-opacity=".5" cx="16" cy="16" r="16" />
          <path d="M32 16c0-9.94-8.06-16-16-16">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 16 16"
              to="360 16 16"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>

    <p v-if="props.description" :class="styles.description()" :style="{ zIndex: `calc(${props.zIndex} + 1)` }">
      {{ props.description }}
    </p>
  </div>

  <slot />
</template>
