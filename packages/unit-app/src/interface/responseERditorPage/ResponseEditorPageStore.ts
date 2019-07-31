type ResponseEditorPageStatus = {
    loadingQuestionnaire?: string;
    loadingResponse?: string;
    savingResponse?: string;
}

export interface ResponseEditorPageStore {
    questionnaire?: any;
    response?: any;
    status: ResponseEditorPageStatus;
    mode?: string;
}