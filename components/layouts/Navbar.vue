<script lang="ts" setup>
  const route = useRoute();
</script>

<template>
  <header class="sticky top-0 z-40 bg-[#F3F3F4] px-4 pt-4">
    <nav class="flex h-[70px] items-center justify-between rounded-2xl bg-primary-200 px-4 py-2 text-white">
      <div class="flex flex-col gap-1">
        <ClientOnly>
          <span class="text-[15px] font-medium">ABC Clinic</span>
        </ClientOnly>
        <h6 class="font-semibold">{{ route.meta.title ? route.meta.title : "" }}</h6>
      </div>

      <div class="flex items-center gap-x-[18px]">
        <div class="flex h-auto items-center">
          <LayoutsGlobalSearch />
          <UiSeparator orientation="vertical" class="!h-6" />
          <LayoutsNotifications />
        </div>

        <ClientOnly>
          <LayoutsProfile />
        </ClientOnly>
      </div>
    </nav>
  </header>
</template>
