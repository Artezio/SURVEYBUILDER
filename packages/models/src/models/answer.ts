import IAnswer from "../interfaces/IAnswer";
import uuid from 'uuid/v1';
import { QuestionnaireResponseItem } from "./questionnaireResponseItem";
import { observable } from "../..";

@observable
export class Answer<T> implements IAnswer<T> {
    id!: string;
    value?: T;
    items!: QuestionnaireResponseItem[];

    constructor(answer?: Partial<IAnswer<T>>) {
        Object.assign(this, { id: uuid(), items: [] }, answer);
    }

    addQuestionnaireResponseItem(item: QuestionnaireResponseItem) {
        if (item && this.items.every(itm => itm.id !== item.id)) {
            this.items = [...this.items, item];
        }
    }

    updateAnswer(answer: IAnswer<any>) {
        Object.assign(this, answer);
    }
}

export default Answer;