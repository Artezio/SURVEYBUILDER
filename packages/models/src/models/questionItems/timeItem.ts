import { observable, QuestionItem } from "../..";
import { IItemCollection } from "../../interfaces/IItemCollection";
import { TIME } from "../..";
import { ITimeItem } from "../../interfaces/questionItems/ITimeItem";

@observable
export class TimeItem extends QuestionItem<string> implements ITimeItem {
    type: TIME = TIME;
    regexp: RegExp = /([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?/;
    repeats: false = false;

    constructor(item: Partial<Omit<ITimeItem, 'type'>> | undefined, parent?: IItemCollection<ITimeItem>) {
        super(item, parent);
    }

    updateItem(item: ITimeItem) {
        super.updateItem(item);
        // if (item.initialValue !== undefined && this.regexp.test(item.initialValue)) {
            this.initialValue = item.initialValue;
        // }
    }
}

export default TimeItem;