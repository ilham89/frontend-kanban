import { ILogin, ISignup, ISuccessSignup, IToken } from "./auth.types";
import { axiosInstance } from "@/configs/axios";

export const authServices = {
  postLogin: async (data: ILogin): Promise<IToken> => {
    const response = await axiosInstance({
      url: "/auth/login",
      method: "post",
      data,
    });
    return response.data;
  },
  postSignup: async (data: ISignup): Promise<ISuccessSignup> => {
    const response = await axiosInstance({
      url: "/auth/signup",
      method: "post",
      data,
    });
    return response.data;
  },
};
