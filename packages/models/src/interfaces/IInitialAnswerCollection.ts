import IInitialAnswer from "./IInitialAnswer";

export interface IInitialAnswerCollection {
    removeInitialAnswer(initialAnswer: IInitialAnswer<any>): void;
}

export default IInitialAnswerCollection