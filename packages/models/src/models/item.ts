import { IItem, QUESTIONNAIRE_ITEM_TYPES, DISPLAY } from "..";
import { observable } from "../decorators/temporaryObservable";
import uuid from "uuid/v1";
import { ICollection } from "../interfaces/ICollection";

@observable
export class Item implements IItem {
    id: string;
    text?: string;
    type: QUESTIONNAIRE_ITEM_TYPES;
    parent?: ICollection<IItem>;

    constructor(item: Partial<IItem> | undefined = {}, parent?: ICollection<IItem>) {
        this.id = item.id || uuid();
        this.type = DISPLAY;
        this.text = item.text;
        this.parent = parent;
    }

    setText(text: string) {
        this.text = text;
    }

    updateItem(item: IItem) {
        this.id = item.id;
        this.text = item.text;
    }

    removeItem() {
        this.parent && this.parent.removeItem(this);
    }
}

export default Item;