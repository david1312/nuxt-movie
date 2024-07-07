import { API_URLS } from "~/utils/apiUrl";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { AccessToken } = config;

  const topRatedMovies: any[] = await $fetch(API_URLS.TOP_RATED_MOVIES, {
    method: "get",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AccessToken}`,
    },
  });

  const topRatedSeries: any[] = await $fetch(API_URLS.TOP_RATED_SERIES, {
    method: "get",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AccessToken}`,
    },
  });

  return { topRatedMovies, topRatedSeries };
});
