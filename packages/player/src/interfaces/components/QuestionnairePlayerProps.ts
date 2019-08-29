import * as Models from '@art-forms/models';


export interface QuestionnairePlayerProps {
    questionnaire: Models.IQuestionnaire;
    questionnaireResponseModel: Models.QuestionnaireResponse;
    className?: string;
    submitButtonText?: string;
    provider?: {
        putQuestionnaireResponse(questionnaireResponse: Models.IQuestionnaireResponse): void
    }
}

export default QuestionnairePlayerProps;