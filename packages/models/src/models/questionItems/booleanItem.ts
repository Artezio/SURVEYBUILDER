import { BOOLEAN } from "../../constants/itemTypes";
import { observable, QuestionItem, IBooleanItem } from "../..";
import { IItemCollection } from "../../interfaces/IItemCollection";

@observable
export class BooleanItem extends QuestionItem<boolean> implements IBooleanItem {
    type: BOOLEAN = BOOLEAN;
    regexp: RegExp = /true|false/;
    repeats: false = false;

    constructor(item: Partial<Omit<IBooleanItem, 'type'>> | undefined, parent?: IItemCollection<IBooleanItem>) {
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