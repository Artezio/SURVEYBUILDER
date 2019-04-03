import { observable } from "..";
import { IQuestionnaireResponseItem } from "../interfaces/IQuestionnaireResponseItem";
import uuid from 'uuid/v1';

@observable
export class QuestionnaireResponseItem implements IQuestionnaireResponseItem {
    id: string;
    text?: string;
    items: IQuestionnaireResponseItem[];
    value?: any;

    constructor(item: Partial<IQuestionnaireResponseItem> | undefined = {}) {
        this.id = item.id || uuid();
        this.text = item.text;
        this.items = item.items || [];
        this.value = item.value;
    }

    addQuestionnaireResponseItem(item?: Partial<IQuestionnaireResponseItem>) {
        if ((item && this.items.every(itm => itm.id !== item.id)) || !item) {
            this.items = [...this.items, new QuestionnaireResponseItem(item)];
        }
    }

    updateQuestionnaireResponseItem(item: IQuestionnaireResponseItem) {
        this.id = item.id;
        this.items = item.items || [];
        this.text = item.text;
        this.value = item.value;
    }
}