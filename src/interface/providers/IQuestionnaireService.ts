export interface IQuestionnaireService {
    getQuestionnaireList(): Promise<any>;
    getQuestionnaireById(id: string): Promise<any>;
    putQuestionnaire(data: any): Promise<any>;
    updateQuestionnaire(questionnaire: any): Promise<any>;
    deleteQuestionnaireById(id: string): Promise<any>;
}

export default IQuestionnaireService;