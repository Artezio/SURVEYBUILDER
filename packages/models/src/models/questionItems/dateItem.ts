import { QuestionItem } from "../..";
import { observable } from '@art-forms/observable';
import { IDateItem } from "../../interfaces/questionItems/IDateItem";
import { DATE } from "../..";

@observable
export class DateItem extends QuestionItem<string> implements IDateItem {
    type: DATE = DATE;
}

export default DateItem;