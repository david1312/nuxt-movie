import { Movie } from "~/server/model/movie";
// import mockMovies from "~/data/mockApiMovies.json";
// import mockSeries from "~/data/mockApiSeries.json";
import { API_URLS } from "~/utils/apiUrl";
import { useAxios } from "~/composables/useAxios";

export default defineEventHandler(async () => {
  const api = useAxios();
  // const nuxtApp = useNuxtApp();
  // const api = nuxtApp.$axios as AxiosInstance;
  try {
    const moviesResponse = await api.get(API_URLS.MOVIES, {
      params: {
        include_adult: false,
        include_video: false,
        language: "en-US",
        page: "1",
        sort_by: "popularity.desc",
      },
    });

    const seriesResponse = await api.get(API_URLS.SERIES, {
      params: {
        include_adult: false,
        include_video: false,
        include_null_first_air_dates: false,
        language: "en-US",
        page: "1",
        sort_by: "popularity.desc",
      },
    });

    const movies: Movie[] = moviesResponse.data;
    const series: Movie[] = seriesResponse.data;
    return { movies, series };
  } catch (error) {
    console.error("error api discover:", error);
    throw error;
  }
});
