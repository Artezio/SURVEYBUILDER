import { DECIMAL } from "../../constants/itemTypes";
import { observable, QuestionItem, IDecimalItem } from "../..";
import { ICollection } from "../../interfaces/ICollection";

@observable
export class DecimalItem extends QuestionItem<number> implements IDecimalItem {
    type: DECIMAL = DECIMAL;

    constructor(item: Partial<Omit<IDecimalItem, 'type'>> | undefined, parent?: ICollection<IDecimalItem>) {
        super(item, parent);
    }
}

export default DecimalItem;