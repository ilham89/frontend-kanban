import { useQueryItems } from "@/services/items/items.function";
import { useQueryTodos } from "@/services/todos/todos.function";

export const useAction = () => {
  const { data: todos, isLoading } = useQueryTodos();

  const todoItemsQueries = useQueryItems(todos);

  return {
    todos,
    isLoading,
    todoItemsQueries,
  };
};
