import { DECIMAL } from "../../constants/itemTypes";
import { QuestionItem, IDecimalItem } from "../..";
import { observable, getObservable } from '@art-forms/observable';
import { IItemCollection } from "../../interfaces/IItemCollection";

@observable
export class DecimalItem extends QuestionItem<number> implements IDecimalItem {
    type: DECIMAL = DECIMAL;
    regexp: RegExp = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?[0-9]+)?/;

    constructor(item: Partial<Omit<IDecimalItem, 'type'>> | undefined, parent?: IItemCollection<IDecimalItem>) {
        super(item, parent);
    }

    updateItem(item: IDecimalItem) {
        const obs = getObservable(item);
        obs && obs.mute();
        super.updateItem(item);
        this.initialValue = item.initialValue;
        obs && obs.unmute;
    }
}

export default DecimalItem;