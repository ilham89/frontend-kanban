import * as React from "react";

import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { windowLocalStorage } from "@/helpers/window";
import useNotification from "@/hooks/useNotification";
import { RegisterSchema } from "@/schema/auth";
import { useMutationSignup } from "@/services/auth/auth.function";

export const useAction = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const { mutate, isLoading } = useMutationSignup();
  const { addError, addSuccess } = useNotification();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
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
    validationSchema: RegisterSchema,
  });

  return { handleClick, isLoading, formik, show, navigate };
};
