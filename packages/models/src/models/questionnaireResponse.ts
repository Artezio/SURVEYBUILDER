import { IQuestionnaireResponse } from "../interfaces/IQuestionnaireResponse";
import uuid from 'uuid/v1';
import { observable } from "..";
import { QuestionnaireResponseItem } from "./questionnaireResponseItem";

@observable
export class QuestionnaireResponse implements IQuestionnaireResponse {
    id!: string;
    items!: QuestionnaireResponseItem[];
    questionnaireId!: string;

    constructor(questionnaireResponse?: Partial<IQuestionnaireResponse>) {
        Object.assign(this, { id: uuid(), items: [], questionnaireId: uuid() }, questionnaireResponse);
    }

    addQuestionnaireResponseItem(item: QuestionnaireResponseItem) {
        if (this.items.every(itm => itm.id !== item.id)) {
            this.items = [...this.items, item];
        }
    }

    updateQuestionnaireResponse(questionnaireResponse: IQuestionnaireResponse) {
        Object.assign(this, questionnaireResponse);
    }
}