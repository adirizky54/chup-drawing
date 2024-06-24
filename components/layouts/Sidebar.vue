<script setup lang="ts">
  import type { SidebarMenu } from "~/configs/menu";

  type Props = {
    menu: Array<SidebarMenu>;
  };

  defineProps<Props>();
</script>

<template>
  <aside class="fixed top-0 z-50 h-screen w-[--w-sidebar] bg-white transition duration-300">
    <div class="flex h-[72px] w-full items-center justify-center">
      <NuxtLink to="/app">
        <img src="/images/logo-square.svg" class="size-10" />
      </NuxtLink>
    </div>

    <UiScrollArea class="h-[calc(100vh-92px)]" type="hover">
      <ul class="relative mt-3 flex flex-col gap-2 px-2">
        <template v-for="item in $props.menu" :key="item.key">
          <li>
            <NuxtLink :to="item.url" class="group flex flex-col items-center gap-y-1" :title="item.title">
              <span
                aria-label="icon"
                :class="[
                  'flex size-10 items-center justify-center rounded-md bg-transparent text-2xl text-[#6E6E6E] transition duration-200 ease-in-out',
                  'group-hover:bg-[#EBEDF0] group-hover:text-[#6E6E6E]',
                  'group-[.router-link-active]:bg-primary-200 group-[.router-link-active]:text-white',
                ]"
              >
                <UiIcon
                  :name="item.icon"
                  class="data-[is-custom-active='true']:group-[.router-link-active]:hidden"
                  :data-is-custom-active="Boolean(item.iconActive)"
                />
                <template v-if="item.iconActive">
                  <UiIcon :name="item.iconActive" class="hidden group-[.router-link-active]:block" />
                </template>
              </span>

              <span
                aria-label="title"
                class="max-w-14 truncate text-center text-xs/[18px] font-semibold text-[#6E6E6E] transition duration-200 ease-in-out group-hover:text-[#6E6E6E] group-[.router-link-active]:text-primary-200"
              >
                {{ item.title }}
              </span>
            </NuxtLink>
          </li>
        </template>
      </ul>
    </UiScrollArea>
  </aside>
</template>
