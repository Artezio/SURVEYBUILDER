import { QuestionnaireResponseItem } from "./QuestionnaireResponseItem";

export interface QuestionnaireResponse{
    id: string;
    items?: QuestionnaireResponseItem[];
}