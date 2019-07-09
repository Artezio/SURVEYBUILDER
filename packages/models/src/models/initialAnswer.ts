import IInitialAnswer from '../interfaces/IInitialAnswer';
import IInitialAnswerCollection from '../interfaces/IInitialAnswerCollection';
import uuid from 'uuid/v1';

export class InitialAnswer<T> implements IInitialAnswer<T>{
    id!: string;
    value?: T;
    parent?: IInitialAnswerCollection;
    position!: number;

    constructor(initialAnswer?: Partial<IInitialAnswer<T>>, parent?: IInitialAnswerCollection) {
        this.id = initialAnswer && initialAnswer.id || uuid();
        this.value = initialAnswer && initialAnswer.value;
        this.parent = parent;
        Object.defineProperty(InitialAnswer.prototype, 'position', {
            enumerable: true,
            configurable: true,
            get() {
                if (!this.parent) return;
                let position;
                this.parent.initialAnswers.find((initialAnswer: InitialAnswer<T>, index: number) => {
                    if (initialAnswer.id === this.id) {
                        position = index;
                        return true;
                    }
                })
                return position;
            }
        })
    }

    updateInitialAnswer(initialAnswer: IInitialAnswer<T>) {
        this.id = initialAnswer.id;
        this.value = initialAnswer.value;
    }

    setValue(value: any) {
        this.value = value;
    }

    remove() {
        this.parent && this.parent.removeInitialAnswer(this);
    }
}

export default IInitialAnswer;