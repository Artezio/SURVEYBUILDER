import { IStringItem } from "../../interfaces/questionItems/IStringItem";
import { STRING } from "../../constants/itemTypes";
import { QuestionItem } from "./questionItem";
import { ICollection } from "../../interfaces/ICollection";
import { observable } from "../../decorators/temporaryObservable";


@observable
export class StringItem extends QuestionItem<string> implements IStringItem {
    type: STRING = STRING;
    regexp: RegExp = /[ \r\n\t\S]+/;

    constructor(item: Partial<Omit<IStringItem, 'type'>> | undefined, parent?: ICollection<IStringItem>) {
        super(item, parent);
    }

    updateItem(item: StringItem) {
        super.updateItem(item);
        if (item.initialValue !== undefined && this.regexp.test(item.initialValue)) {
            this.initialValue = item.initialValue;
        }
    }
}

export default StringItem;