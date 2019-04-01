import { IQuestionnaireResponse } from "../interfaces/IQuestionnaireResponse";
import uuid from 'uuid/v1';
import { observable } from "..";
import { IQuestionnaireResponseItem } from "../interfaces/IQuestionnaireResponseItem";
import { QuestionnaireResponseItem } from "./questionnaireResponseItem";

@observable
export class QuestionnaireResponse implements IQuestionnaireResponse {
    id: string;
    items!: IQuestionnaireResponseItem[];
    questionnaireId: string;

    constructor(questionnaireResponse: Partial<IQuestionnaireResponse> | undefined = {}) {
        this.id = uuid();
        this.items = questionnaireResponse.items || [];
        this.questionnaireId = questionnaireResponse.questionnaireId || uuid();
    }

    addQuestionnaireResponseItem(item?: Partial<IQuestionnaireResponseItem>) {
        if ((item && this.items.every(itm => itm.id !== item.id)) || !item) {
            this.items = [...this.items, new QuestionnaireResponseItem(item)];
        }
    }

    updateQuestionnaireResponse(questionnaireResponse: IQuestionnaireResponse) {
        this.id = questionnaireResponse.id;
        this.items = questionnaireResponse.items || [];
        this.questionnaireId = questionnaireResponse.questionnaireId;
    }
}