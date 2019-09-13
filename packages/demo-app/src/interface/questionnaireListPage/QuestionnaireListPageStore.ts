import * as Models from '@art-forms/models';

type QuestionnaireListPageStatus = {
    loadingQuestionnaireList?: string;
    deletingQuestionnaire?: string;
}

export interface QuestionnaireListPageStore {
    status: QuestionnaireListPageStatus;
    questionnaireList?: Models.IQuestionnaire[];
}