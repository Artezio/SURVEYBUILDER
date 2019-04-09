import IQuestionItem from "./IQuestionItem";
import { CHOICE } from "../../constants/itemTypes";


export interface IChoiceItem extends IQuestionItem<any> {
    type: CHOICE;
    options: any[];
}

export default IChoiceItem;