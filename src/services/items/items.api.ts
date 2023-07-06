import { AxiosResponse } from "axios";

import { IItem } from "./items.types";
import { axiosInstance } from "@/configs/axios";

export const itemServices = {
  getItems: async (id: number) => {
    const response: AxiosResponse<IItem[]> = await axiosInstance({
      url: `/todos/${id}/items`,
      method: "get",
    });
    return response.data;
  },
};
