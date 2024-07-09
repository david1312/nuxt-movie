export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
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
    server: {
      host: "0.0.0.0", // default: localhost
      port: 3000, // default: 3000
    },
  },
  nitro: {
    preset: "node-server", // Ensure using a node-server preset
  },
});
