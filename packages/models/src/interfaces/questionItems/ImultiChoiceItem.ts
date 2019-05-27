import IQuestionItem from "./IQuestionItem";
import { MULTI_CHOICE } from "../..";
import IAnswerOption from "../IAnswerOption";

export interface IMultiChoiceItem extends IQuestionItem<any> {
    type: MULTI_CHOICE;
    options: IAnswerOption[];
}

export default IMultiChoiceItem;