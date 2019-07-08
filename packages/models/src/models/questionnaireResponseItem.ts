import { observable, observableProperty, getObservable } from '@art-forms/observable';
import { IQuestionnaireResponseItem } from "../interfaces/IQuestionnaireResponseItem";
import uuid from 'uuid/v1';
import Answer from "./answer";
import ReplyStrategy from '../interfaces/IReplyStrategy';
import AnswerFactory from '../factories/answerFactory';
import IValidator from '../interfaces/IValidator';
import { IItem } from '..';
import AnswerCollection from './answersCollection';
import JL from 'json-logic-js';


@observable
export class QuestionnaireResponseItem implements IQuestionnaireResponseItem {
    id!: string;
    questionId: string;
    questionItem: IItem;
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
    isEnable: boolean = true;
    answerCollection: AnswerCollection;
    enableWhenQuestionIds: any;
    itemIdMap: Map<string, boolean> = new Map();
    answerIdMap: Map<string, boolean> = new Map();

    constructor(responseItem: Partial<IQuestionnaireResponseItem> | undefined, questionItem: IItem, replyStrategy: ReplyStrategy, validationRules: IValidator[], answerCollection: AnswerCollection) {
        Object.assign(this, { id: uuid(), items: [], answers: [] }, responseItem);
        this.validationRules = validationRules;
        this.replyStrategy = replyStrategy;
        this.questionItem = questionItem;
        this.questionId = questionItem.id;
        this.answerCollection = answerCollection;
        this.validate();
        this.decideEnablingObservation();
        this.defineOwnProperties();
        this.items.forEach(item => this.itemIdMap.set(item.id, true));
        this.answers.forEach(answer => this.answerIdMap.set(answer.id, true));
    }

    defineOwnProperties() {
        Object.defineProperty(this, 'isValid', {
            get() {
                return this.errorMessages.length === 0;
            }
        })
    }

    decideEnablingObservation() {
        if (this.questionItem.enableWhen && this.questionItem.enableWhen.length) {
            const obs = getObservable(this.answerCollection);
            obs && obs.subscribe(this.evaluateEnableWhen.bind(this));
            this.enableWhenQuestionIds = this.questionItem.enableWhen.reduce<any>((map, enableWhen) => {
                if (enableWhen.questionId && !map[enableWhen.questionId]) {
                    map[enableWhen.questionId] = true;
                }
                return map;
            }, {})
            this.evaluateEnableWhen(this.answerCollection);
        }
    }

    evaluateEnableWhen(answerCollection: AnswerCollection) {
        if (this.questionItem.enableBehavior === undefined) return;
        const answers = answerCollection.answers;
        const interestingAnswer = answers.filter(answer => this.enableWhenQuestionIds[answer.parentId]);
        const enableWhenConfigs = !this.questionItem.enableWhen ? [] : this.questionItem.enableWhen.reduce((arr: boolean[], enableWhen) => {
            if (!enableWhen.questionId || !enableWhen.operator || !enableWhen.answer) {
                return arr.concat(true);
            }
            return arr.concat(interestingAnswer
                .filter(answer => answer.parentId === enableWhen.questionId)
                .some(answer => {
                    return (JL.apply({ [enableWhen.operator]: [answer.value, enableWhen.answer] }));
                }));
        }, []);
        this.isEnable = JL.apply({ [this.questionItem.enableBehavior]: enableWhenConfigs });
    }

    setReplyStrategy(replyStrategy: ReplyStrategy) {
        const obs = getObservable(this);
        obs && obs.mute();
        this.replyStrategy = replyStrategy;
        obs && obs.unmute();
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

    reply(value?: string) {
        const obs = getObservable(this);
        obs && obs.mute();
        this.replyStrategy(value, this, this.answerFactory);
        this.validate();
        obs && obs.unmute();
        obs && obs.emitChange();
        this.answerCollection.updateResponseAnswers(this.questionId, this.answers.map(answer => answer.value));
    }

    cancelAnswer(answer: Answer<any>) {
        this.removeAnswer(answer);
    }

    addQuestionnaireResponseItem(item: QuestionnaireResponseItem) {
        if (this.itemIdMap.has(item.id)) return;
        item.answerCollection = this.answerCollection;
        this.items.push(item);
        this.itemIdMap.set(item.id, true);
    }

    updateQuestionnaireResponseItem(item: IQuestionnaireResponseItem) {
        Object.assign(this, item);
    }

    setSingleAnswer(answer: Answer<any>) {
        this.answers.splice(0, this.answers.length, answer);
        this.answerIdMap.clear();
        this.answerIdMap.set(answer.id, true);
    }

    addAnswer(answer: Answer<any>, index?: number) {
        if (this.itemIdMap.has(answer.id)) return;
        index = index === undefined ? this.answers.length : index;
        this.answers.splice(index, 0, answer);
        this.answerIdMap.set(answer.id, true);
    }

    removeAnswer(answer: Answer<any>) {
        this.answers.splice(answer.position, 1);
        this.answerIdMap.delete(answer.id);
    }
}

export default QuestionnaireResponseItem;