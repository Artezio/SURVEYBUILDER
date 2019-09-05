import IResponseItemCollection from "../interfaces/IResponseItemCollection";
import { Answer, IAnswer } from "..";

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