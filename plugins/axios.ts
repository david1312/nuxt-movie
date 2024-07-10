import { defineNuxtPlugin } from "#app";
import axios, { AxiosInstance } from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();

  const api: AxiosInstance = axios.create({
    baseURL: runtimeConfig.ApiBaseUrl || "",
  });

  // Request interceptor to add the token
  api.interceptors.request.use(
    (config) => {
      const token = runtimeConfig.AccessToken;
      if (token) {
        config.headers.Authorization = `Bearer ${runtimeConfig.AccessToken}`;
      }
      config.headers.Accept = "application/json";
      return config;
    },
    (error) => {
      console.log("axios error :", error);
      return Promise.reject(error);
    }
  );

  return nuxtApp.provide("axios", api);
});
