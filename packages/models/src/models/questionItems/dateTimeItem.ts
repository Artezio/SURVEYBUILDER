import { observable } from '@artezio/observable';
import { IDateTimeItem } from "../../interfaces/questionItems/IDateTimeItem";
import { DATE_TIME } from "../../constants/itemTypes";
import QuestionItem from './questionItem';

@observable
export class DateTimeItem extends QuestionItem<string> implements IDateTimeItem {
    type: DATE_TIME = DATE_TIME;
}

export default DateTimeItem;