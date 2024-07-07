<template>
  <div>
    <section>
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-dark"
      >
        Popular Movies
      </h1>
      <ul class="grid grid-cols-5 gap">
        <li v-for="mov in movies">
          <MovieCard
            :poster_path="mov.poster_path"
            :title="mov.title"
            :id="mov.id"
            :overview="mov.overview"
            :release_date="mov.release_date"
            :popularity="mov.popularity"
            :item="mov"
          />
        </li>
        <br /><br />
      </ul>
    </section>
  </div>
</template>
<script setup>
import MovieCard from "./components/MovieCard.vue";

const movies = ref([]);

const { data, error } = await useFetch("/api/movies/popular", {
  transform: (data) => {
    return {
      movies: data.popular.results,
    };
  },
});

if (data.value) {
  movies.value = data.value.movies;
}

if (error.value) {
  console.error("Error fetching data:", error.value);
}
console.log({ movies });
</script>
