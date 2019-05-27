import IInitialAnswer from "../interfaces/IInitialAnswer";
import IInitialAnswerCollection from "../interfaces/IInitialAnswerCollection";
import { InitialAnswer } from "../models/initialAnswer";

export class initialAnswerFactory {
    parent?: IInitialAnswerCollection;

    constructor(parent?: IInitialAnswerCollection) {
        this.parent = parent;
    }

    createInitialAnswer(initialAnswer?: Partial<IInitialAnswer<any>>) {
        return new InitialAnswer(initialAnswer, this.parent);
    }
}

export default initialAnswerFactory