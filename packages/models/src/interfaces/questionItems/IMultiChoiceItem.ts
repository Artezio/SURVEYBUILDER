import { IQuestionItem } from "./IQuestionItem";
import IAnswerOption from "../IAnswerOption";
import { MULTI_CHOICE } from "../../constants/itemTypes";

export interface IMultiChoiceItem extends IQuestionItem<any> {
    type: MULTI_CHOICE;
    options?: IAnswerOption[];
}
export default IMultiChoiceItem;