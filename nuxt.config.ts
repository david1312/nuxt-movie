export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  buildDir: "dist",
  devtools: { enabled: true },
  extends: "./.nuxt/tsconfig.json",
  components: true,
  modules: ["@nuxtjs/tailwindcss"],
  app: {
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
    public: {
      // Public runtime configurations can be accessed both client-side and server-side
      apiBase: "/api",
    },
  },
  nitro: {
    preset: "node-server", // Ensure using a node-server preset
  },
  hooks: {
    listen: async () => {
      await import("./server/chat/ws-server");
    },
  },
});
