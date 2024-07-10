import { API_URLS } from "~/utils/apiUrl";
import { useAxios } from "~/composables/useAxios";
import { Movie } from "~/server/model/movie";

export default defineEventHandler(async () => {
  const api = useAxios();
  try {
    const popularMoviesResponse = await api.get(API_URLS.POPULAR);
    const popularMovies: Movie[] = popularMoviesResponse.data;

    return { popularMovies };
  } catch (error) {
    console.error("error api popular:", error);
    throw error;
  }
});
