export interface ResponseServiceOptions {
    fieldToBeIncluded?: string;
    entriesLimit?: number;
    constantPrefix: string;
}

export interface IResponseService {
    getResponseListByQuestionnaireId(id: string, options: ResponseServiceOptions): Promise<any[]>;
    getResponseById(id: string): Promise<any>;
    putResponse(data: any): Promise<any>;
    updateResponse(response: any): Promise<any>;
}

export default IResponseService;