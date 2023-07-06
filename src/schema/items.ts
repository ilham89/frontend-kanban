import * as Yup from "yup";

export const CreateItemSchema = Yup.object({
  name: Yup.string().required("Please input name"),
  progress_percentage: Yup.number().required("Please input progress").max(100, "Max value is 100"),
});
