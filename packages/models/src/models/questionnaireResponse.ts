import { IQuestionnaireResponse } from "../interfaces/IQuestionnaireResponse";
import uuid from 'uuid/v1';
import { observable } from "..";
import { IQuestionnaireResponseItem } from "../interfaces/IQuestionnaireResponseItem";
import { QuestionnaireResponseItem } from "./questionnaireResponseItem";

@observable
export class QuestionnaireResponse implements IQuestionnaireResponse {
    id: string;
    items: IQuestionnaireResponseItem[];

    constructor(questionnaireResponse: Partial<IQuestionnaireResponse> | undefined = {}) {
        this.id = questionnaireResponse.id || uuid();
        this.items = questionnaireResponse.items || [];
    }

    addQuestionnaireResponseItem(item: IQuestionnaireResponseItem) {
        this.items = [...this.items, new QuestionnaireResponseItem(item)];
    }

    updateQuestionnaireResponse(questionnaireResponse: IQuestionnaireResponse) {
        this.id = questionnaireResponse.id;
        this.items = questionnaireResponse.items;
    }
}