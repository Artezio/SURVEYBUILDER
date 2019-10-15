type ResponseListPageStatus = {
    loadingResponseList?: string;
    loadingQuestionnaire?: string;
    deletingQuestionnaire?: string;
}

export interface ResponseListPageStore {
    responseList?: any[];
    status: ResponseListPageStatus;
    questionnaire?: any;
}