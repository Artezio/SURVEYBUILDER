type ResponseListPageStatus = {
    loading?: string;
}

export interface ResponseListPageStore {
    responseList?: any[];
    status: ResponseListPageStatus;
}