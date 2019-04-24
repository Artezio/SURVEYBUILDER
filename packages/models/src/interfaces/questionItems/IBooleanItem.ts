import IQuestionItem from "./IQuestionItem";
import { BOOLEAN } from "../..";


export interface IBooleanItem extends IQuestionItem<boolean> {
    type: BOOLEAN;
}

export default IBooleanItem;