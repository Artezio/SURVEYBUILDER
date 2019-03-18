export interface QuestionnaireResponseItem {
    id: string;
    text?: string;
    value?: any;
    items?: QuestionnaireResponseItem[];
}