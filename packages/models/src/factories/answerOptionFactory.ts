import IAnswerOptionCollection from "../interfaces/IAnswerOptionCollection";
import AnswerOption from "../models/answerOption";
import IAnswerOption from "../interfaces/IAnswerOption";

export class AnswerOptionFactory {
    parent?: IAnswerOptionCollection;

    constructor(parent?: IAnswerOptionCollection) {
        this.parent = parent;
    }

    createAnswerOption(answerOption?: Partial<IAnswerOption>) {
        return new AnswerOption(answerOption, this.parent);
    }
}

export default AnswerOptionFactory;