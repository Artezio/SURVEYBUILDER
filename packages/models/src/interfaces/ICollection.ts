import { Item } from "..";

export interface ICollection<T> {
    removeItem(item: T): void;
    replaceItem(oldItem: T, newItem: Item): void;
}

export default ICollection;