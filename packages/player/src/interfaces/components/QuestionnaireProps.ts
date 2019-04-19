import * as Models from '@art-forms/models';


export interface QuestionnaireProps {
    questionnaire: Models.IQuestionnaire;
    questionnaireResponse: Models.QuestionnaireResponse;
    className?: string;
}

export default QuestionnaireProps;