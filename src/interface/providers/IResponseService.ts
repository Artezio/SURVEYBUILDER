export interface IResponseService {
    getResponseListByQuestionnaireId(id: string): Promise<any[]>;
    getResponseById(id: string): Promise<any>;
    putResponse(data: any): Promise<any>;
    updateResponse(response: any): Promise<any>;
}

export default IResponseService;