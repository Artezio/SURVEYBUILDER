import * as Models from '@artezio/models';

type QuestionnaireListPageStatus = {
    loadingQuestionnaireList?: string;
    deletingQuestionnaire?: string;
}

export interface QuestionnaireListPageStore {
    status: QuestionnaireListPageStatus;
    questionnaireList?: Models.IQuestionnaire[];
}