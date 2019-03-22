import * as Models from '@art-forms/models'


export interface Store {
    questionnaire: Models.IQuestionnaire | null;
    questionnaireResponse: Models.IQuestionnaireResponse | null;
}