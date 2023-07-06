import { useDisclosure } from "@chakra-ui/react";
import { useFormik } from "formik";

import useNotification from "@/hooks/useNotification";
import { TodoSchema } from "@/schema/todos";
import { useMutationCreateTodo } from "@/services/todos/todos.function";

export const useAction = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mutate, isLoading } = useMutationCreateTodo();
  const { addError, addSuccess } = useNotification();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: (values) => {
      mutate(values, {
        onSuccess: () => {
          addSuccess("Successfully create new group!");
          onClose();
        },
        onError: () => {
          addError("Something went wrong");
        },
      });
    },
    validationSchema: TodoSchema,
  });

  return {
    isOpen,
    onOpen,
    onClose,
    formik,
    isLoading,
  };
};
