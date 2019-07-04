import IAnswer from "./IAnswer";

export interface IQuestionnaireResponseItem {
    id: string;
    text?: string;
    questionId: string;
    answers?: IAnswer<any>[];
    items?: IQuestionnaireResponseItem[];
}

export default IQuestionnaireResponseItem;