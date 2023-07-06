import { IItem } from "@/services/items/items.types";
import { ITodo as ITodoService } from "@/services/todos/todos.types";

export interface ITodo {
  title: string;
  description: string;
  items: IItem[];
  id: number;
  todos: ITodoService[];
}
