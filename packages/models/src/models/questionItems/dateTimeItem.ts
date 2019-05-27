import { QuestionItem } from "../..";
import { observable } from '@art-forms/observable';
import { IDateTimeItem } from "../../interfaces/questionItems/IDateTimeItem";
import { DATE_TIME } from "../../constants/itemTypes";

@observable
export class DateTimeItem extends QuestionItem<string> implements IDateTimeItem {
    type: DATE_TIME = DATE_TIME;
}

export default DateTimeItem;