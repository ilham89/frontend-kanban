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
  createTodo: async (data: Pick<ITodo, "title" | "description">): Promise<ITodo> => {
    const response = await axiosInstance({
      url: "/todos",
      method: "post",
      data,
    });
    return response.data;
  },
};
