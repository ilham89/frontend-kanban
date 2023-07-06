import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { todoServices } from "./todos.api";
import { ITodo } from "./todos.types";

export const useQueryTodos = () => useQuery(["todos"], () => todoServices.getTodos(), {});

export const useMutationCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (params: Pick<ITodo, "title" | "description">) => todoServices.createTodo(params),
    {
      onSuccess: () => queryClient.invalidateQueries(["todos"]),
    },
  );
};
