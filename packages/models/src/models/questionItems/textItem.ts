import { ITextItem, observable } from "../..";
import { IItemCollection } from "../../interfaces/IItemCollection";
import { TEXT } from "../../constants/itemTypes";
import { QuestionItem } from "./questionItem";


@observable
export class TextItem extends QuestionItem<string> implements ITextItem {
    type: TEXT = TEXT;
    regexp: RegExp = /[ \r\n\t\S]+/;
    repeats: false = false;

    constructor(item: Partial<Omit<ITextItem, 'type'>> | undefined, parent?: IItemCollection<ITextItem>) {
        super(item, parent);
    }

    updateItem(item: ITextItem) {
        super.updateItem(item);
        // if (item.initialValue !== undefined && this.regexp.test(item.initialValue)) {
            this.initialValue = item.initialValue;
        // }
    }
}

export default TextItem;