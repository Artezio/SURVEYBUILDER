import Answer from "../models/answer";

export interface IResponseItemCollection<T> {
    removeAnswer(answer: Answer<T>): void;
}

export default IResponseItemCollection;