import { useQuery } from "@tanstack/react-query";

import { todoServices } from "./todos.api";

export const useQueryTodos = () => useQuery(["todos"], () => todoServices.getTodos(), {});
