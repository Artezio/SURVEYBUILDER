import IQuestionItem from "./IQuestionItem";
import { MULTI_CHOICE, IChoiceOption } from "../..";

export interface IMultiChoiceItem extends IQuestionItem<any> {
    type: MULTI_CHOICE;
    options: IChoiceOption[];
    repeats: true;
}

export default IMultiChoiceItem;