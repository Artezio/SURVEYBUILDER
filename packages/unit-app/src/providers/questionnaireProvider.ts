import * as Models from '@art-forms/models';
import { QuestionnaireService } from "./services/questionnaireService";
import HapiFhirService from "./services/hapiFhirService";
import { questionnaireMapper } from '@art-forms/fhir-converter';

class QuestionnaireProvider {
    constructor(private service: QuestionnaireService) {
        this.service = service;
    }

    getQuestionnaireList(): Promise<Models.Questionnaire[]> {
        return this.service.getQuestionnaireList({ limit: 10 })
            .then(response => response.data)
            .then(responseData => responseData.entry)
            .then(entries => entries.map((entry: any) => entry.resource))
            .then(fhirQuestionnaires => fhirQuestionnaires.map((fhirQuestionnaire: any) => questionnaireMapper.toModel(fhirQuestionnaire)))
    }

    getQuestionnaireById(id: string) {
        return this.service.getQuestionnaireById(id)
            .then(response => response.data)
            .then(fhirQuestionnaire => questionnaireMapper.toModel(fhirQuestionnaire))
    }

}



export const QUESTIONNAIRE_BASE_URL = '/Questionnaire';
export const questionnaireProvider = (function () {
    const hapiFhirService = new HapiFhirService(QUESTIONNAIRE_BASE_URL);
    const questionnaireService = new QuestionnaireService(hapiFhirService);
    return new QuestionnaireProvider(questionnaireService);
})();