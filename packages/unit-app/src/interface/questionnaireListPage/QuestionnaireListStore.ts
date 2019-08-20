import * as Models from '@art-forms/models';

type QuestionnaireListStatus = {
    loadingQuestionnaireList?: string;
    deletingQuestionnaire?: string;
}

export interface QuestionnaireListStore {
    status: QuestionnaireListStatus;
    questionnaireList?: Models.IQuestionnaire[];
}