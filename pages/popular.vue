<template>
  <div>
    <section>
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-dark"
      >
        Popular Movies
      </h1>
      <ul
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
      >
        <li v-for="mov in movies" :key="mov.id" class="flex">
          <MovieCard
            :poster_path="mov.poster_path"
            :title="mov.title"
            :id="mov.id"
            :overview="mov.overview"
            :release_date="mov.release_date"
            :popularity="mov.popularity"
            :item="mov"
            class="flex flex-col flex-grow"
          />
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MovieCard from "./components/MovieCard.vue";

const movies = ref([]);

const { data, error } = await useFetch("/api/movies/popular", {
  transform: (data) => {
    return {
      movies: data.popularMovies.results,
    };
  },
});

if (data.value) {
  movies.value = data.value.movies;
}

if (error.value) {
  console.error("Error fetching data:", error.value);
}
</script>
