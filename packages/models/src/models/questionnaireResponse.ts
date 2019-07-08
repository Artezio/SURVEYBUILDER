import { IQuestionnaireResponse } from "../interfaces/IQuestionnaireResponse";
import uuid from 'uuid/v1';
import { observable, observableProperty } from '@art-forms/observable';
import { QuestionnaireResponseItem } from "./questionnaireResponseItem";
import AnswerCollection from "./answersCollection";

@observable
export class QuestionnaireResponse implements IQuestionnaireResponse {
    id!: string;
    @observableProperty
    items!: QuestionnaireResponseItem[];
    questionnaireId!: string;
    answerCollection: AnswerCollection = new AnswerCollection();
    itemIdMap: Map<string, boolean> = new Map();

    constructor(questionnaireResponse?: Partial<IQuestionnaireResponse>) {
        Object.assign(this, { id: uuid(), items: [], questionnaireId: uuid() }, questionnaireResponse);
        this.items.forEach(item => this.itemIdMap.set(item.id, true));
    }

    addQuestionnaireResponseItem(item: QuestionnaireResponseItem) {
        if (this.itemIdMap.has(item.id)) return;
        item.answerCollection = this.answerCollection;
        this.items.push(item);
        this.itemIdMap.set(item.id, true);
    }

    updateQuestionnaireResponse(questionnaireResponse: IQuestionnaireResponse) {
        Object.assign(this, questionnaireResponse);
    }
}

export default QuestionnaireResponse;