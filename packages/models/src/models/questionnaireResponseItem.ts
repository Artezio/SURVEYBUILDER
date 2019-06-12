import { observable, observableProperty, getObservable } from '@art-forms/observable';
import { IQuestionnaireResponseItem } from "../interfaces/IQuestionnaireResponseItem";
import uuid from 'uuid/v1';
import Answer from "./answer";
import ReplyStrategy from '../interfaces/IReplyStrategy';
import AnswerFactory from '../factories/answerFactory';
import IValidator from '../interfaces/IValidator';
import Item from './item';


@observable
export class QuestionnaireResponseItem implements IQuestionnaireResponseItem {
    id!: string;
    text?: string;
    replyStrategy!: ReplyStrategy;
    @observableProperty
    items!: QuestionnaireResponseItem[];
    @observableProperty
    answers!: Answer<any>[];
    answerFactory: AnswerFactory;
    validator: IValidator;
    questionItem: Item;
    isValidByRequired!: boolean;
    isValidByRegExp!: boolean;

    constructor(responseItem: Partial<IQuestionnaireResponseItem> | undefined, questionItem: Item, replyStrategy: ReplyStrategy, validator: IValidator) {
        Object.assign(this, { id: uuid(), items: [], answers: [] }, responseItem);
        this.validator = validator;
        this.setReplyStrategy(replyStrategy);
        this.questionItem = questionItem;
        this.answerFactory = new AnswerFactory(this);
        this.validate();
    }

    setReplyStrategy(replyStrategy: ReplyStrategy) {
        this.replyStrategy = replyStrategy;
    }

    validate() {
        this.isValidByRegExp = this.answers.every(answer => this.validator(answer.value));
        this.isValidByRequired = !this.questionItem.required || (!!this.answers.length && this.answers.every(answer => answer.value !== '' && answer.value !== undefined));
    }

    reply(value: any) {
        const obs = getObservable(this);
        obs && obs.mute();
        this.replyStrategy(value, this, this.answerFactory);
        this.validate();
        obs && obs.unmute();
        obs && obs.emitChange();
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

export default QuestionnaireResponseItem;