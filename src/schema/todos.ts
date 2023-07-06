import * as Yup from "yup";

export const CreateTodoSchema = Yup.object({
  title: Yup.string().required("Please input title"),
  description: Yup.string().required("Please input description").min(6, "Description to short"),
});
