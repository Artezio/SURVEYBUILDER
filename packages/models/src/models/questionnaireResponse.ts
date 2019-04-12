import { IQuestionnaireResponse } from "../interfaces/IQuestionnaireResponse";
import uuid from 'uuid/v1';
import { observable } from "..";
import { IQuestionnaireResponseItem } from "../interfaces/IQuestionnaireResponseItem";
import { QuestionnaireResponseItem } from "./questionnaireResponseItem";

@observable
export class QuestionnaireResponse implements IQuestionnaireResponse {
    id!: string;
    items!: QuestionnaireResponseItem[];
    questionnaireId!: string;

    constructor(questionnaireResponse?: Partial<IQuestionnaireResponse>) {
        Object.assign(this, { id: uuid(), items: [], questionnaireId: uuid() }, questionnaireResponse);
    }

    addQuestionnaireResponseItem(item?: Partial<IQuestionnaireResponseItem>) {
        if ((item && this.items.every(itm => itm.id !== item.id)) || !item) {
            this.items = [...this.items, new QuestionnaireResponseItem(item)];
        }
    }

    updateQuestionnaireResponse(questionnaireResponse: IQuestionnaireResponse) {
        Object.assign(this, questionnaireResponse);
    }

    clearQuestionnaireResponseItems() {
        this.items = [];
    }
}