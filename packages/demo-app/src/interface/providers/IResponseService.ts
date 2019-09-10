export interface ResponseServiceOptions {
    fieldToBeIncluded?: string;
    entriesLimit?: number;
}

export interface IResponseService {
    getResponseListByQuestionnaireId(id: string, options?: ResponseServiceOptions): Promise<any[]>;
    getResponseById(id: string): Promise<any>;
    putResponse(data: any): Promise<any>;
    updateResponseById(id: string, data: any): Promise<any>;
}

export default IResponseService;