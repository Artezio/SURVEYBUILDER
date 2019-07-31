type ResponseListPageStatus = {
    loadingResponseList?: string;
    loadingQuestionnaire?: string;
}

export interface ResponseListPageStore {
    responseList?: any[];
    status: ResponseListPageStatus;
    questionnaire?: any;
}