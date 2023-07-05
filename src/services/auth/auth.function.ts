import { useMutation } from "@tanstack/react-query";

import { authServices } from "./auth.api";
import { ILogin, ISignup } from "./auth.types";

export const useMutationLogin = () =>
  useMutation((params: ILogin) => authServices.postLogin(params));

export const useMutationSignup = () =>
  useMutation((params: ISignup) => authServices.postSignup(params));
