import * as Models from '@art-forms/models';

export interface QuestionnaireEditorStore {
    mode: string;
    status: string;
    questionnaire?: Models.Questionnaire;
}