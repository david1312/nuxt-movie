<template>
  <div>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <NuxtLink
          to="/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/logo.webp" class="h-16" alt="DMovie Logo" />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >D'Movies</span
          >
        </NuxtLink>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li v-for="nav in NAV_ITEMS" :key="nav.href">
              <NuxtLink
                :to="nav.href"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                active-class="nuxt-link-active"
                aria-current="page"
                >{{ nav.label }}
                <span
                  v-if="nav.specialMenu"
                  class="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                >
                  EXPERIMENTAL
                </span></NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
interface NavMenu {
  href: string;
  label: string;
  specialMenu: boolean;
}
const NAV_ITEMS: NavMenu[] = [
  { href: "/", label: "Home", specialMenu: false },
  { href: "/search", label: "Search", specialMenu: false },
  { href: "/now-playing", label: "Now Playing", specialMenu: false },
  { href: "/top-rated", label: "Top Rated", specialMenu: false },
  { href: "/upcoming", label: "Upcoming", specialMenu: false },
  { href: "/chat", label: "Chat", specialMenu: true },
];
</script>
<style>
.nuxt-link-active {
  color: #3b82f6 !important; /* Tailwind's blue-500 color */
}
</style>
