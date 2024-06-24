// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
    strict: true,
    shim: false,
  },
  ssr: false,
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "radix-vue/nuxt"],
  components: [
    {
      path: "~/components",
      // this is required else Nuxt will autoImport `.ts` file
      extensions: [".vue"],
    },
  ],
  imports: {
    dirs: ["./configs"],
  },
  css: ["@cyhnkckali/vue3-color-picker/dist/style.css"],
  radix: {
    prefix: "R",
  },
});
