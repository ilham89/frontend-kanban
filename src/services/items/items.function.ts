import { useQueries } from "@tanstack/react-query";

import { itemServices } from "./items.api";
import { ITodo } from "../todos/todos.types";

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
