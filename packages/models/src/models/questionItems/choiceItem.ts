import { QuestionItem, AnswerOption } from "../..";
import { observable, observableProperty, getObservable } from '@art-forms/observable';
import { IItemCollection } from "../../interfaces/IItemCollection";
import { IChoiceItem } from "../../interfaces/questionItems/IChoiceItem";
import { CHOICE } from "../..";

@observable
export class ChoiceItem extends QuestionItem<any> implements IChoiceItem {
    type: CHOICE = CHOICE;
    @observableProperty
    options!: AnswerOption[];

    constructor(item: Partial<Omit<IChoiceItem, 'type'>> | undefined, parent?: IItemCollection<IChoiceItem>) {
        super(item, parent);
        Object.assign(this, { options: [] }, item);
    }

    addOption(option: AnswerOption) {
        if (this.options.every(anOption => anOption.id !== option.id)) {
            this.options.push(option);
        }
    }

    updateOption(option: AnswerOption) { // to be removed
        this.options = this.options.map(anOption => {
            if (anOption.id === option.id) {
                return option;
            }
            return anOption;
        })
    }

    removeAnswerOption(option: any) {
        this.options = this.options.filter(x => x !== option);
        if (this.initialAnswers[0] && this.initialAnswers[0].value === option.id) {
            this.clearInitialAnswers();
        }
    }

    updateItem(item: ChoiceItem) {
        const obs = getObservable(item);
        obs && obs.mute();
        this.options = item.options;
        obs && obs.unmute();
        super.updateItem(item);
    }
}

export default ChoiceItem;