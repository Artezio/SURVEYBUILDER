import { TEXT } from "../../constants/itemTypes";
import { QuestionItem } from "./questionItem";
import { observable } from '@artezio/observable';
import ITextItem from "../../interfaces/questionItems/ITextItem";

@observable
export class TextItem extends QuestionItem<string> implements ITextItem {
    type: TEXT = TEXT;
}

export default TextItem;