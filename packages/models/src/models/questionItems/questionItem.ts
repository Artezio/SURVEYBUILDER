import IQuestionItem from "../../interfaces/questionItems/IQuestionItem";
import { Item, InitialAnswer } from "../..";
import { QUESTION_TYPE } from "../../constants/itemTypes";
import { IItemCollection } from "../../interfaces/IItemCollection";
import { observableProperty } from "@art-forms/observable";


export abstract class QuestionItem<T> extends Item implements IQuestionItem<T> {
    @observableProperty
    initialAnswers: InitialAnswer<T>[];
    type!: QUESTION_TYPE;
    initialAnswerIdMap: Map<string, boolean> = new Map();

    constructor(item: Partial<Omit<IQuestionItem<T>, 'type'>> | undefined, parent?: IItemCollection<IQuestionItem<T>>) {
        super(item, parent);
        this.initialAnswers = item && item.initialAnswers as any || [];
        item && item.initialAnswers && item.initialAnswers.forEach(initialAnswer => {
            this.initialAnswerIdMap.set(initialAnswer.id, true);
        })
    }

    setSingleInitialAnswer(initialAnswer: InitialAnswer<T>) {
        this.initialAnswers = [initialAnswer];
        this.initialAnswerIdMap.clear();
        this.initialAnswerIdMap.set(initialAnswer.id, true);
    }

    addInitialAnswer(initialAnswer: InitialAnswer<T>) {
        if (this.initialAnswerIdMap.has(initialAnswer.id)) return;
        this.initialAnswers.push(initialAnswer);
        this.initialAnswerIdMap.set(initialAnswer.id, true);
    }

    clearInitialAnswers() {
        this.initialAnswers = [];
        this.initialAnswerIdMap.clear();
    }

    removeInitialAnswer(initialAnswer: InitialAnswer<T>) {
        this.initialAnswers.splice(initialAnswer.position, 1);
        this.initialAnswerIdMap.delete(initialAnswer.id);
    }
}

export default QuestionItem;