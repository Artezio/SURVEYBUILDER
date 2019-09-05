import { DECIMAL } from "../../constants/itemTypes";
import { QuestionItem, IDecimalItem } from "../..";
import { observable } from '@art-forms/observable';

@observable
export class DecimalItem extends QuestionItem<number> implements IDecimalItem {
    type: DECIMAL = DECIMAL;
}

export default DecimalItem;