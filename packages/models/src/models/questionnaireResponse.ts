import { IQuestionnaireResponse } from "../interfaces/IQuestionnaireResponse";
import uuid from 'uuid/v1';
import { observable, observableProperty } from '@art-forms/observable';
import { QuestionnaireResponseItem } from "./questionnaireResponseItem";

@observable
export class QuestionnaireResponse implements IQuestionnaireResponse {
    id!: string;
    @observableProperty
    items!: QuestionnaireResponseItem[];
    questionnaireId!: string;

    constructor(questionnaireResponse?: Partial<IQuestionnaireResponse>) {
        Object.assign(this, { id: uuid(), items: [], questionnaireId: uuid() }, questionnaireResponse);
    }

    addQuestionnaireResponseItem(item: QuestionnaireResponseItem) {
        if (this.items.every(itm => itm.id !== item.id)) {
            this.items.push(item);
        }
    }

    updateQuestionnaireResponse(questionnaireResponse: IQuestionnaireResponse) {
        Object.assign(this, questionnaireResponse);
    }
}