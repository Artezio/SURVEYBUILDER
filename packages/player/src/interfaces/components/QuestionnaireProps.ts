import * as Models from '@art-forms/models';


export interface QuestionnaireProps {
    questionnaire: Models.IQuestionnaire;
    questionnaireResponse: Models.QuestionnaireResponse;
    className?: string;
    provider?: {
        putQuestionnaireResponse(questionnaireResponse: Models.IQuestionnaireResponse): void
    }
}

export default QuestionnaireProps;