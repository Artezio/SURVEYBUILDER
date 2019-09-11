import IResponseItemCollection from "../interfaces/IResponseItemCollection";
import { IAnswer } from "../interfaces/IAnswer";
import { Answer } from "../models/answer";

export class AnswerFactory {
    parent?: IResponseItemCollection<any>;

    constructor(parent?: IResponseItemCollection<any>) {
        this.parent = parent;
    }

    createAnswer(answer?: Partial<IAnswer<{}>>) {
        return new Answer(answer, this.parent);
    }
}

export default AnswerFactory;