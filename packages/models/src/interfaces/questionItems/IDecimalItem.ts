import IQuestionItem from "./IQuestionItem";
import { DECIMAL } from "../../constants/itemTypes";


export interface IDecimalItem extends IQuestionItem<number> {
    type: DECIMAL;
}