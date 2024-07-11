export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  components: true,
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss"],
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js",
        },
      ],
    },
  },
  runtimeConfig: {
    AccessToken: process.env.AccessToken,
    ApiBaseUrl: process.env.ApiBaseUrl,
  },
});
