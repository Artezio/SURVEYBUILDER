import { Item } from "..";

export interface IItemCollection<T> {
    removeItem(item: T): void;
    replaceItem(oldItem: T, newItem: Item): void;
}

export default IItemCollection;