import { IItem } from "@/services/items/items.types";

export interface ITodo {
  title: string;
  description: string;
  items: IItem[];
  id: number;
}
