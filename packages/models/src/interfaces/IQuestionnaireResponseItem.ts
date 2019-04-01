export interface IQuestionnaireResponseItem {
    id: string;
    text?: string;
    value?: any;
    items?: IQuestionnaireResponseItem[];
}