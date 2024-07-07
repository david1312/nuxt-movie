import { API_URLS } from "~/utils/apiUrl";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { AccessToken } = config;

  const upcomingMovies: any[] = await $fetch(API_URLS.UPCOMING_MOVIES, {
    method: "get",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AccessToken}`,
    },
  });

  return { upcomingMovies };
});
