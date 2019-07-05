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
    optionIdMap: Map<string, boolean> = new Map();

    constructor(item: Partial<Omit<IChoiceItem, 'type'>> | undefined, parent?: IItemCollection<IChoiceItem>) {
        super(item, parent);
        Object.assign(this, { options: [] }, item);
        this.options.forEach(option => {
            this.optionIdMap.set(option.id, true);
        })
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