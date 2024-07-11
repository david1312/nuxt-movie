import { API_URLS } from "~/utils/apiUrl";
import { useAxios } from "~/composables/useAxios";
import { Movie } from "~/server/model/movie";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  try {
    console.log("test only");

    return { hello: "world" };
  } catch (error) {
    console.error("error api popular:", error);
    throw error;
  }
});
