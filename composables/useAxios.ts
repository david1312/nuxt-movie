import axios from "axios";
import type { AxiosInstance } from "axios";

export const useAxios = (): AxiosInstance => {
  const runtimeConfig = useRuntimeConfig();

  const api = axios.create({
    baseURL: runtimeConfig.ApiBaseUrl || "",
  });

  // Request interceptor to add the token and Accept header
  api.interceptors.request.use(
    (config) => {
      const token = runtimeConfig.AccessToken;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      config.headers.Accept = "application/json";
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return api;
};
