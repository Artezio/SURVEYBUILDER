export interface IResponseProvider {
    getResponseListByQuestionnaireId(id: string): Promise<any[]>;
    getResponseById(id: string): Promise<any>;
    putResponse(response: any): Promise<any>;
    updateResponseById(id: string, response: any): Promise<any>;
}
export default IResponseProvider;