import IQuestionItem from "./IQuestionItem";
import { BOOLEAN } from "../../constants/itemTypes";


export interface IBooleanItem extends IQuestionItem<boolean> {
    type: BOOLEAN;
}

export default IBooleanItem;