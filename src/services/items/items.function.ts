import { useMutation, useQueries } from "@tanstack/react-query";

import { itemServices } from "./items.api";
import { IParamsCreateItem, IParamsDeleteItem, IParamsUpdateItem } from "./items.types";
import { ITodo } from "../todos/todos.types";
import { queryClient } from "@/helpers/query-client";

export const useQueryItems = (todos?: ITodo[]) =>
  useQueries({
    queries:
      todos?.map((todo) => {
        return {
          queryKey: ["items", todo.id],
          queryFn: () => itemServices.getItems(todo.id),
        };
      }) || [],
  });

export const useMutationDeleteItem = () =>
  useMutation(({ todoId, id }: IParamsDeleteItem) => itemServices.deleteItem(todoId, id), {
    onSuccess: (_, { todoId }) => {
      queryClient.invalidateQueries(["items", todoId]);
    },
  });

export const useMutationCreateItem = () =>
  useMutation((params: IParamsCreateItem) => itemServices.createItem(params.todoId, params.todo), {
    onSuccess: (_, { todoId }) => {
      queryClient.invalidateQueries(["items", todoId]);
    },
  });

export const useMutationUpdateItem = () =>
  useMutation(
    (params: IParamsUpdateItem) => itemServices.updateItem(params.todoId, params.id, params.item),
    {
      onSuccess: (_, { todoId, item }) => {
        queryClient.invalidateQueries(["items", todoId]);
        queryClient.invalidateQueries(["items", item.target_todo_id]);
      },
    },
  );
