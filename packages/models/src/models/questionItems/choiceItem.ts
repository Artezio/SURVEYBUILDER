import { QuestionItem, AnswerOption, AnswerOptionFactory } from "../..";
import { observable, observableProperty, getObservable } from '@art-forms/observable';
import { IItemCollection } from "../../interfaces/IItemCollection";
import { IChoiceItem } from "../../interfaces/questionItems/IChoiceItem";
import { CHOICE } from "../..";

@observable
export class ChoiceItem extends QuestionItem<any> implements IChoiceItem {
    type: CHOICE = CHOICE;
    @observableProperty
    options!: AnswerOption[];
    optionIdMap: Map<string, boolean> = new Map();
    answerOptionFactory: AnswerOptionFactory = new AnswerOptionFactory(this);

    constructor(item: Partial<Omit<IChoiceItem, 'type'>> | undefined, parent?: IItemCollection<IChoiceItem>) {
        super(item, parent);
        this.completeOptions(item);
        this.options.forEach(option => this.optionIdMap.set(option.id, true));
    }

    completeOptions(item?: Partial<Omit<IChoiceItem, 'type'>>) {
        if (item && item.options) {
            this.options = item.options.map(option => this.answerOptionFactory.createAnswerOption(option));
        } else {
            this.options = [];
        }
    }

    addAnswerOption(option: AnswerOption) {
        if (this.optionIdMap.has(option.id)) return;
        this.options.push(option);
        this.optionIdMap.set(option.id, true);
    }

    removeAnswerOption(option: AnswerOption) {
        this.options.splice(option.position, 1);
        this.optionIdMap.delete(option.id);
    }
}

export default ChoiceItem;