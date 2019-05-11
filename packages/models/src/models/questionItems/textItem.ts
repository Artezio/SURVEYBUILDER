import { ITextItem } from "../..";
import { IItemCollection } from "../../interfaces/IItemCollection";
import { TEXT } from "../../constants/itemTypes";
import { QuestionItem } from "./questionItem";
import { observable, getObservable } from '@art-forms/observable';

@observable
export class TextItem extends QuestionItem<string> implements ITextItem {
    type: TEXT = TEXT;
    regexp: RegExp = /[ \r\n\t\S]+/;

    constructor(item: Partial<Omit<ITextItem, 'type'>> | undefined, parent?: IItemCollection<ITextItem>) {
        super(item, parent);
    }

    updateItem(item: ITextItem) {
        const obs = getObservable(item);
        obs && obs.mute();
        super.updateItem(item);
        this.initialValue = item.initialValue;
        obs && obs.unmute;
    }
}

export default TextItem;