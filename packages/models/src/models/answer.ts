import IAnswer from "../interfaces/IAnswer";
import uuid from 'uuid/v1';
import { QuestionnaireResponseItem } from "./questionnaireResponseItem";
import { observable, observableProperty } from "@art-forms/observable";
import IResponseItemCollection from "../interfaces/IResponseItemCollection";

@observable
export class Answer<T> implements IAnswer<T> {
    id: string;
    value?: T;
    @observableProperty
    items: QuestionnaireResponseItem[];
    parent?: IResponseItemCollection<any>;
    itemIdMap: Map<string, boolean> = new Map();
    position!: number;

    constructor(answer: Partial<IAnswer<T>> | undefined, parent?: IResponseItemCollection<any>) {
        this.id = answer && answer.id || uuid();
        this.parent = parent;
        this.items = []; /// to be changed if needed!!!
        this.value = answer && answer.value;
        Object.defineProperty(Answer.prototype, 'position', {
            enumerable: true,
            configurable: true,
            get() {
                if (!this.parent) return;
                let position;
                this.parent.answers.find((option: Answer<T>, index: number) => {
                    if (option.id === this.id) {
                        position = index;
                        return true;
                    }
                })
                return position;
            }
        })
        this.items.forEach(item => this.itemIdMap.set(item.id, true));
    }

    addQuestionnaireResponseItem(item: QuestionnaireResponseItem) {
        if (this.itemIdMap.has(item.id)) return;
        this.items.push(item);
        this.itemIdMap.set(item.id, true);
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