import IQuestionItem from "./IQuestionItem";
import { OPEN_CHOICE } from "../../constants/itemTypes";
import IAnswerOption from "../IAnswerOption";


export interface IOpenChoiceItem extends IQuestionItem<any> {
    type: OPEN_CHOICE;
    options: IAnswerOption[];
}

export default IOpenChoiceItem;