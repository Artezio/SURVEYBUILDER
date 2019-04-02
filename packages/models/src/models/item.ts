import { IItem, ITEM_TYPE, DISPLAY } from "..";
import { observable } from "../decorators/temporaryObservable";
import uuid from "uuid/v1";
import { ICollection } from "../interfaces/ICollection";

@observable
export class Item implements IItem {
    id: string;
    text?: string;
    type: ITEM_TYPE;
    parent?: ICollection<IItem>;

    constructor(item: Omit<IItem, 'id' | 'type'> | undefined = {}, parent?: ICollection<IItem>) {
        this.id = uuid();
        this.type = DISPLAY;
        this.text = item.text;
        this.parent = parent;
    }

    updateItem(item: IItem) {
        this.text = item.text;
    }

    remove() {
        this.parent && this.parent.removeItem(this);
    }
}

export default Item;