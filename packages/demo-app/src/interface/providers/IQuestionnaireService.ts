export interface QuestionnaireServiceOptions {
    limit?: number;
    titleMatch?: string;
}

export interface IQuestionnaireService {
    getQuestionnaireList(options?: QuestionnaireServiceOptions): Promise<any>;
    getQuestionnaireById(id: string): Promise<any>;
    putQuestionnaire(data: any): Promise<any>;
    updateQuestionnaireById(id: string, data: any): Promise<any>;
    deleteQuestionnaireById(id: string): Promise<any>;
}

export default IQuestionnaireService;