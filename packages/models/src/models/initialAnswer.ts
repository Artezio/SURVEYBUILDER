import * as Models from '@art-forms/models';
import IInitialAnswer from '../interfaces/IInitialAnswer';
import IInitialAnswerCollection from '../interfaces/IInitialAnswerCollection';
import uuid from 'uuid/v1';

export class InitialAnswer<T> implements IInitialAnswer<T>{
    id!: string;
    value?: T;
    parent?: IInitialAnswerCollection;

    constructor(initialAnswer?: Partial<IInitialAnswer<T>>, parent?: IInitialAnswerCollection) {
        Object.assign(this, { id: uuid() }, initialAnswer);
        this.parent = parent;
    }

    updateInitialAnswer(answerOption: IInitialAnswer<T>) {
        Object.assign(this, answerOption);
    }

    setValue(value: any) {
        this.value = value;
    }

    remove() {
        this.parent && this.parent.removeInitialAnswer(this);
    }
}

export default IInitialAnswer;