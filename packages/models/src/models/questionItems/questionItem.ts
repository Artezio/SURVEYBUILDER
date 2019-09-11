import IQuestionItem from "../../interfaces/questionItems/IQuestionItem";
import { QUESTION_TYPE } from "../../constants/itemTypes";
import { IItemCollection } from "../../interfaces/IItemCollection";
import { observableProperty } from "@art-forms/observable";
import Item from "../item";
import InitialAnswerFactory from "../../factories/initialAnswerFactory";
import { InitialAnswer } from "../initialAnswer";


export abstract class QuestionItem<T> extends Item implements IQuestionItem<T> {
    @observableProperty
    initialAnswers!: InitialAnswer<T>[];
    type!: QUESTION_TYPE;
    initialAnswerIdMap: Map<string, boolean> = new Map();
    initialAnswersFactory: InitialAnswerFactory = new InitialAnswerFactory(this);

    constructor(item: Partial<Omit<IQuestionItem<T>, 'type'>> | undefined, parent?: IItemCollection<IQuestionItem<T>>) {
        super(item, parent);
        this.completeInitialAnswers(item);
        this.initialAnswers.forEach(initialAnswer => this.initialAnswerIdMap.set(initialAnswer.id, true));
    }

    completeInitialAnswers(item?: Partial<Omit<IQuestionItem<T>, 'type'>>) {
        if (item && item.initialAnswers) {
            this.initialAnswers = item.initialAnswers.map(initialAnswer => this.initialAnswersFactory.createInitialAnswer(initialAnswer));
        } else {
            this.initialAnswers = [];
        }
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