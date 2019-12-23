import { IQuestionnaireProvider } from '../interface/providers/IQuestionnaireProvider';
import { QuestionnaireLocalStorageService } from './services/localStorageServises/questionnaire';
import { IQuestionnaireService } from '../interface/providers/IQuestionnaireService';

export class QuestionnaireProvider implements IQuestionnaireProvider {
    constructor(private service: IQuestionnaireService) {
        this.service = service;
    }

    getQuestionnaireList(): Promise<any> {
        return this.service.getQuestionnaireList()
    }

    getQuestionnaireById(id: string) {
        return this.service.getQuestionnaireById(id)
    }

    deleteQuestionnaireById(id: string) {
        return this.service.deleteQuestionnaireById(id)
            .then(() => id)
    }

    putQuestionnaire(data: any) {
        return this.service.putQuestionnaire(data);
    }

    updateQuestionnaire(questionnaire: any) {
        return this.service.updateQuestionnaire(questionnaire);
    }

}



export const questionnaireProvider = (function () {
    const questionnaireService = new QuestionnaireLocalStorageService();
    return new QuestionnaireProvider(questionnaireService);
})();


