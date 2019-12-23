export interface IResponseProvider {
    getResponseListByQuestionnaireId(id: string): Promise<any[]>;
    getResponseById(id: string): Promise<any>;
    putResponse(response: any): Promise<any>;
    updateResponse(response: any): Promise<any>;
}
export default IResponseProvider;