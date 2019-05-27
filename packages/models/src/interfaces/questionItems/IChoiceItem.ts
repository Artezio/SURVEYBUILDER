import IQuestionItem from "./IQuestionItem";
import { CHOICE } from "../../constants/itemTypes";
import IAnswerOption from "../IAnswerOption";


export interface IChoiceItem extends IQuestionItem<any> {
    type: CHOICE;
    options: IAnswerOption[];
}

export default IChoiceItem;