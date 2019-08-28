import * as Models from '@art-forms/models';
import { QuestionnaireService } from "./services/questionnaireService";
import HapiFhirService from "./services/hapiFhirService";

class QuestionnaireProvider {
    constructor(private service: QuestionnaireService) {
        this.service = service;
    }

    getQuestionnaireList(): Promise<Models.IQuestionnaire[]> {
        return this.service.getQuestionnaireList({ limit: 10 })
            .then(responseData => responseData.entry)
            .then(entries => entries.map((entry: any) => entry.resource))
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



export const QUESTIONNAIRE_BASE_URL = '/Questionnaire';
export const questionnaireProvider = (function () {
    const hapiFhirService = new HapiFhirService('');///proxy by devServer;
    const questionnaireService = new QuestionnaireService(hapiFhirService, QUESTIONNAIRE_BASE_URL);
    return new QuestionnaireProvider(questionnaireService);
})();


