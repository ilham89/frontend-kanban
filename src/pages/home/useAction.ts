import { DropResult } from "react-beautiful-dnd";

import { useMutationUpdateItem, useQueryItems } from "@/services/items/items.function";
import { useQueryTodos } from "@/services/todos/todos.function";

export const useAction = () => {
  const { data: todos, isLoading } = useQueryTodos();

  const todoItemsQueries = useQueryItems(todos);

  const { mutate: updateItem } = useMutationUpdateItem();

  const moveItemDraggable = (result: DropResult) => {
    const params = {
      todoId: Number(result.source.droppableId),
      id: Number(result.draggableId),
      item: {
        target_todo_id: Number(result.destination?.droppableId),
      },
    };

    if (result.source.droppableId === result.destination?.droppableId) return;

    updateItem(params);
  };

  return {
    todos,
    isLoading,
    todoItemsQueries,
    moveItemDraggable,
  };
};
