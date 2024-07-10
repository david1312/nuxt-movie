<template>
  <div class="flex flex-col h-full justify-center items-center">
    <div
      class="flex flex-col flex-grow max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform hover:-translate-y-3"
    >
      <NuxtLink @click="changeItemState(item)" :to="`/item/${title}`">
        <img
          class="rounded-t-lg"
          :src="`${imageSiteUrl}${poster_path}`"
          alt="Movie Image"
        />
      </NuxtLink>
      <div class="p-5 flex flex-col flex-grow">
        <span href="#">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ title }}
          </h5>
        </span>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Release Date : {{ release_date }}
        </p>
        <p
          v-if="overview"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white-700 rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:hover:bg-white-700 dark:focus:ring-blue-800"
        >
          {{ overview }}
        </p>
        <p
          v-else
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Overview is not available.
        </p>
      </div>
    </div>
    <div class="h-4"></div>
    <!-- Add spacing at the bottom of the card -->
  </div>
</template>

<script setup>
import { useItem } from "~/composables/useItem";

defineProps([
  "id",
  "title",
  "overview",
  "release_date",
  "popularity",
  "poster_path",
  "item",
]);

const imageSiteUrl = "https://image.tmdb.org/t/p/w500";
const itemState = useItem();

const changeItemState = (item) => {
  itemState.value = item;
};
// TODO : Create beautiful loading animation while image still loading
</script>
