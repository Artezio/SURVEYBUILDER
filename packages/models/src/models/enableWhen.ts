import IEnableWhen from "../interfaces/IEnableWhen";
import { EnableWhenOperator, EQUAL } from "../constants/enableWhenOperators";
import uuid from 'uuid/v1.js';
import IEnableWhenCollection from "../interfaces/IEnableWhenCollection";

export class EnableWhen implements IEnableWhen {
    id: string;
    operator: EnableWhenOperator;
    questionId?: string;
    answer?: any;
    parent?: IEnableWhenCollection;

    constructor(enableWhen: Partial<IEnableWhen> | undefined, parent?: IEnableWhenCollection) {
        this.id = enableWhen && enableWhen.id || uuid();
        this.questionId = enableWhen && enableWhen.questionId;
        this.operator = enableWhen && enableWhen.operator || EQUAL;
        this.answer = enableWhen && enableWhen.answer;
        this.parent = parent;
    }

    remove() {
        this.parent && this.parent.removeEnableWhen(this);
    }
}

export default EnableWhen;