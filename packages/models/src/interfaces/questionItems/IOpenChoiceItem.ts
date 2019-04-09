import IQuestionItem from "./IQuestionItem";
import { OPEN_CHOICE } from "../../constants/itemTypes";


export interface IOpenChoiceItem extends IQuestionItem<any> {
    type: OPEN_CHOICE;
    options: any[];
}

export default IOpenChoiceItem;