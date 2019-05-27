import IQuestionItem from "../../interfaces/questionItems/IQuestionItem";
import { Item, InitialAnswer } from "../..";
import { QUESTION_TYPE } from "../../constants/itemTypes";
import { IItemCollection } from "../../interfaces/IItemCollection";
import { getObservable, observableProperty } from "@art-forms/observable";
import IInitialAnswer from "../../interfaces/IInitialAnswer";


export abstract class QuestionItem<T> extends Item implements IQuestionItem<T> {
    @observableProperty
    initialAnswers: InitialAnswer<T>[];
    type!: QUESTION_TYPE;

    constructor(item: Partial<Omit<IQuestionItem<T>, 'type'>> | undefined, parent?: IItemCollection<IQuestionItem<T>>) {
        super(item, parent);
        this.initialAnswers = item && item.initialAnswers as any || [];
    }

    setSingleInitialAnswer(initialAnswer: InitialAnswer<T>) {
        this.initialAnswers = [initialAnswer];
    }

    addInitialAnswer(initialAnswer: InitialAnswer<T>) {
        if (this.initialAnswers.every(initial => initial.id !== initialAnswer.id)) {
            this.initialAnswers.push(initialAnswer);
        }
    }

    clearInitialAnswers() {
        this.initialAnswers = [];
    }

    removeInitialAnswer(initialAnswer: InitialAnswer<T>) {
        this.initialAnswers = this.initialAnswers.filter(initial => initial.id !== initialAnswer.id);
    }

    updateItem(item: IQuestionItem<T>) {
        const obs = getObservable(item);
        obs && obs.mute();
        super.updateItem(item);
        this.initialAnswers = item.initialAnswers as any || [];
        obs && obs.unmute;
    }
}

export default QuestionItem;