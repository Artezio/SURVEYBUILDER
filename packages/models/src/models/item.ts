import { IItem, ITEM_TYPE, DISPLAY } from "..";
import { observable } from "../decorators/temporaryObservable";
import uuid from "uuid/v1";
import { ICollection } from "../interfaces/ICollection";

@observable
export class Item implements IItem {
    id!: string;
    text?: string;
    type: ITEM_TYPE = DISPLAY;
    parent?: ICollection<IItem>;

    constructor(item: Omit<IItem, 'id' | 'type'> | undefined = {}, parent?: ICollection<IItem>) {
        Object.assign(this, { id: uuid() }, item);
        this.parent = parent;
    }

    updateItem(item: IItem) {
        Object.assign(this, item);
    }

    remove() {
        this.parent && this.parent.removeItem(this);
    }
}

export default Item;