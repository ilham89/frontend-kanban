import * as React from "react";

import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { windowLocalStorage } from "@/helpers/window";
import useNotification from "@/hooks/useNotification";
import { LoginSchema } from "@/schema/auth";
import { useMutationLogin } from "@/services/auth/auth.function";

export const useAction = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const { mutate, isLoading } = useMutationLogin();
  const { addError, addSuccess } = useNotification();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      mutate(values, {
        onSuccess: (data) => {
          windowLocalStorage("set", "auth-token", data.auth_token);
          navigate("/");
          addSuccess(`Selamat datang !`);
        },
        onError: () => {
          addError("Invalid credentials");
        },
      });
    },
    validationSchema: LoginSchema,
  });

  return { handleClick, isLoading, formik, show };
};
