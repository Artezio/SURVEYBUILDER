import IQuestionItem from "./IQuestionItem";
import { DATE } from "../../constants/itemTypes";


export interface IDateItem extends IQuestionItem<string> {
    type: DATE;
}

export default IDateItem;