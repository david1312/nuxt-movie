<template>
  <div>
    <form class="max-w-md mx-auto">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          v-model="searchTerm"
          type="text"
          id="default-search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Movies, Series..."
          required
        />
        <!-- <button
          type="submit"
          class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button> -->
      </div>
    </form>
    <Loading :showLoading="showLoading" />
    <section>
      <h1
        v-if="movies.length"
        class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-dark"
      >
        Movie Search Results
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
    <section v-if="series.length">
      <h1
        class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-dark"
      >
        Series Search Results
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
import { debounce } from "lodash";
import Loading from "~/components/Loading.vue";
const searchTerm = useState("searchTerm", () => "");
const movies = ref([]);
const series = ref([]);
const showLoading = ref(false);

const fetchMoviesAndSeries = async () => {
  showLoading.value = true;
  const { data, error } = await useFetch("/api/movies/search", {
    query: {
      searchTerm: searchTerm.value,
    },
  });

  showLoading.value = false;

  if (data.value) {
    movies.value = data.value.movies.results;
    series.value = data.value.series.results;
  }

  if (error.value) {
    console.error("Error fetching data:", error.value);
  }
};

// Create a debounced version of the fetch function
const debouncedFetch = debounce(fetchMoviesAndSeries, 500);

watch(searchTerm, () => {
  if (searchTerm.value.trim()) {
    debouncedFetch();
  } else {
    movies.value = [];
    series.value = [];
  }
});

// Clear the search term when the component is mounted
onMounted(() => {
  searchTerm.value = "";
  movies.value = [];
  series.value = [];
});
</script>
