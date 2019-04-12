import { observable } from "..";
import { IQuestionnaireResponseItem } from "../interfaces/IQuestionnaireResponseItem";
import uuid from 'uuid/v1';

@observable
export class QuestionnaireResponseItem implements IQuestionnaireResponseItem {
    id!: string;
    text?: string;
    items!: QuestionnaireResponseItem[];
    value?: any;

    constructor(item?: Partial<IQuestionnaireResponseItem>) {
        Object.assign(this, { id: uuid(), items: [] }, item);
    }

    addQuestionnaireResponseItem(item?: Partial<IQuestionnaireResponseItem>) {
        if ((item && this.items.every(itm => itm.id !== item.id)) || !item) {
            this.items = [...this.items, new QuestionnaireResponseItem(item)];
        }
    }

    updateQuestionnaireResponseItem(item: IQuestionnaireResponseItem) {
        Object.assign(this, item);
    }

    clearQuestionnaireResponseItems() {
        this.items = [];
    }
}