<script setup lang="ts">
  import { Vue3ColorPicker } from "@cyhnkckali/vue3-color-picker";

  definePageMeta({
    layout: "app",
    title: "Ad Design",
  });

  const zoom = [
    { label: "10%", value: 0.1 },
    { label: "25%", value: 0.25 },
    { label: "50%", value: 0.5 },
    { label: "75%", value: 0.75 },
    { label: "100%", value: 1 },
    { label: "125%", value: 1.25 },
    { label: "150%", value: 1.5 },
    { label: "175%", value: 1.75 },
    { label: "200%", value: 2 },
  ];

  const textSection = [
    {
      id: "header",
      label: "Create header",
      class: "font-semibold text-2xl",
      attr: { fontSize: 24, fontStyle: "600", text: "Header" },
    },
    {
      id: "sub-header",
      label: "Create sub header",
      class: "font-medium text-lg",
      attr: { fontSize: 18, fontStyle: "500", text: "Sub Header" },
    },
    {
      id: "body",
      label: "Create body text",
      class: "text-base",
      attr: { fontSize: 16, fontStyle: "400", text: "Body text" },
    },
  ];

  const font_family = ref("Roboto");
  const font_size = ref(16);
  const font_color = ref("#000000");
  const line_height = ref([1.4]);
  const alignment = ref<"left" | "center" | "right">("left");
  const letter_spacing = ref([0]);
  const transparency = ref([100]);
  const lock = ref(false);

  const toggleAlignment = () => {
    if (alignment.value === "left") {
      alignment.value = "center";
    } else if (alignment.value === "center") {
      alignment.value = "right";
    } else {
      alignment.value = "left";
    }
  };
</script>

