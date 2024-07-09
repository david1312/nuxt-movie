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
    public: {
      apiBase: "/api", // Public runtime configurations can be accessed both client-side and server-side
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
  vite: {
    // This is where you can extend Vite configurations
    build: {
      sourcemap: true, // Example of setting sourcemaps
    },
    plugins: [
      // Example of adding Vite plugins
    ],
    resolve: {
      alias: {
        "@": "/<rootDir>",
      },
    },
  },
});
