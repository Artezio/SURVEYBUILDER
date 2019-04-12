import { BOOLEAN } from "../../constants/itemTypes";
import { observable, QuestionItem, IBooleanItem } from "../..";
import { ICollection } from "../../interfaces/ICollection";

@observable
export class BooleanItem extends QuestionItem<boolean> implements IBooleanItem {
    type: BOOLEAN = BOOLEAN;
    regexp: RegExp = /true|false/;

    constructor(item: Partial<Omit<IBooleanItem, 'type'>> | undefined, parent?: ICollection<IBooleanItem>) {
        super(item, parent);
    }

    updateItem(item: IBooleanItem) {
        super.updateItem(item);
        // if (item.initialValue !== undefined && this.regexp.test(item.initialValue + '')) {
            this.initialValue = item.initialValue;
        // }
    }
}

export default BooleanItem;