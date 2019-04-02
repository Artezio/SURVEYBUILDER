import { ITextItem, QUESTION, observable } from "../..";
import { Item } from "../item";
import { ICollection } from "../../interfaces/ICollection";
import { TEXT } from "../../constants/answerTypes";


@observable
export class TextItem extends Item implements ITextItem {
    type: QUESTION;
    initialValue?: string;
    answerType: TEXT;

    constructor(item: Partial<Omit<ITextItem, 'type' | 'answerType'>> | undefined = {}, parent?: ICollection<ITextItem>) {
        super(item, parent);
        this.type = QUESTION;
        this.initialValue = item.initialValue;
        this.answerType = TEXT;
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