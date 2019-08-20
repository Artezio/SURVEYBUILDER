import * as Models from '@art-forms/models';

type QuestionnaireEditorStatus = {
    loading?: string;
    saving?: string;
    updating?: string;
}

export interface QuestionnaireEditorStore {
    mode?: string;
    status: QuestionnaireEditorStatus;
    questionnaire?: any;
    questionnaireModel?: Models.Questionnaire;
}