import IQuestionItem from "./IQuestionItem";
import { DATE } from "../..";


export interface IDateItem extends IQuestionItem<string> {
    type: DATE;
}

export default IDateItem;