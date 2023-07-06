import { AxiosResponse } from "axios";

import { ITodo } from "./todos.types";
import { axiosInstance } from "@/configs/axios";

export const todoServices = {
  getTodos: async () => {
    const response: AxiosResponse<ITodo[]> = await axiosInstance({
      url: "/todos",
      method: "get",
    });
    return response.data;
  },
};
