import IAnswerOption from "../interfaces/IAnswerOption";
import uuid from 'uuid/v1';
import IAnswerOptionCollection from "../interfaces/IAnswerOptionCollection";
import initialAnswerFactory from "../factories/initialAnswerFactory";

export class AnswerOption implements IAnswerOption {
    id!: string;
    value?: any;
    parent?: IAnswerOptionCollection;
    initialAnswerFactory: initialAnswerFactory;

    constructor(option?: Partial<IAnswerOption>, parent?: IAnswerOptionCollection) {
        Object.assign(this, { id: uuid() }, option);
        this.parent = parent;
        this.initialAnswerFactory = new initialAnswerFactory(this.parent);
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

    asDefault() {
        this.parent && this.parent.setSingleInitialAnswer(this.initialAnswerFactory.createInitialAnswer({ value: this.id }));
    }
}

export default AnswerOption;