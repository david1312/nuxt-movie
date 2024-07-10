import { API_URLS } from "~/utils/apiUrl";
import { useAxios } from "~/composables/useAxios";
import { Movie } from "~/server/model/movie";

export default defineEventHandler(async () => {
  const api = useAxios();
  try {
    const nowPlayingResponse = await api.get(API_URLS.NOW_PLAYING);
    const nowPlayingMovies: Movie[] = nowPlayingResponse.data;

    return { nowPlayingMovies };
  } catch (error) {
    console.error("error api now playing:", error);
    throw error;
  }
});
