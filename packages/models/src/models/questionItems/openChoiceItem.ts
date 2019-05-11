import { QuestionItem } from "../..";
import { IItemCollection } from "../../interfaces/IItemCollection";
import { IOpenChoiceItem } from "../../interfaces/questionItems/IOpenChoiceItem";
import { OPEN_CHOICE } from "../../constants/itemTypes";
import IChoiceOption from "../../interfaces/IChoiceOption";
import ChoiceOptionFactory from '../../factories/choiceOptionFactory';
import { observable, observableProperty, getObservable } from '@art-forms/observable';

@observable
export class OpenChoiceItem extends QuestionItem<any> implements IOpenChoiceItem {
    type: OPEN_CHOICE = OPEN_CHOICE;
    @observableProperty
    options: IChoiceOption[] = [ChoiceOptionFactory.createChoiceOption()];

    constructor(item: Partial<Omit<IOpenChoiceItem, 'type'>> | undefined, parent?: IItemCollection<IOpenChoiceItem>) {
        super(item, parent);
        if (item && item.options && item.options.length > 0) {
            this.options.splice(0, 0, ...item.options);
        }
    }

    addOption(option: IChoiceOption) {
        if (this.options.every(anOption => anOption.id !== option.id)) {
            this.options.splice(this.options.length - 1, 0, option);
        }
    }

    updateOption(option: IChoiceOption) {
        this.options = this.options.map(anOption => {
            if (anOption.id === option.id) {
                return option;
            }
            return anOption;
        })
    }

    removeOption(option: any) {
        if (this.options.indexOf(option) === this.options.length - 1) return;
        this.options = this.options.filter(x => x !== option);
    }

    updateItem(item: IOpenChoiceItem) {
        const obs = getObservable(item);
        obs && obs.mute();
        super.updateItem(item);
        this.initialValue = item.initialValue;
        this.options = item.options;
        obs && obs.unmute;
    }
}

export default OpenChoiceItem;