// import { Movie } from "~/server/model/movie";
// import mockMovies from "~/data/mockApiMovies.json";
// import mockSeries from "~/data/mockApiSeries.json";
import { API_URLS } from "~/utils/apiUrl";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { AccessToken } = config;

  const movies: any[] = await $fetch(API_URLS.MOVIES, {
    method: "get",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AccessToken}`,
    },
    query: {
      include_adult: false,
      include_video: false,
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
    },
  });

  const series: any[] = await $fetch(API_URLS.SERIES, {
    method: "get",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AccessToken}`,
    },
    query: {
      include_adult: false,
      include_video: false,
      include_null_first_air_dates: false,
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
    },
  });

  // use mock instead for better performance and availability
  // const movies = mockMovies;
  // const series = mockSeries;
  return { movies, series };
});
