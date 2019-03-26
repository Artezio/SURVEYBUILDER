import { ITextItem, QUESTION, observable } from "..";
import { Item } from "./item";
import { ICollection } from "../interfaces/ICollection";


@observable
export class TextItem extends Item implements ITextItem {
    type: QUESTION;
    initialValue?: string;

    constructor(item: Partial<ITextItem> | undefined = {}, parent?: ICollection<ITextItem>) {
        super(item, parent);
        this.type = QUESTION;
        this.initialValue = item.initialValue;
    }

    setInitialValue(initialValue: string) {
        this.initialValue = initialValue;
    }

    updateTextItem(textItem: ITextItem) {
        super.updateItem(textItem);
        this.initialValue = textItem.initialValue;
    }
}

export default TextItem;