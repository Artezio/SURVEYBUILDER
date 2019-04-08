import { BOOLEAN } from "../../constants/itemTypes";
import { observable, QuestionItem, IBooleanItem } from "../..";
import { ICollection } from "../../interfaces/ICollection";

@observable
export class BooleanItem extends QuestionItem<boolean> implements IBooleanItem {
    type: BOOLEAN = BOOLEAN;

    constructor(item: Partial<Omit<IBooleanItem, 'type'>> | undefined, parent?: ICollection<IBooleanItem>) {
        super(item, parent);
    }
}

export default BooleanItem;