import { API_URLS } from "~/utils/apiUrl";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { AccessToken } = config;

  const userQuery = getQuery(event);
  const { searchTerm } = userQuery;

  const movies: any[] = await $fetch(API_URLS.SEARCH_MOVIES, {
    method: "get",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AccessToken}`,
    },
    query: {
      query: searchTerm,
    },
  });

  const series: any[] = await $fetch(API_URLS.SEARCH_SERIES, {
    method: "get",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AccessToken}`,
    },
    query: {
      query: searchTerm,
    },
  });

  return { movies, series };
});
