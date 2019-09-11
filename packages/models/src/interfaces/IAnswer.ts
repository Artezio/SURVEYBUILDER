import IQuestionnaireResponseItem from "./IQuestionnaireResponseItem";

export interface IAnswer<T> {
    id: string;
    value?: T;
    items?: IQuestionnaireResponseItem[];
}

export default IAnswer;