import { useDisclosure } from "@chakra-ui/react";
import { useFormik } from "formik";

import useNotification from "@/hooks/useNotification";
import { CreateItemSchema } from "@/schema/items";
import { useMutationDeleteItem, useMutationUpdateItem } from "@/services/items/items.function";
import { IItem } from "@/services/items/items.types";
import { ITodo } from "@/services/todos/todos.types";

export const useAction = (item: IItem, todos: ITodo[]) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: openUpdate, onOpen: onOpenUpdate, onClose: onCloseUpdate } = useDisclosure();

  const { mutate, isLoading } = useMutationDeleteItem();
  const { mutate: updateItem } = useMutationUpdateItem();
  const { addError, addSuccess } = useNotification();

  const confirmDelete = () => {
    const params = {
      todoId: item.todo_id,
      id: item.id,
    };
    mutate(params, {
      onSuccess: () => onClose(),
    });
  };

  const currentTodoPosition = todos.findIndex((todo) => todo.id === item.todo_id);

  const moveItem = (position: "left" | "right") => {
    const targetTodo =
      todos[position === "left" ? currentTodoPosition - 1 : currentTodoPosition + 1];
    const params = {
      todoId: item.todo_id,
      id: item.id,
      item: {
        target_todo_id: targetTodo.id,
      },
    };

    updateItem(params, {
      onSuccess: () => addSuccess(`Item moved to ${targetTodo.title}`),
    });
  };

  const formik = useFormik({
    initialValues: {
      name: item.name,
      progress_percentage: item.progress_percentage,
    },
    onSubmit: (values) => {
      const params = {
        todoId: item.todo_id,
        id: item.id,
        item: {
          target_todo_id: item.todo_id,
          ...values,
        },
      };
      updateItem(params, {
        onSuccess: () => {
          addSuccess("Successfully update item!");
          onCloseUpdate();
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
    onOpenUpdate,
    onCloseUpdate,
    openUpdate,
    isLoading,
    confirmDelete,
    moveItem,
    formik,
  };
};
