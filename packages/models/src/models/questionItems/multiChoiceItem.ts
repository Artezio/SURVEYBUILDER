import QuestionItem from "./questionItem";
import IMultiChoiceItem from "../../interfaces/questionItems/IMultiChoiceItem";
import { MULTI_CHOICE } from "../../constants/itemTypes";
import { IMultiChoiceOption } from "../..";
import IItemCollection from "../../interfaces/IItemCollection";
import { observable, observableProperty, getObservable } from '@art-forms/observable';

@observable
export class MultiChoiceItem extends QuestionItem<any> implements IMultiChoiceItem {
    type: MULTI_CHOICE = MULTI_CHOICE;
    @observableProperty
    options: IMultiChoiceOption[];

    constructor(item: Partial<Omit<IMultiChoiceItem, 'type'>> | undefined, parent?: IItemCollection<IMultiChoiceItem>) {
        super(item, parent);
        this.options = item && item.options || [];
    }

    addOption(option: IMultiChoiceOption) {
        if (this.options.every(anOption => anOption.id !== option.id)) {
            this.options.push(option);
        }
    }

    updateOption(option: IMultiChoiceOption) {
        this.options = this.options.map(anOption => {
            if (anOption.id === option.id) {
                return option;
            }
            return anOption;
        })
    }

    removeOption(option: any) {
        this.options = this.options.filter(x => x !== option);
    }

    updateItem(item: IMultiChoiceItem) {
        const obs = getObservable(item);
        obs && obs.mute();
        super.updateItem(item);
        this.initialValue = item.initialValue;
        this.options = item.options;
        obs && obs.unmute;
    }
}

export default MultiChoiceItem;