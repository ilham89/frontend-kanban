import { useMutation, useQuery } from "@tanstack/react-query";

import { todoServices } from "./todos.api";
import { ITodo } from "./todos.types";
import { queryClient } from "@/helpers/query-client";

export const useQueryTodos = () => useQuery(["todos"], () => todoServices.getTodos(), {});

export const useMutationCreateTodo = () =>
  useMutation((params: Pick<ITodo, "title" | "description">) => todoServices.createTodo(params), {
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
  });
