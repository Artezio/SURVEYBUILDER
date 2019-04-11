import * as Models from '@art-forms/models';


export interface QuestionnaireProps {
    questionnaire?: Models.IQuestionnaire;
    className?: string;
    questionnaireResponse?: Models.QuestionnaireResponse;
}

export default QuestionnaireProps;