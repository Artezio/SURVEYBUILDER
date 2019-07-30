import * as Models from '@art-forms/models';
import { questionnaireProvider } from '../providers/questionnaireProvider';
import { questionnaireMapper } from '@art-forms/fhir-converter';

class FhirModelProviderAdapter {
    constructor(private provider: typeof questionnaireProvider) {
        this.provider = provider;
    }

    getQuestionnaireById(id: string): Promise<Models.IQuestionnaire> {
        return this.provider.getQuestionnaireById(id)
            .then(fhirQuestionnaire => questionnaireMapper.toModel(fhirQuestionnaire))
    }

    putQuestionnaire(questionnaire: any) {
        const fhirQuestionnaire = questionnaireMapper.fromModel(questionnaire);
        return this.provider.putQuestionnaire(fhirQuestionnaire)
    }

    updateQuestionnaireById(id: string, questionnaire: any) {
        const fhirQuestionnaire = questionnaireMapper.fromModel(questionnaire);
        return this.provider.updateQuestionnaireById(id, fhirQuestionnaire)
    }

    getQuestionnaireList(): Promise<Models.IQuestionnaire[]> {
        return this.provider.getQuestionnaireList()
            .then(fhirQuestionnaires => fhirQuestionnaires.map((fhirQuestionnaire: any) => questionnaireMapper.toModel(fhirQuestionnaire)))
    }

    deleteQuestionnaireById(id: string) {
        return this.provider.deleteQuestionnaireById(id)
    }
}

export const fhirModelProviderAdapter = (function () {
    return new FhirModelProviderAdapter(questionnaireProvider);
})();