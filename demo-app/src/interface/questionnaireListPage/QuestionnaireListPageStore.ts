import * as Models from '@artezio/surveybuilder';

type QuestionnaireListPageStatus = {
    loadingQuestionnaireList?: string;
    deletingQuestionnaire?: string;
}

export interface QuestionnaireListPageStore {
    status: QuestionnaireListPageStatus;
    questionnaireList?: Models.IQuestionnaire[];
}