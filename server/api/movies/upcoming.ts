import { API_URLS } from "~/utils/apiUrl";
import { useAxios } from "~/composables/useAxios";
import { Movie } from "~/server/model/movie";

export default defineEventHandler(async () => {
  const api = useAxios();
  try {
    const upcomingMoviesResponse = await api.get(API_URLS.UPCOMING_MOVIES);
    const upcomingMovies: Movie[] = upcomingMoviesResponse.data;

    return { upcomingMovies };
  } catch (error) {
    console.error("error api upcoming:", error);
    throw error;
  }
});
