<template>
  <div>
    <!-- todo create error pop up alert with transisition -->
    <section>
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-dark"
      >
        Upcoming Movies
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
          />
        </li>
        <br /><br />
      </ul>
    </section>
  </div>
</template>
<script setup>
const movies = ref([]);

const { data, error } = await useFetch("/api/movies/upcoming", {
  transform: (data) => {
    return {
      movies: data.upcomingMovies.results,
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
