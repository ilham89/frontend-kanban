import Axios, { InternalAxiosRequestConfig } from "axios";

import { windowLocalStorage } from "@/helpers/window";
import useNotification from "@/hooks/useNotification";

export const axiosInstance = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const token = windowLocalStorage("get", "auth-token");
  config.headers["Content-Type"] = "application/json";
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { addError } = useNotification();

    if (error.response?.status === 401) {
      window.location.href = "/v1/login";
    }

    if (
      error?.response?.config?.method !== "post" &&
      error?.response?.config?.method !== "put" &&
      error?.response?.config?.method !== "delete"
    ) {
      if (error.response?.status === 403) {
        addError(error?.response?.data?.message);
      }
      if (error.response?.status === 502) {
        addError(error?.response?.data?.message);
      }
      if (error.response?.status === 500) {
        addError(error?.response?.data?.message);
      }
      if (error.response?.status === 404) {
        addError(error?.response?.data?.message);
      }
      if (error.response?.status === 400) {
        addError(error?.response?.data?.message);
      }
      if (error.response?.status === 422) {
        addError(error?.response?.data?.message);
      }
    }
    return Promise.reject(error);
  },
);
