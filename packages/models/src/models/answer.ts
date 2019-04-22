import IAnswer from "../interfaces/IAnswer";
import uuid from 'uuid/v1';
import { QuestionnaireResponseItem } from "./questionnaireResponseItem";
import { observable } from "..";
import IResponseItemCollection from "../interfaces/IResponseItemCollection";

@observable
export class Answer<T> implements IAnswer<T> {
    id!: string;
    value?: T;
    items!: QuestionnaireResponseItem[];
    parent?: IResponseItemCollection<any>;

    constructor(answer: Partial<IAnswer<T>> | undefined, parent?: IResponseItemCollection<any>) {
        Object.assign(this, { id: uuid(), items: [] }, answer);
        this.parent = parent;
    }

    addQuestionnaireResponseItem(item: QuestionnaireResponseItem) {
        if (item && this.items.every(itm => itm.id !== item.id)) {
            this.items = [...this.items, item];
        }
    }

    updateAnswer(answer: IAnswer<any>) {
        Object.assign(this, answer);
    }

    remove() {
        this.parent && this.parent.removeAnswer(this);
    }
}

export default Answer;