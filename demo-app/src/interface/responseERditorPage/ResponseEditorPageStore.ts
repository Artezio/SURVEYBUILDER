import * as Models from '@artezio/models';

type ResponseEditorPageStatus = {
    loadingQuestionnaire?: string;
    loadingResponse?: string;
    savingResponse?: string;
    updatingResponse?: string;
}

export interface ResponseEditorPageStore {
    questionnaire?: Models.IQuestionnaire;
    response?: any;
    responseModel?: Models.QuestionnaireResponse;
    status: ResponseEditorPageStatus;
    mode?: string;
}