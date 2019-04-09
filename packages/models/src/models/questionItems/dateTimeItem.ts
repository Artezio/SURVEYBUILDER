import { observable, QuestionItem } from "../..";
import { ICollection } from "../../interfaces/ICollection";
import { IDateTimeItem } from "../../interfaces/questionItems/IDateTimeItem";
import { DATE_TIME } from "../../constants/itemTypes";

@observable
export class DateTimeItem extends QuestionItem<string> implements IDateTimeItem {
    type: DATE_TIME = DATE_TIME;
    regexp: RegExp = /([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;

    constructor(item: Partial<Omit<IDateTimeItem, 'type'>> | undefined, parent?: ICollection<IDateTimeItem>) {
        super(item, parent);
    }

    updateItem(item: DateTimeItem) {
        super.updateItem(item);
        if (item.initialValue !== undefined && this.regexp.test(item.initialValue)) {
            this.initialValue = item.initialValue;
        }
    }
}

export default DateTimeItem;