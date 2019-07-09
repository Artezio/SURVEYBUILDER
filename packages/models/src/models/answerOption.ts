import IAnswerOption from "../interfaces/IAnswerOption";
import uuid from 'uuid/v1';
import IAnswerOptionCollection from "../interfaces/IAnswerOptionCollection";

export class AnswerOption implements IAnswerOption {
    id!: string;
    value?: any;
    parent?: IAnswerOptionCollection;
    position!: number;

    constructor(option?: Partial<IAnswerOption>, parent?: IAnswerOptionCollection) {
        this.id = option && option.id || uuid();
        this.value = option && option.value;
        this.parent = parent;
        Object.defineProperty(AnswerOption.prototype, 'position', {
            enumerable: true,
            configurable: true,
            get() {
                if (!this.parent) return;
                let position;
                this.parent.options.find((option: AnswerOption, index: number) => {
                    if (option.id === this.id) {
                        position = index;
                        return true;
                    }
                })
                return position;
            }
        })
    }

    updateAnswerOption(option: IAnswerOption) {
        this.id = option.id;
        this.value = option.value;
    }

    setValue(value: any) {
        this.value = value;
    }

    remove() {
        this.parent && this.parent.removeAnswerOption(this);
    }
}

export default AnswerOption;