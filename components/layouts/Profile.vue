<script lang="ts" setup></script>

<template>
  <UiDropdown>
    <UiDropdownTrigger>
      <div class="flex cursor-pointer select-none items-center justify-between gap-3">
        <div class="flex flex-col">
          <span class="mb-1 font-semibold">Damon Albarn</span>
          <span class="text-[15px] font-medium">damon.albarn@chup.clinic</span>
        </div>
        <UiAvatar
          src="https://collectionimages.npg.org.uk/large/mw115342/Damon-Albarn.jpg"
          size="md"
          shape="circle"
          alt="Damon Albarn"
        />
      </div>
    </UiDropdownTrigger>

    <UiDropdownContent placement="bottom-end" :side-offset="14" :loop="true">
      <UiDropdownItem as="a" href="/app/profile" icon="i-ri-user-line">Profile</UiDropdownItem>
      <UiDropdownItem as="a" href="/app/settings" icon="i-ri-settings-line">Business Settings</UiDropdownItem>
      <UiDropdownSeparator />
      <UiDropdownItem
        icon="i-ri-logout-circle-line"
        :slot-classes="{
          root: 'text-red-500 hover:bg-red-50 focus:bg-red-50',
          icon: 'text-red-500',
        }"
      >
        Logout
      </UiDropdownItem>
    </UiDropdownContent>
  </UiDropdown>
</template>
