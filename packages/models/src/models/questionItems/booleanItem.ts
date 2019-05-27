import { BOOLEAN } from "../../constants/itemTypes";
import { QuestionItem, IBooleanItem } from "../..";
import { observable } from '@art-forms/observable';

@observable
export class BooleanItem extends QuestionItem<boolean> implements IBooleanItem {
    type: BOOLEAN = BOOLEAN;
}

export default BooleanItem;