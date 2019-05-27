import QuestionItem from "./questionItem";
import IMultiChoiceItem from "../../interfaces/questionItems/IMultiChoiceItem";
import { MULTI_CHOICE } from "../../constants/itemTypes";
import IItemCollection from "../../interfaces/IItemCollection";
import { observable, observableProperty, getObservable } from '@art-forms/observable';
import { AnswerOption } from "../..";

@observable
export class MultiChoiceItem extends QuestionItem<any> implements IMultiChoiceItem {
    type: MULTI_CHOICE = MULTI_CHOICE;
    @observableProperty
    options!: AnswerOption[];

    constructor(item: Partial<Omit<IMultiChoiceItem, 'type'>> | undefined, parent?: IItemCollection<IMultiChoiceItem>) {
        super(item, parent);
        Object.assign(this, { options: [] }, item);
    }

    addOption(option: AnswerOption) {
        if (this.options.every(anOption => anOption.id !== option.id)) {
            this.options.push(option);
        }
    }

    updateOption(option: AnswerOption) {// to be removed
        this.options = this.options.map(anOption => {
            if (anOption.id === option.id) {
                return option;
            }
            return anOption;
        })
    }

    removeAnswerOption(option: any) {
        this.options = this.options.filter(x => x !== option);
        const initialAnswer = this.initialAnswers.find(initial => initial.value === option.id);
        initialAnswer && this.removeInitialAnswer(initialAnswer);
    }

    updateItem(item: MultiChoiceItem) {
        const obs = getObservable(item);
        obs && obs.mute();
        this.options = item.options;
        super.updateItem(item);
    }
}

export default MultiChoiceItem;