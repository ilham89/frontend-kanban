import { useState } from "react";

import { useDisclosure } from "@chakra-ui/react";
import { useFormik } from "formik";

import { generateRandomColorPair } from "@/helpers/color";
import useNotification from "@/hooks/useNotification";
import { CreateItemSchema } from "@/schema/items";
import { useMutationCreateItem } from "@/services/items/items.function";

export const useAction = (id: number) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mutate, isLoading } = useMutationCreateItem();
  const { addError, addSuccess } = useNotification();
  const [colorPair, _setColorPair] = useState(generateRandomColorPair());

  const formik = useFormik({
    initialValues: {
      name: "",
      progress_percentage: "",
    },
    onSubmit: (values) => {
      const params = {
        todoId: id,
        todo: values,
      };
      mutate(params, {
        onSuccess: () => {
          addSuccess("Successfully create item!");
          onClose();
        },
        onError: () => {
          addError("Something went wrong");
        },
      });
    },
    validationSchema: CreateItemSchema,
  });

  return {
    isOpen,
    onOpen,
    onClose,
    isLoading,
    formik,
    colorPair,
  };
};
