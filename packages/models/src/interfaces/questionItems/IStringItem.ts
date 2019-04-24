import IQuestionItem from "./IQuestionItem";
import { STRING } from "../../constants/itemTypes";

export interface IStringItem extends IQuestionItem<string> {
    type: STRING;
    repeats: false;
}

export default IStringItem;