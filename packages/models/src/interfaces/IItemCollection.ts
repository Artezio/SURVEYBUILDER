import Item from "../models/item";

export interface IItemCollection {
    removeItem(item: Item): void;
    replaceItem(oldItem: Item, newItem: Item): void;
    addDescendantItemAfter(thisItem: Item, newItem: Item): void;
}

export default IItemCollection;