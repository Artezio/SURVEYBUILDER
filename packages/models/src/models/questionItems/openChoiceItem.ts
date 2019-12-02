import { IItemCollection } from "../../interfaces/IItemCollection";
import { IOpenChoiceItem } from "../../interfaces/questionItems/IOpenChoiceItem";
import { OPEN_CHOICE } from "../../constants/itemTypes";
import { observable, observableProperty } from '@surveybuilder/observable';
import AnswerOptionFactory from "../../factories/answerOptionFactory";
import IAnswerOptionCollection from "../../interfaces/IAnswerOptionCollection";
import QuestionItem from "./questionItem";
import AnswerOption from "../answerOption";

@observable
export class OpenChoiceItem extends QuestionItem<any> implements IOpenChoiceItem, IAnswerOptionCollection {
    type: OPEN_CHOICE = OPEN_CHOICE;
    @observableProperty
    options!: AnswerOption[];
    optionIdMap: Map<string, boolean> = new Map();
    answerOptionFactory: AnswerOptionFactory = new AnswerOptionFactory(this);
    defaultOption?: AnswerOption;

    constructor(item: Partial<Omit<IOpenChoiceItem, 'type'>> | undefined, parent?: IItemCollection) {
        super(item, parent);
        this.completeOptions(item);
        this.options.forEach(option => this.optionIdMap.set(option.id, true));
    }

    clearInitialAnswers() {
        if (this.defaultOption) {
            this.defaultOption.defaultSelected = false;
        }
    }

    selectDefaultOption(answerOption: AnswerOption) {
        const option = this.options.find(option => option.id === answerOption.id);
        if (!option) return;
        if (this.defaultOption) {
            this.defaultOption.defaultSelected = false;
        }
        this.defaultOption = option;
        this.defaultOption.defaultSelected = true;
    }

    unselectDefaultOption(answerOption: AnswerOption) {
        const option = this.options.find(option => option.id === answerOption.id);
        if (option) {
            option.defaultSelected = false;
            this.defaultOption = undefined;
        }
    }

    completeOptions(item?: Partial<Omit<IOpenChoiceItem, 'type'>>) {
        if (item && item.options && item.options.length !== 0) {
            this.options = item.options.map(option => this.answerOptionFactory.createAnswerOption(option));
        } else {
            this.options = [this.answerOptionFactory.createAnswerOption()];
        }
    }

    addAnswerOption(option: AnswerOption) {
        if (this.optionIdMap.has(option.id)) return;
        this.options.splice(this.options.length - 1, 0, option);
        this.optionIdMap.set(option.id, true);
    }

    removeAnswerOption(option: AnswerOption) {
        if (option.position === this.options.length - 1) return;
        this.options.splice(option.position, 1);
        this.optionIdMap.delete(option.id);
    }
}

export default OpenChoiceItem;