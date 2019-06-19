import IAnswer from "./IAnswer";

export interface IQuestionnaireResponseItem {
    id: string;
    text?: string;
    answers?: IAnswer<any>[];
    items?: IQuestionnaireResponseItem[];
}

export default IQuestionnaireResponseItem;