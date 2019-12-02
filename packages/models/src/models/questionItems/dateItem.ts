import { observable } from '@surveybuilder/observable';
import { IDateItem } from "../../interfaces/questionItems/IDateItem";
import QuestionItem from './questionItem';
import { DATE } from '../../constants/itemTypes';

@observable
export class DateItem extends QuestionItem<string> implements IDateItem {
    type: DATE = DATE;
}

export default DateItem;