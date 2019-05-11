import { QuestionItem } from "../..";
import { IItemCollection } from "../../interfaces/IItemCollection";
import { TIME } from "../..";
import { ITimeItem } from "../../interfaces/questionItems/ITimeItem";
import { observable, getObservable } from '@art-forms/observable';

@observable
export class TimeItem extends QuestionItem<string> implements ITimeItem {
    type: TIME = TIME;
    regexp: RegExp = /([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?/;

    constructor(item: Partial<Omit<ITimeItem, 'type'>> | undefined, parent?: IItemCollection<ITimeItem>) {
        super(item, parent);
    }

    updateItem(item: ITimeItem) {
        const obs = getObservable(item);
        obs && obs.mute();
        super.updateItem(item);
        this.initialValue = item.initialValue;
        obs && obs.unmute;
    }
}

export default TimeItem;