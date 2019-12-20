import { IQuestionnaireResponse } from "../interfaces/IQuestionnaireResponse";
import uuid from 'uuid/v1';
import { observable, observableProperty } from '@artezio/observable';
import { QuestionnaireResponseItem } from "./questionnaireResponseItem";
import AnswerCollection from "./answersCollection";
import questionResponseFactory from '../factories/questionResponseFactory';
import { IQuestionnaire } from "../interfaces/IQuestionnaire";

@observable
export class QuestionnaireResponse implements IQuestionnaireResponse {
    id: string;
    @observableProperty
    items: QuestionnaireResponseItem[];
    questionnaireId: string;
    answerCollection: AnswerCollection = new AnswerCollection();
    itemIdMap: Map<string, boolean> = new Map();  //it's needed when adding new items

    constructor(questionnaire: IQuestionnaire, initialQuestionnaireResponse?: Partial<IQuestionnaireResponse>) {
        this.id = initialQuestionnaireResponse && initialQuestionnaireResponse.id || uuid();
        this.questionnaireId = questionnaire.id;
        if (questionnaire.items) {
            this.items = questionnaire.items.map(item => {
                const existingResponseItem = initialQuestionnaireResponse && initialQuestionnaireResponse.items && initialQuestionnaireResponse.items.find(itm => itm.questionId === item.id);
                return questionResponseFactory.createResponse(item, this.answerCollection, existingResponseItem);
            })
        } else {
            this.items = [];
        }
        this.items.forEach(item => this.itemIdMap.set(item.id, true));
        this.items.forEach(item => item.initiateEnableWhen());
    }

    addQuestionnaireResponseItem(item: QuestionnaireResponseItem) {
        if (this.itemIdMap.has(item.id)) return;
        item.answerCollection = this.answerCollection;
        this.items.push(item);
        this.itemIdMap.set(item.id, true);
    }

    updateQuestionnaireResponse(questionnaireResponse: IQuestionnaireResponse) {
        this.id = questionnaireResponse.id;
        this.questionnaireId = questionnaireResponse.questionnaireId;
    }
}

export default QuestionnaireResponse;