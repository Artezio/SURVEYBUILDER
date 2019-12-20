import { ITimeItem } from "../../interfaces/questionItems/ITimeItem";
import { observable } from '@artezio/observable';
import QuestionItem from "./questionItem";
import { TIME } from "../../constants/itemTypes";

@observable
export class TimeItem extends QuestionItem<string> implements ITimeItem {
    type: TIME = TIME;
}

export default TimeItem;