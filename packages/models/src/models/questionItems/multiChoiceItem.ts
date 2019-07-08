import QuestionItem from "./questionItem";
import IMultiChoiceItem from "../../interfaces/questionItems/IMultiChoiceItem";
import { MULTI_CHOICE } from "../../constants/itemTypes";
import IItemCollection from "../../interfaces/IItemCollection";
import { observable, observableProperty } from '@art-forms/observable';
import { AnswerOption } from "../..";

@observable
export class MultiChoiceItem extends QuestionItem<any> implements IMultiChoiceItem {
    type: MULTI_CHOICE = MULTI_CHOICE;
    @observableProperty
    options!: AnswerOption[];
    optionIdMap: Map<string, boolean> = new Map();

    constructor(item: Partial<Omit<IMultiChoiceItem, 'type'>> | undefined, parent?: IItemCollection<IMultiChoiceItem>) {
        super(item, parent);
        Object.assign(this, { options: [] }, item);
        this.options.forEach(option => this.optionIdMap.set(option.id, true));
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

export default MultiChoiceItem;