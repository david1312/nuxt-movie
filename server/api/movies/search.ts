import { Movie } from "~/server/model/movie";
import { API_URLS } from "~/utils/apiUrl";
import { useAxios } from "~/composables/useAxios";

export default defineEventHandler(async (event) => {
  const api = useAxios();
  const query = getQuery(event);
  try {
    const moviesResponse = await api.get(API_URLS.SEARCH_MOVIES, {
      params: {
        query: query.searchTerm || "",
      },
    });

    const seriesResponse = await api.get(API_URLS.SEARCH_SERIES, {
      params: {
        query: query.searchTerm || "",
      },
    });

    const movies: Movie[] = moviesResponse.data;
    const series: Movie[] = seriesResponse.data;

    return { movies, series };
  } catch (error) {
    console.error("error api search:", error);
    throw error;
  }
});
