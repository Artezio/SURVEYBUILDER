import * as Models from '@surveybuilder/models';

type QuestionnaireListPageStatus = {
    loadingQuestionnaireList?: string;
    deletingQuestionnaire?: string;
}

export interface QuestionnaireListPageStore {
    status: QuestionnaireListPageStatus;
    questionnaireList?: Models.IQuestionnaire[];
}