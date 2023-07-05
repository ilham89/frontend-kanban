import { IItem } from "../item/item.type";

export interface ITodo {
  title: string;
  description: string;
  items: IItem[];
}
