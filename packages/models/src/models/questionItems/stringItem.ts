import { IStringItem } from "../../interfaces/questionItems/IStringItem";
import { STRING } from "../../constants/itemTypes";
import { QuestionItem } from "./questionItem";
import { IItemCollection } from "../../interfaces/IItemCollection";
import { observable, getObservable } from '@art-forms/observable';


@observable
export class StringItem extends QuestionItem<string> implements IStringItem {
    type: STRING = STRING;
    regexp: RegExp = /[ \r\n\t\S]+/;

    constructor(item: Partial<Omit<IStringItem, 'type'>> | undefined, parent?: IItemCollection<IStringItem>) {
        super(item, parent);
    }

    updateItem(item: IStringItem) {
        const obs = getObservable(item);
        obs && obs.mute();
        super.updateItem(item);
        this.initialValue = item.initialValue;
        obs && obs.unmute;
    }
}

export default StringItem;