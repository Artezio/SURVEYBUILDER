import IQuestionItem from "./IQuestionItem";
import { STRING } from "../../constants/answerTypes";

export interface IStringItem extends IQuestionItem<string> {
    answerType: STRING;
}