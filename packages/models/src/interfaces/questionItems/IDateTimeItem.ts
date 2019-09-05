import IQuestionItem from "./IQuestionItem";
import { DATE_TIME } from "../../constants/itemTypes";


export interface IDateTimeItem extends IQuestionItem<string> {
    type: DATE_TIME;
}

export default IDateTimeItem;