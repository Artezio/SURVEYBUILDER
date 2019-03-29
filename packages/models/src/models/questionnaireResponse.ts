import { IQuestionnaireResponse } from "../interfaces/IQuestionnaireResponse";
import uuid from 'uuid/v1';
import { observable } from "..";
import { IQuestionnaireResponseItem } from "../interfaces/IQuestionnaireResponseItem";
import { QuestionnaireResponseItem } from "./questionnaireResponseItem";

@observable
export class QuestionnaireResponse implements IQuestionnaireResponse {
    id: string;
    items: IQuestionnaireResponseItem[];
    questionnaire: string;

    constructor(questionnaireResponse: Omit<IQuestionnaireResponse, 'id'>) {
        this.id = uuid();
        this.items = questionnaireResponse.items || [];
        this.questionnaire = questionnaireResponse.questionnaire;
    }

    addQuestionnaireResponseItem(item?: Partial<IQuestionnaireResponseItem>) {
        this.items = [...this.items, new QuestionnaireResponseItem(item)];
    }

    updateQuestionnaireResponse(questionnaireResponse: IQuestionnaireResponse) {
        this.id = questionnaireResponse.id;
        this.items = questionnaireResponse.items;
    }
}