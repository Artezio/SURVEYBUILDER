import { observable, observableProperty, getObservable } from '@art-forms/observable';
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
    replyStrategy!: ReplyStrategy;
    @observableProperty
    items!: QuestionnaireResponseItem[];
    @observableProperty
    answers!: Answer<any>[];
    answerFactory: AnswerFactory = new AnswerFactory(this);
    validationRules: IValidator[];
    @observableProperty
    errorMessages: string[] = [];
    isValid!: boolean;

    constructor(responseItem: Partial<IQuestionnaireResponseItem> | undefined, replyStrategy: ReplyStrategy, validationRules: IValidator[]) {
        Object.assign(this, { id: uuid(), items: [], answers: [] }, responseItem);
        this.validationRules = validationRules;
        this.setReplyStrategy(replyStrategy);
        this.validate();
        Object.defineProperty((this as any).__proto__, 'isValid', {
            get() {
                return this.errorMessages.length === 0;
            }
        })
    }

    setReplyStrategy(replyStrategy: ReplyStrategy) {
        this.replyStrategy = replyStrategy;
    }

    validate() { // to do
        const newErrorMessages: string[] = [];
        this.validationRules.forEach(validator => {
            const message = validator(this.answers[0]);
            message && newErrorMessages.push(message);
        })
        this.errorMessages = newErrorMessages;
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