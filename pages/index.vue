<template>
  <div>
    <section>
      <h1
        class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-dark"
      >
        Featured D'Movies x Netifly
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
    <section>
      <h1
        class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-dark"
      >
        Featured D'eries x Netifly
      </h1>
      <ul
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
      >
        <li v-for="serie in series" :key="serie.id" class="flex">
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
const movies = ref([]);
const series = ref([]);

const { data, error } = await useFetch("/api/movies/discover", {
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
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: transform 0.5s;
}
.page-enter,
.page-leave-to {
  transform: rotateY(90deg);
}
</style>
