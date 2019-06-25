import { observable, observableProperty, getObservable } from '@art-forms/observable';
import { IQuestionnaireResponseItem } from "../interfaces/IQuestionnaireResponseItem";
import uuid from 'uuid/v1';
import Answer from "./answer";
import ReplyStrategy from '../interfaces/IReplyStrategy';
import AnswerFactory from '../factories/answerFactory';
import IValidator from '../interfaces/IValidator';
import { Item } from '..';
import AnswerCollection from './answersCollection';
import JL from 'json-logic-js';


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
    errorMessages: string[] = [];
    isValid!: boolean;
    questionItem: Item;
    isEnable!: boolean;
    answerCollection: AnswerCollection;
    enableWhenQuestionIds: any;

    constructor(responseItem: Partial<IQuestionnaireResponseItem> | undefined, questionItem: Item, replyStrategy: ReplyStrategy, validationRules: IValidator[], answerCollection: AnswerCollection) {
        Object.assign(this, { id: uuid(), items: [], answers: [] }, responseItem);
        this.validationRules = validationRules;
        this.setReplyStrategy(replyStrategy);
        this.questionItem = questionItem;
        this.validate();
        this.answerCollection = answerCollection;
        if (questionItem.enableWhen.length) {
            const obs = getObservable(this.answerCollection);
            obs && obs.subscribe(this.evaluateEnableWhen.bind(this));
            this.enableWhenQuestionIds = questionItem.enableWhen.reduce<any>((map, enableWhen) => {
                if (!map[enableWhen.questionId]) {
                    map[enableWhen.questionId] = true;
                }
                return map;
            }, {})
            this.evaluateEnableWhen(this.answerCollection);
        } else {
            this.isEnable = true;
        }
        Object.defineProperty(this, 'isValid', {
            get() {
                return this.errorMessages.length === 0;
            }
        })
    }

    evaluateEnableWhen(answerCollection: AnswerCollection) {
        const answers = answerCollection.answers;
        const interestingAnswer = answers.filter(answer => this.enableWhenQuestionIds[answer.parentId]);
        const enableWhenConfigs = this.questionItem.enableWhen.reduce((arr: any[], enableWhen) => {
            return arr.concat(interestingAnswer
                .filter(answer => answer.parentId === enableWhen.questionId)
                .some(answer => {
                    return (JL.apply({ [enableWhen.operator]: [answer.value, enableWhen.answer] }));
                }));
        }, []);
        this.isEnable = JL.apply({ [this.questionItem.enableBehavior]: enableWhenConfigs });
    }

    setReplyStrategy(replyStrategy: ReplyStrategy) {
        this.replyStrategy = replyStrategy;
    }

    validate() { // to do
        const newErrorMessages: string[] = [];
        this.validationRules.forEach(validator => {
            const value = this.answers[0] && this.answers[0].value;
            const message = validator(value);
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
        this.answerCollection.updateResponseAnswers(this.id, this.answers.map(answer => answer.value));
    }

    cancelAnswer(answer: Answer<any>) {
        this.removeAnswer(answer);
    }

    addQuestionnaireResponseItem(item: QuestionnaireResponseItem) {
        if (this.items.every(itm => itm.id !== item.id) && this.answers.length === 0) {
            item.answerCollection = this.answerCollection;
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

// type EnableWhenType = { id?: string, operator?: string, questionId: string, answer?: string | number }
// const enableWhen: EnableWhenType[] = [
//     { questionId: '1', answer: 1 },
//     { questionId: '1', answer: 2 },
//     { questionId: '3', answer: 2 }
// ];

// type AnswerType = { parentId: string, value: string | number }
// const answers: AnswerType[] = [
//     { parentId: '2', value: 2 },
//     { parentId: '1', value: 1 },
//     { parentId: '1', value: 1 },
//     { parentId: '1', value: 1 },
//     { parentId: '1', value: 1 },
//     { parentId: '1', value: 1 },
//     { parentId: '1', value: 1 },
//     { parentId: '1', value: 1 },
//     { parentId: '1', value: 1 },
//     { parentId: '3', value: 2 },
//     { parentId: '3', value: 1 }
// ];



// const questionIds = enableWhen.reduce<any>((map: any, element: EnableWhenType) => {
//     if (!map[element.questionId]) {
//         map[element.questionId] = true;
//     }
// }, {});


// const evaluateEnableWhen = (answers: AnswerType[]) => {
//     var filtered = answers.filter(x => questionIds[x.parentId]);

// }


// const evaluateRule = (operator: string, rule: EnableWhenType, answer: AnswerType) => {
//     JL.apply({''})
// }