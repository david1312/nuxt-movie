import { setupWebSocketServer } from "./server/chat/ws-server";
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  buildDir: "dist",
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
  },
  nitro: {
    preset: "node-server",
  },
  // hooks: {
  //   listen: async () => {
  //     setupWebSocketServer();
  //   },
  // },
});
