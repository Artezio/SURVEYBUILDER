import { QuestionItem, AnswerOption } from "../..";
import { IItemCollection } from "../../interfaces/IItemCollection";
import { IOpenChoiceItem } from "../../interfaces/questionItems/IOpenChoiceItem";
import { OPEN_CHOICE } from "../../constants/itemTypes";
import { observable, observableProperty } from '@art-forms/observable';
import AnswerOptionFactory from "../../factories/answerOptionFactory";

@observable
export class OpenChoiceItem extends QuestionItem<any> implements IOpenChoiceItem {
    type: OPEN_CHOICE = OPEN_CHOICE;
    @observableProperty
    options: AnswerOption[];
    optionIdMap: Map<string, boolean> = new Map();

    constructor(item: Partial<Omit<IOpenChoiceItem, 'type'>> | undefined, parent?: IItemCollection<IOpenChoiceItem>) {
        super(item, parent);
        this.options = [new AnswerOptionFactory(this).createAnswerOption()];
        if (item && item.options && item.options.length > 0) {
            this.options.splice(0, 0, ...item.options as any);
        }
        this.options.forEach(option => this.optionIdMap.set(option.id, true));
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