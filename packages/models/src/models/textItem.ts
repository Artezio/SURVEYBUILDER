import { ITextItem, QUESTION, observable } from "..";
import { Item } from "./item";


@observable
export class TextItem extends Item implements ITextItem {
    id: string;
    text?: string;
    type: QUESTION;
    initialValue?: string;

    constructor(item: Partial<ITextItem> | undefined = {}) {
        super(item);
        this.type = QUESTION;
        this.initialValue = item.initialValue;
    }

    setInitialValue(initialValue: string) {
        this.initialValue = initialValue;
    }
}

export default TextItem;