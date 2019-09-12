import * as Models from '@art-forms/models';
import { QuestionnaireHapiFhirService } from "./services/questionnaireService";
import { IQuestionnaireProvider } from '../interface/providers/IQuestionnaireProvider';
import { QuestionnaireLocalStorageService } from './services/localStorageServises/questionnaire';
import { IQuestionnaireService } from '../interface/providers/IQuestionnaireService';

class QuestionnaireProvider implements IQuestionnaireProvider {
    constructor(private service: IQuestionnaireService) {
        this.service = service;
    }

    getQuestionnaireList(): Promise<Models.IQuestionnaire[]> {
        return this.service.getQuestionnaireList({ limit: 10, titleMatch: '@artezio' })
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

    updateQuestionnaireById(id: string, data: any) {
        return this.service.updateQuestionnaireById(id, data)
    }

}



export const questionnaireProvider = (function () {
    const questionnaireService = new QuestionnaireHapiFhirService();
    return new QuestionnaireProvider(questionnaireService);
})();

