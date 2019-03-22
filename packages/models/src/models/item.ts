import { IItem, QUESTIONNAIRE_ITEM_TYPES, DISPLAY } from "..";
// import uuid from "uuid/v1";

export class Item implements IItem {
    id: string;
    text?: string;
    type: QUESTIONNAIRE_ITEM_TYPES;

    constructor(item: Partial<IItem> | undefined = {}) {
        this.id = item.id || 'uuid()';
        this.type = DISPLAY;
        this.text = item.text;
    }

    setText(text: string) {
        this.text = text;
    }
}

export default Item;