import QuestionItem from "./questionItem";
import IMultiChoiceItem from "../../interfaces/questionItems/IMultiChoiceItem";
import { MULTI_CHOICE } from "../../constants/itemTypes";
import IItemCollection from "../../interfaces/IItemCollection";
import { observable, observableProperty } from '@art-forms/observable';
import { AnswerOption, AnswerOptionFactory } from "../..";
import IAnswerOptionCollection from "../../interfaces/IAnswerOptionCollection";

@observable
export class MultiChoiceItem extends QuestionItem<any> implements IMultiChoiceItem, IAnswerOptionCollection {
    type: MULTI_CHOICE = MULTI_CHOICE;
    @observableProperty
    options!: AnswerOption[];
    optionIdMap: Map<string, boolean> = new Map();
    answerOptionFactory: AnswerOptionFactory = new AnswerOptionFactory(this);

    constructor(item: Partial<Omit<IMultiChoiceItem, 'type'>> | undefined, parent?: IItemCollection<IMultiChoiceItem>) {
        super(item, parent);
        this.completeOptions(item);
        this.options.forEach(option => this.optionIdMap.set(option.id, true));
    }

    clearInitialAnswers() {
        this.options.forEach(option => {
            option.defaultSelected = false;
        })
    }

    selectDefaultOption(answerOption: AnswerOption) {
        const option = this.options.find(option => option.id === answerOption.id);
        if (option) {
            option.defaultSelected = true;
        }
    }

    unselectDefaultOption(answerOption: AnswerOption) {
        const option = this.options.find(option => option.id === answerOption.id);
        if (option) {
            option.defaultSelected = false;
        }
    }

    completeOptions(item?: Partial<Omit<IMultiChoiceItem, 'type'>>) {
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

export default MultiChoiceItem;