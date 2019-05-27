import IAnswer from "../interfaces/IAnswer";
import uuid from 'uuid/v1';
import { QuestionnaireResponseItem } from "./questionnaireResponseItem";
import { observable, observableProperty } from "@art-forms/observable";
import IResponseItemCollection from "../interfaces/IResponseItemCollection";

@observable
export class Answer<T> implements IAnswer<T> {
    id!: string;
    value?: T;
    @observableProperty
    items!: QuestionnaireResponseItem[];
    parent?: IResponseItemCollection<any>;

    constructor(answer: Partial<IAnswer<T>> | undefined, parent?: IResponseItemCollection<any>) {
        Object.assign(this, { id: uuid(), items: [] }, answer);
        this.parent = parent;
    }

    addQuestionnaireResponseItem(item: QuestionnaireResponseItem) {
        if (item && this.items.every(itm => itm.id !== item.id)) {
            this.items.push(item);
        }
    }

    updateAnswer(answer: IAnswer<any>) {
        Object.assign(this, answer);
    }

    setValue(value: T) {
        this.value = value;
    }

    remove() {
        this.parent && this.parent.removeAnswer(this);
    }
}

export default Answer;