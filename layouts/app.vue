<script lang="ts" setup>
  const appConfig = useAppConfig();
  const url = useRequestURL();
  const route = useRoute();

  const title = computed(() => {
    return route.meta.title ? `${route.meta.title} — ${appConfig.title}` : appConfig.title;
  });

  useHead(appConfig.HEAD);

  useSeoMeta({
    title,
    ogTitle: title,
    twitterTitle: title,
    description: appConfig.META.description,
    ogDescription: appConfig.META.description,
    twitterDescription: appConfig.META.description,
    twitterCard: "summary_large_image",
    ogImage: `${url.origin}/images/og-image.png`,
    twitterImage: `${url.origin}/images/og-image.png`,
  });
</script>

<template>
  <Html>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <Body>
      <LayoutsSidebar :menu="MENU" />

      <div class="ml-[--w-sidebar] block p-0">
        <LayoutsNavbar />

        <main class="relative p-4">
          <slot />
        </main>
      </div>
    </Body>
  </Html>
</template>
