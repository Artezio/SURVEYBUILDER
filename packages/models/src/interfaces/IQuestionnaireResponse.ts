import { IQuestionnaireResponseItem } from "./IQuestionnaireResponseItem";

export interface IQuestionnaireResponse{
    id: string;
    items: IQuestionnaireResponseItem[];
}