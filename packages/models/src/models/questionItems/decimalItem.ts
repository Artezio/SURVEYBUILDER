import { DECIMAL } from "../../constants/itemTypes";
import { observable, QuestionItem, IDecimalItem } from "../..";
import { ICollection } from "../../interfaces/ICollection";

@observable
export class DecimalItem extends QuestionItem<number> implements IDecimalItem {
    type: DECIMAL = DECIMAL;
    regexp: RegExp = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?[0-9]+)?/;

    constructor(item: Partial<Omit<IDecimalItem, 'type'>> | undefined, parent?: ICollection<IDecimalItem>) {
        super(item, parent);
    }

    updateItem(item: DecimalItem) {
        super.updateItem(item);
        if (item.initialValue !== undefined && this.regexp.test(item.initialValue + '')) {
            this.initialValue = item.initialValue;
        }
    }
}

export default DecimalItem;