import { DropResult } from "react-beautiful-dnd";

import useNotification from "@/hooks/useNotification";
import { useMutationUpdateItem, useQueryItems } from "@/services/items/items.function";
import { useQueryTodos } from "@/services/todos/todos.function";

export const useAction = () => {
  const { data: todos, isLoading } = useQueryTodos();

  const todoItemsQueries = useQueryItems(todos);

  const { mutate: updateItem } = useMutationUpdateItem();

  const { addSuccess } = useNotification();

  const moveItemDraggable = (result: DropResult) => {
    const params = {
      todoId: Number(result.source.droppableId),
      id: Number(result.draggableId),
      item: {
        target_todo_id: Number(result.destination?.droppableId),
      },
    };

    if (!result.destination?.droppableId) return;
    if (result.source.droppableId === result.destination?.droppableId) return;

    const currentTodo = todos?.findIndex(
      (todo) => todo.id === Number(result.destination?.droppableId),
    ) as number;
    updateItem(params, {
      onSuccess: () => addSuccess(`Item moved to ${todos && todos[currentTodo].title}`),
    });
  };

  return {
    todos,
    isLoading,
    todoItemsQueries,
    moveItemDraggable,
  };
};
