import { observable, observableProperty } from '@art-forms/observable';
import { IQuestionnaireResponseItem } from "../interfaces/IQuestionnaireResponseItem";
import uuid from 'uuid/v1';
import Answer from "./answer";
import ReplyStrategy from '../interfaces/IReplyStrategy';
import AnswerFactory from '../factories/answerFactory';
import IValidator from '../interfaces/IValidator';


@observable
export class QuestionnaireResponseItem implements IQuestionnaireResponseItem {
    id!: string;
    text?: string;
    replyStrategy: ReplyStrategy;
    @observableProperty
    items!: QuestionnaireResponseItem[];
    @observableProperty
    answers!: Answer<any>[];
    answerFactory: AnswerFactory;
    validator: IValidator;

    constructor(item: Partial<IQuestionnaireResponseItem> | undefined, replyStrategy: ReplyStrategy, validator: IValidator) {
        Object.assign(this, { id: uuid(), items: [], answers: [] }, item);
        this.validator = validator;
        this.replyStrategy = replyStrategy;
        this.answerFactory = new AnswerFactory(this);
    }

    setReplyStrategy(replyStrategy: ReplyStrategy) {
        this.replyStrategy = replyStrategy;
    }

    reply(value: any) {
        this.replyStrategy(value, this.validator, this, this.answerFactory);
    }

    cancelAnswer(answer: Answer<any>) {
        this.removeAnswer(answer);
    }

    addQuestionnaireResponseItem(item: QuestionnaireResponseItem) {
        if (this.items.every(itm => itm.id !== item.id) && (!this.answers || this.answers.length === 0)) {
            this.items.push(item);
        }
    }

    updateQuestionnaireResponseItem(item: IQuestionnaireResponseItem) {
        Object.assign(this, item);
    }

    setSingleAnswer(answer: Answer<any>) {
        this.answers = [answer];
    }

    addAnswer(answer: Answer<any>, place?: number) {
        if (this.answers.every(ans => ans.id !== answer.id) && (!this.items || this.items.length === 0)) {
            if (typeof place === 'number') {
                this.answers.splice(place, 0, answer);
                return;
            }
            this.answers.push(answer);
        }
    }

    removeAnswer(answer: Answer<any>) {
        this.answers = this.answers.filter(ans => ans.id !== answer.id);
    }
}