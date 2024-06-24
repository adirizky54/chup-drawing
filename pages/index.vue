<script setup lang="ts">
  import type { IconName } from "~/components/ui/Icon/Icon.props";

  definePageMeta({
    layout: "app",
    title: "Ad Design",
  });

  const categories = [
    { id: 1, label: "Featured", icon: "i-ph-paint-brush-broad-duotone", iconActive: "i-ph-paint-brush" },
    { id: 2, label: "Flyers", icon: "i-ph-book-open-duotone", iconActive: "i-ph-book-open" },
    { id: 3, label: "Social Media", icon: "i-ph-instagram-logo-duotone", iconActive: "i-ph-instagram-logo" },
    { id: 4, label: "Postcard", icon: "i-ph-signpost-duotone", iconActive: "i-ph-signpost" },
    { id: 5, label: "Digital Ads", icon: "i-ph-newspaper-duotone", iconActive: "i-ph-newspaper" },
    { id: 6, label: "Print Product", icon: "i-ph-printer-duotone", iconActive: "i-ph-printer" },
    { id: 7, label: "Presentation", icon: "i-ph-presentation-chart-duotone", iconActive: "i-ph-presentation-chart" },
  ];

  const designs = [
    { id: 12, image: "/images/ad-design/design-1.png" },
    { id: 13, image: "/images/ad-design/design-2.png" },
    { id: 14, image: "/images/ad-design/design-3.png" },
    { id: 15, image: "/images/ad-design/design-4.png" },
    { id: 16, image: "/images/ad-design/design-2.png" },
  ];
</script>

<template>
  <div class="relative space-y-4">
    <div class="relative rounded-2xl bg-white shadow-sm">
      <div class="mx-auto rounded-xl bg-primary-200 px-4 pb-12 pt-7 text-center">
        <h2 class="mb-2 text-white">Make Your Content</h2>
        <p class="text-base text-white">Select a template below to get started, or start with your own</p>
      </div>

      <div class="relative mx-auto px-4 pb-4 pt-10">
        <div
          class="absolute left-3/4 top-0 w-3/4 -translate-x-[84%] -translate-y-1/2 transform sm:-translate-x-[85%] lg:left-1/2 lg:w-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
        >
          <UiInput leading-icon="i-ri-search-line" placeholder="E.g. : Search by Name or Category" size="lg" />
        </div>

        <div class="flex items-center justify-center gap-5 overflow-x-auto">
          <div v-for="category in categories" :key="category.id" class="group flex-shrink-0 px-5 text-center">
            <UiAvatar
              :icon="category.icon as IconName"
              :slot-classes="{ root: 'group-hover:bg-secondary-200 size-20', icon: 'group-hover:text-white size-12' }"
              shape="circle"
            />
            <p class="mt-4 text-neutral-800 group-hover:text-secondary-200">{{ category.label }}</p>
          </div>
        </div>
      </div>
    </div>

    <UiCard header="Instagram Post">
      <div class="flex items-center gap-6 overflow-x-auto">
        <template v-for="design in designs" :key="design.id">
          <NuxtLink to="/1">
            <img :src="design.image" />
          </NuxtLink>
        </template>
      </div>
    </UiCard>
  </div>
</template>
