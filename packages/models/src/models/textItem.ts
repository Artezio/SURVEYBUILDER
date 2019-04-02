import { ITextItem, QUESTION, observable } from "..";
import { Item } from "./item";
import { ICollection } from "../interfaces/ICollection";
import { STRING } from "../constants/answerTypes";


@observable
export class TextItem extends Item implements ITextItem {
    type: QUESTION;
    initialValue?: string;
    answerType: STRING;

    constructor(item: Partial<ITextItem> | undefined = {}, parent?: ICollection<ITextItem>) {
        super(item, parent);
        this.type = QUESTION;
        this.initialValue = item.initialValue;
        this.answerType = STRING;
    }

    setInitialValue(initialValue: string) {
        this.initialValue = initialValue;
    }

    updateItem(textItem: Omit<ITextItem, 'answerType'>) {
        super.updateItem(textItem);
        this.initialValue = textItem.initialValue;
    }
}

export default TextItem;