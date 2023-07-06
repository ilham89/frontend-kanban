import { AxiosResponse } from "axios";

import { IItem, IParamsUpdateItem } from "./items.types";
import { axiosInstance } from "@/configs/axios";

export const itemServices = {
  getItems: async (todoId: number) => {
    const response: AxiosResponse<IItem[]> = await axiosInstance({
      url: `/todos/${todoId}/items`,
      method: "get",
    });
    return response.data;
  },
  deleteItem: async (todoId: number, id: number) => {
    const response = await axiosInstance({
      url: `/todos/${todoId}/items/${id}`,
      method: "delete",
    });
    return response.data;
  },
  createItem: async (todoId: number, data: Pick<IItem, "name" | "progress_percentage">) => {
    const response = await axiosInstance({
      url: `/todos/${todoId}/items`,
      method: "post",
      data,
    });
    return response.data;
  },
  updateItem: async (
    todoId: number,
    id: number,
    data: Partial<Pick<IParamsUpdateItem, "item">> & { target_todo_id: number },
  ) => {
    const response = await axiosInstance({
      url: `/todos/${todoId}/items/${id}`,
      method: "patch",
      data,
    });
    return response.data;
  },
};
