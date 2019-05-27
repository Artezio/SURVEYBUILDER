import { QuestionItem, AnswerOption } from "../..";
import { IItemCollection } from "../../interfaces/IItemCollection";
import { IOpenChoiceItem } from "../../interfaces/questionItems/IOpenChoiceItem";
import { OPEN_CHOICE } from "../../constants/itemTypes";
import { observable, observableProperty, getObservable } from '@art-forms/observable';
import AnswerOptionFactory from "../../factories/answerOptionFactory";

@observable
export class OpenChoiceItem extends QuestionItem<any> implements IOpenChoiceItem {
    type: OPEN_CHOICE = OPEN_CHOICE;
    answerOptionFactory: AnswerOptionFactory;
    @observableProperty
    options: AnswerOption[];

    constructor(item: Partial<Omit<IOpenChoiceItem, 'type'>> | undefined, parent?: IItemCollection<IOpenChoiceItem>) {
        super(item, parent);
        this.answerOptionFactory = new AnswerOptionFactory(this as any);
        this.options = [this.answerOptionFactory.createAnswerOption()];
        if (item && item.options && item.options.length > 0) {
            this.options.splice(0, 0, ...item.options as any);
        }
    }

    addOption(option: AnswerOption) {
        if (this.options.every(anOption => anOption.id !== option.id)) {
            this.options.splice(this.options.length - 1, 0, option);
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
        if (this.options.indexOf(option) === this.options.length - 1) return;
        this.options = this.options.filter(x => x !== option);
        if (this.initialAnswers[0] && this.initialAnswers[0].value === option.id) {
            this.clearInitialAnswers();
        }
    }

    updateItem(item: OpenChoiceItem) {
        const obs = getObservable(item);
        obs && obs.mute();
        this.options = item.options;
        super.updateItem(item);
    }
}

export default OpenChoiceItem;