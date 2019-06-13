import IAnswerOption from "../interfaces/IAnswerOption";
import uuid from 'uuid/v1';
import IAnswerOptionCollection from "../interfaces/IAnswerOptionCollection";

export class AnswerOption implements IAnswerOption {
    id!: string;
    value?: any;
    parent?: IAnswerOptionCollection;

    constructor(option?: Partial<IAnswerOption>, parent?: IAnswerOptionCollection) {
        Object.assign(this, { id: uuid() }, option);
        this.parent = parent;
    }

    updateAnswerOption(answerOption: IAnswerOption) {
        Object.assign(this, answerOption);
    }

    setValue(value: any) {
        this.value = value;
    }

    remove() {
        this.parent && this.parent.removeAnswerOption(this);
    }
}

export default AnswerOption;