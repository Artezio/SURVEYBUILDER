import * as Models from '@art-forms/models';

type QuestionnaireListStatus = {
    loading?: string;
    deleting?: string;
}

export interface QuestionnaireListStore {
    status: QuestionnaireListStatus;
    questionnaireList?: Models.IQuestionnaire[];
}