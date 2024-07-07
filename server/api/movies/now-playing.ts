import { API_URLS } from "~/utils/apiUrl";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { AccessToken } = config;

  const nowPlayingMovies: any[] = await $fetch(API_URLS.NOW_PLAYING, {
    method: "get",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AccessToken}`,
    },
  });

  return { nowPlayingMovies };
});
