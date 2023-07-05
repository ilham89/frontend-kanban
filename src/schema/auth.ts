import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string().email("Please input valid email!").required("Please input email"),
  password: Yup.string().required("Please input password").min(3, "Password to short"),
});
