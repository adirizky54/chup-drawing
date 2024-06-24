<script setup lang="ts">
  const useIdFunction = () => useId();
</script>

<template>
  <NuxtRouteAnnouncer />

  <RConfigProvider :use-id="useIdFunction">
    <RTooltipProvider :delay-duration="100">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </RTooltipProvider>
  </RConfigProvider>
</template>
