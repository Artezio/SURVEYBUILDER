import ResponseItem from "./ResponseItem";

export interface QuestionnaireResponse {
    resourceType: string;
    id: string;
    item: ResponseItem[];
    questionnaire: {
        reference: string;
    }
}

export default QuestionnaireResponse;