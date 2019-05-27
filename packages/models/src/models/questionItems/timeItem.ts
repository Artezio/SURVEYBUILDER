import { QuestionItem } from "../..";
import { TIME } from "../..";
import { ITimeItem } from "../../interfaces/questionItems/ITimeItem";
import { observable } from '@art-forms/observable';

@observable
export class TimeItem extends QuestionItem<string> implements ITimeItem {
    type: TIME = TIME;
}

export default TimeItem;