<template>
  <div class="relative">
    <div class="mb-4 grid grid-cols-12 gap-4 rounded-lg bg-white px-3 py-2">
      <div class="col-span-3">
        <div class="flex items-center gap-2">
          <UiIconButton name="i-ph-arrow-left-bold" variant="text" @click="$router.back()" />

          <UiInput placeholder="Enter Template Name" />
        </div>
      </div>

      <div class="col-span-9">
        <div class="flex items-center gap-2">
          <UiTooltip content="Undo" placement="bottom-center">
            <UiIconButton name="i-ph-arrow-u-up-left-bold" variant="text" />
          </UiTooltip>

          <UiTooltip content="Redo" placement="bottom-center">
            <UiIconButton name="i-ph-arrow-u-up-right-bold" variant="text" />
          </UiTooltip>

          <UiTooltip content="Zoom In" placement="bottom-center">
            <UiIconButton name="i-ph-magnifying-glass-plus-bold" variant="text" />
          </UiTooltip>

          <UiDropdown>
            <UiDropdownTrigger>
              <UiButton variant="text">100%</UiButton>
            </UiDropdownTrigger>

            <UiDropdownContent placement="bottom-center">
              <template v-for="(item, index) in zoom" :key="`zoom-${index}`">
                <UiDropdownItem>{{ item.label }}</UiDropdownItem>
              </template>
              <UiDropdownItem>Reset</UiDropdownItem>
            </UiDropdownContent>
          </UiDropdown>

          <UiTooltip content="Zoom Out" placement="bottom-center">
            <UiIconButton name="i-ph-magnifying-glass-minus-bold" variant="text" />
          </UiTooltip>

          <UiButton shape="pill" class="ml-auto">Download</UiButton>
          <UiButton shape="pill">Save Template</UiButton>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-3">
        <RAccordionRoot class="relative w-full space-y-3" type="single" :collapsible="true">
          <RAccordionItem value="template" class="rounded-lg bg-white">
            <RAccordionHeader class="flex">
              <RAccordionTrigger
                class="group flex flex-1 items-center justify-between p-4 text-base font-medium transition-all"
              >
                <span>Template</span>

                <span
                  class="transform text-2xl/[0] text-success-200 transition-transform group-data-[state=open]:rotate-180"
                >
                  <UiIcon name="i-ph-caret-circle-down-fill" />
                </span>
              </RAccordionTrigger>
            </RAccordionHeader>
            <RAccordionContent
              class="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            >
              <div class="p-4">
                <UiInputSearch placeholder="Search Template.." class="mb-4" />

                <p>Content</p>
              </div>
            </RAccordionContent>
          </RAccordionItem>

          <RAccordionItem value="text" class="rounded-lg bg-white">
            <RAccordionHeader class="flex">
              <RAccordionTrigger
                class="group flex flex-1 items-center justify-between p-4 text-base font-medium transition-all"
              >
                <span>Text</span>

                <span
                  class="transform text-2xl/[0] text-success-200 transition-transform group-data-[state=open]:rotate-180"
                >
                  <UiIcon name="i-ph-caret-circle-down-fill" />
                </span>
              </RAccordionTrigger>
            </RAccordionHeader>
            <RAccordionContent
              class="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            >
              <div class="space-y-3 p-4">
                <UiButton v-for="item in textSection" :key="item.id" :block="true" :class="item.class" size="xl">
                  {{ item.label }}
                </UiButton>
              </div>
            </RAccordionContent>
          </RAccordionItem>

          <RAccordionItem value="shapes" class="rounded-lg bg-white">
            <RAccordionHeader class="flex">
              <RAccordionTrigger
                class="group flex flex-1 items-center justify-between p-4 text-base font-medium transition-all"
              >
                <span>Shapes & Icons</span>

                <span
                  class="transform text-2xl/[0] text-success-200 transition-transform group-data-[state=open]:rotate-180"
                >
                  <UiIcon name="i-ph-caret-circle-down-fill" />
                </span>
              </RAccordionTrigger>
            </RAccordionHeader>
            <RAccordionContent
              class="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            >
              <div class="p-4">Test</div>
            </RAccordionContent>
          </RAccordionItem>

          <RAccordionItem value="content" class="rounded-lg bg-white">
            <RAccordionHeader class="flex">
              <RAccordionTrigger
                class="group flex flex-1 items-center justify-between p-4 text-base font-medium transition-all"
              >
                <span>Content</span>

                <span
                  class="transform text-2xl/[0] text-success-200 transition-transform group-data-[state=open]:rotate-180"
                >
                  <UiIcon name="i-ph-caret-circle-down-fill" />
                </span>
              </RAccordionTrigger>
            </RAccordionHeader>
            <RAccordionContent
              class="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            >
              <div class="p-4">
                <UiInputSearch placeholder="Search Content.." class="mb-4" />

                <UiButton variant="solid" color="primary" :block="true">Upload File</UiButton>

                <p>Content</p>
              </div>
            </RAccordionContent>
          </RAccordionItem>
        </RAccordionRoot>
      </div>

      <div class="col-span-9">
        <div class="flex items-center justify-between rounded-t-lg bg-white px-4 py-1.5">
          <div class="flex items-center gap-2">
            <div class="w-32">
              <UiSelect
                v-model="font_family"
                size="sm"
                :options="[{ value: 'Roboto', label: 'Roboto' }]"
                :searchable="true"
                :same-width="false"
              />
            </div>

            <div class="w-36">
              <UiInputGroup size="sm">
                <UiIconButton name="i-ph-minus-bold" />
                <UiInput v-model="font_size" :min="6" :max="144" type="number" />
                <UiIconButton name="i-ph-plus-bold" />
              </UiInputGroup>
            </div>

            <UiPopover>
              <UiPopoverTrigger>
                <UiButton variant="text" class="w-10 px-0">
                  <span class="size-5 rounded-full" :style="{ backgroundColor: font_color }" />
                </UiButton>
              </UiPopoverTrigger>

              <UiPopoverContent placement="bottom-center" class="min-w-72" :slot-classes="{ content: 'p-4' }">
                <div class="color-picker">
                  <Vue3ColorPicker
                    v-model="font_color"
                    mode="solid"
                    type="HEX"
                    :show-color-list="false"
                    :show-eye-drop="false"
                    :show-alpha="false"
                    :show-input-menu="false"
                    :show-input-set="false"
                    :show-picker-mode="false"
                  />
                </div>
              </UiPopoverContent>
            </UiPopover>

            <UiTooltip content="Bold" placement="bottom-center">
              <UiIconButton name="i-ph-text-b-bold" variant="text" />
            </UiTooltip>

            <UiTooltip content="Italic" placement="bottom-center">
              <UiIconButton name="i-ph-text-italic-bold" variant="text" />
            </UiTooltip>

            <UiTooltip content="Underline" placement="bottom-center">
              <UiIconButton name="i-ph-text-underline-bold" variant="text" />
            </UiTooltip>

            <UiTooltip content="Strikethrough" placement="bottom-center">
              <UiIconButton name="i-ph-text-strikethrough-bold" variant="text" />
            </UiTooltip>

            <UiSeparator orientation="vertical" class="!h-6" />

            <UiTooltip content="Alignment" placement="bottom-center">
              <UiIconButton
                :name="
                  alignment === 'left'
                    ? 'i-ph-text-align-left-bold'
                    : alignment === 'center'
                      ? 'i-ph-text-align-center-bold'
                      : 'i-ph-text-align-right-bold'
                "
                variant="text"
                @click="toggleAlignment"
              />
            </UiTooltip>

            <UiPopover>
              <UiPopoverTrigger>
                <UiIconButton name="i-ri-text-spacing" variant="text" />
              </UiPopoverTrigger>

              <UiPopoverContent placement="bottom-center" class="min-w-72" :slot-classes="{ content: 'p-4' }">
                <div class="space-y-2.5">
                  <div class="relative">
                    <UiLabel class="mb-1">Line Height</UiLabel>
                    <div class="flex items-center gap-3">
                      <UiSlider v-model="line_height" :min="0.5" :max="2.5" :step="0.01" />
                      <UiInput
                        type="number"
                        size="sm"
                        class="w-16 shrink-0"
                        inputmode="decimal"
                        :min="0.5"
                        :max="2.5"
                        :step="0.01"
                        :model-value="line_height[0]"
                        @update:model-value="line_height = [$event as number]"
                      />
                    </div>
                  </div>

                  <div class="relative">
                    <UiLabel class="mb-1">Letter Spacing</UiLabel>
                    <div class="flex items-center gap-3">
                      <UiSlider v-model="letter_spacing" :min="-200" :max="300" />
                      <UiInput
                        type="number"
                        size="sm"
                        class="w-16 shrink-0"
                        :min="-200"
                        :max="300"
                        :model-value="letter_spacing[0]"
                        @update:model-value="letter_spacing = [$event as number]"
                      />
                    </div>
                  </div>
                </div>
              </UiPopoverContent>
            </UiPopover>
          </div>

          <!-- When selected element is image -->
          <!-- <div class="flex items-center gap-2">
            <UiPopover>
              <UiPopoverTrigger>
                <UiButton variant="text">Flip</UiButton>
              </UiPopoverTrigger>

              <UiPopoverContent placement="bottom-center" :slot-classes="{ content: 'p-2.5' }">
                <UiButton
                  variant="text"
                  leading-icon="i-ph-arrows-horizontal-bold"
                  size="sm"
                  class="justify-start"
                  :block="true"
                >
                  Flip Horizontal
                </UiButton>
                <UiButton
                  variant="text"
                  leading-icon="i-ph-arrows-vertical-bold"
                  size="sm"
                  class="justify-start"
                  :block="true"
                >
                  Flip Vertical
                </UiButton>
              </UiPopoverContent>
            </UiPopover>
          </div> -->

          <div class="flex items-center gap-2">
            <UiPopover>
              <UiPopoverTrigger>
                <UiButton leading-icon="i-ph-stack-fill" variant="text">Position</UiButton>
              </UiPopoverTrigger>

              <UiPopoverContent
                placement="bottom-center"
                class="min-w-72"
                :slot-classes="{ content: 'p-0 divide-y divide-neutral-300' }"
              >
                <div class="p-2.5">
                  <UiLabel class="mb-2">Layering</UiLabel>

                  <div class="grid grid-cols-2 gap-1">
                    <UiButton variant="text" leading-icon="i-ph-caret-up-bold" size="sm" class="justify-start">
                      Move Forward
                    </UiButton>
                    <UiButton variant="text" leading-icon="i-ph-caret-down-bold" size="sm" class="justify-start">
                      Move Backward
                    </UiButton>
                    <UiButton variant="text" leading-icon="i-ph-caret-double-up-bold" size="sm" class="justify-start">
                      Bring to Front
                    </UiButton>
                    <UiButton variant="text" leading-icon="i-ph-caret-double-down-bold" size="sm" class="justify-start">
                      Send to Back
                    </UiButton>
                  </div>
                </div>

                <div class="p-2.5">
                  <UiLabel class="mb-2">Position</UiLabel>

                  <div class="grid grid-cols-2 gap-1">
                    <UiButton variant="text" leading-icon="i-ph-align-left-fill" size="sm" class="justify-start">
                      Align Left
                    </UiButton>

                    <UiButton variant="text" leading-icon="i-ph-align-top-fill" size="sm" class="justify-start">
                      Align Top
                    </UiButton>

                    <UiButton
                      variant="text"
                      leading-icon="i-ph-align-center-horizontal-fill"
                      size="sm"
                      class="justify-start"
                    >
                      Align Center
                    </UiButton>

                    <UiButton
                      variant="text"
                      leading-icon="i-ph-align-center-vertical-fill"
                      size="sm"
                      class="justify-start"
                    >
                      Align Middle
                    </UiButton>

                    <UiButton variant="text" leading-icon="i-ph-align-right-fill" size="sm" class="justify-start">
                      Align Right
                    </UiButton>

                    <UiButton variant="text" leading-icon="i-ph-align-bottom-fill" size="sm" class="justify-start">
                      Align Bottom
                    </UiButton>
                  </div>
                </div>
              </UiPopoverContent>
            </UiPopover>

            <UiPopover>
              <UiPopoverTrigger>
                <UiIconButton name="i-ph-drop-fill" variant="text" />
              </UiPopoverTrigger>

              <UiPopoverContent placement="bottom-center" class="min-w-72" :slot-classes="{ content: 'p-4' }">
                <UiLabel class="mb-1">Transparency</UiLabel>
                <div class="flex items-center gap-3">
                  <UiSlider v-model="transparency" />
                  <UiInput
                    type="number"
                    size="sm"
                    class="w-16 shrink-0"
                    :min="0"
                    :max="100"
                    :model-value="transparency[0]"
                    @update:model-value="transparency = [$event as number]"
                  />
                </div>
              </UiPopoverContent>
            </UiPopover>

            <UiTooltip
              :content="lock ? 'Unlock Element' : 'Lock Element'"
              :disable-closing-trigger="true"
              placement="bottom-center"
            >
              <UiIconButton
                :name="lock ? 'i-ph-lock-simple-fill' : 'i-ph-lock-simple-open-fill'"
                variant="text"
                @click="lock = !lock"
              />
            </UiTooltip>

            <UiTooltip content="Duplicate Element" placement="bottom-center">
              <UiIconButton name="i-ph-copy-bold" variant="text" />
            </UiTooltip>

            <UiTooltip content="Remove Element" placement="bottom-end">
              <UiIconButton name="i-ph-trash-bold" variant="text" />
            </UiTooltip>
          </div>
        </div>

        <div
          id="canvas-container"
          class="flex min-h-[calc(100dvh-242px)] items-center justify-center rounded-b-lg bg-neutral-100"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .color-picker :deep(.ck-cp-container) {
    box-shadow: none;
    padding-top: 0;
    padding-bottom: 0;
  }

  .color-picker :deep(.cp-picker-wrap) {
    margin: 0;
  }

  .color-picker :deep(.ck-cp-container div:nth-child(3)) {
    padding: 0 !important;
  }
</style>
