import * as Models from '@art-forms/models';


export interface QuestionnairePlayerProps {
    questionnaire: Models.IQuestionnaire;
    initialQuestionnaireResponse: Models.IQuestionnaireResponse;
    className?: string;
}

export default QuestionnairePlayerProps;