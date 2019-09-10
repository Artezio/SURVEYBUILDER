export interface IQuestionnaireProvider {
    getQuestionnaireList(): Promise<any[]>;
    getQuestionnaireById(id: string): Promise<any>;
    deleteQuestionnaireById(id: string): Promise<string>;
    putQuestionnaire(data: any): Promise<any>;
    updateQuestionnaireById(id: string, data: any): Promise<any>;
}

export default IQuestionnaireProvider;