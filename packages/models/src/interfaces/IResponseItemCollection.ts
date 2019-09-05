import { Answer } from "..";

export interface IResponseItemCollection<T> {
    removeAnswer(answer: Answer<T>): void;
}

export default IResponseItemCollection;