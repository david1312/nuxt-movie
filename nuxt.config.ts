import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
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
    public: {
      apiBase: "/api",
    },
  },
  nitro: {
    preset: "node-server",
  },
  hooks: {
    listen: async () => {
      await import("./server/chat/ws-server");
    },
  },
  vite: {
    build: {
      sourcemap: true,
    },
    resolve: {
      alias: {
        "@": "/<rootDir>",
      },
    },
  },
});
