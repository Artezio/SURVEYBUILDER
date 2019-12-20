import { IStringItem } from "../../interfaces/questionItems/IStringItem";
import { STRING } from "../../constants/itemTypes";
import { QuestionItem } from "./questionItem";
import { observable } from '@artezio/observable';


@observable
export class StringItem extends QuestionItem<string> implements IStringItem {
    type: STRING = STRING;
}

export default StringItem;