export interface IItem {
  id: number;
  name: string;
  done: boolean | null;
  todo_id: number;
  created_at: string;
  updated_at: string;
  progress_percentage: number | string | null;
}

export interface IParamsDeleteItem {
  todoId: number;
  id: number;
}

export interface IParamsCreateItem {
  todoId: number;
  todo: Pick<IItem, "name" | "progress_percentage">;
}
