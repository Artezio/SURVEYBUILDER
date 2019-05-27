import { ITextItem } from "../..";
import { TEXT } from "../../constants/itemTypes";
import { QuestionItem } from "./questionItem";
import { observable } from '@art-forms/observable';

@observable
export class TextItem extends QuestionItem<string> implements ITextItem {
    type: TEXT = TEXT;
}

export default TextItem;