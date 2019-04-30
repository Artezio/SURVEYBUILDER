import { Item } from "..";

export interface IItemCollection<T> {
    removeItem(item: T): void;
    replaceItem(oldItem: T, newItem: Item): void;
    moveItem(position: number, newPlace: number): void;
}

export default IItemCollection;