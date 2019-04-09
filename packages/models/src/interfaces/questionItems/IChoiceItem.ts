import IQuestionItem from "./IQuestionItem";
import { CHOICE } from "../../constants/itemTypes";


export interface IChoiceItem extends IQuestionItem<any> {
    type: CHOICE;
}

export default IChoiceItem;