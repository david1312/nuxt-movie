<template>
  <div>
    <!-- todo create error pop up alert with transisition -->
    <section>
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-dark"
      >
        Featured D'Movies
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
    <section>
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-dark"
      >
        Featured TV Series
      </h1>
      <ul class="grid grid-cols-5 gap">
        <li v-for="serie in series">
          <SeriesCard
            :name="serie.name"
            :overview="serie.overview"
            :first_air_date="serie.first_air_date"
            :poster_path="serie.poster_path"
            :popularity="serie.popularity"
            :item="serie"
          />
        </li>
        <br /><br />
      </ul>
    </section>
  </div>
</template>
<script setup>
import MovieCard from "./components/MovieCard.vue";
import SeriesCard from "./components/SeriesCard.vue";

const movies = ref([]);
const series = ref([]);
const error = ref(null);

const { data, error: fetchError } = await useFetch("/api/movies/discover", {
  transform: (data) => {
    return {
      movies: data.movies.results,
      series: data.series.results,
    };
  },
});

if (data.value) {
  movies.value = data.value.movies;
  series.value = data.value.series;
}

if (error.value) {
  console.error("Error fetching data:", error.value);
}

if (fetchError.value) {
  error.value = fetchError.value;
  console.error("Error fetching data:", fetchError.value);
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
