import { useMutation, useQueries } from "@tanstack/react-query";

import { itemServices } from "./items.api";
import { IParamsDeleteItem } from "./items.types";
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

export const useMutationDeleteItem = () => {
  return useMutation(({ todoId, id }: IParamsDeleteItem) => itemServices.deleteItem(todoId, id), {
    onSuccess: (_, { todoId }) => {
      queryClient.invalidateQueries(["items", todoId]);
    },
  });
};
