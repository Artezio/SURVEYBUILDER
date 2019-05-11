import { BOOLEAN } from "../../constants/itemTypes";
import { QuestionItem, IBooleanItem } from "../..";
import { observable, getObservable } from '@art-forms/observable';
import { IItemCollection } from "../../interfaces/IItemCollection";

@observable
export class BooleanItem extends QuestionItem<boolean> implements IBooleanItem {
    type: BOOLEAN = BOOLEAN;
    regexp: RegExp = /true|false/;

    constructor(item: Partial<Omit<IBooleanItem, 'type'>> | undefined, parent?: IItemCollection<IBooleanItem>) {
        super(item, parent);
    }

    updateItem(item: IBooleanItem) {
        const obs = getObservable(item);
        obs && obs.mute();
        super.updateItem(item);
        this.initialValue = item.initialValue;
        obs && obs.unmute;
    }
}

export default BooleanItem;