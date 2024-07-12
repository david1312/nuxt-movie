import { Movie } from "~/server/model/movie";
import { API_URLS } from "~/utils/constant";
import { useAxios } from "~/composables/useAxios";

export default defineEventHandler(async (_event) => {
  const api = useAxios();
  try {
    const topRatedMoviesResponse = await api.get(API_URLS.TOP_RATED_MOVIES);

    const topRatedSeriesResponse = await api.get(API_URLS.TOP_RATED_SERIES);

    const topRatedMovies: Movie[] = topRatedMoviesResponse.data;
    const topRatedSeries: Movie[] = topRatedSeriesResponse.data;

    return { topRatedMovies, topRatedSeries };
  } catch (error) {
    console.error("error api search:", error);
    throw error;
  }
});
