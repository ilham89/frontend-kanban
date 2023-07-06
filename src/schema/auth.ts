import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string().email("Please input valid email!").required("Please input email"),
  password: Yup.string().required("Please input password").min(3, "Password to short"),
});

export const RegisterSchema = Yup.object({
  name: Yup.string().required("Please input name").min(3, "Name to short"),
  email: Yup.string().email("Please input valid email!").required("Please input email"),
  password: Yup.string().required("Please input password").min(3, "Password to short"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please input password confirmation"),
});
