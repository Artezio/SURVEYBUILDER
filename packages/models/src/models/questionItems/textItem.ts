import { ITextItem, observable } from "../..";
import { ICollection } from "../../interfaces/ICollection";
import { TEXT } from "../../constants/itemTypes";
import { QuestionItem } from "./questionItem";


@observable
export class TextItem extends QuestionItem<string> implements ITextItem {
    type: TEXT = TEXT;
    regexp: RegExp = /[ \r\n\t\S]+/;

    constructor(item: Partial<Omit<ITextItem, 'type'>> | undefined, parent?: ICollection<ITextItem>) {
        super(item, parent);
    }

    updateItem(item: TextItem) {
        super.updateItem(item);
        if (item.initialValue !== undefined && this.regexp.test(item.initialValue)) {
            this.initialValue = item.initialValue;
        }
    }
}

export default TextItem;