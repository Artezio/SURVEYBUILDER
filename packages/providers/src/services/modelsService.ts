import * as Models from '@art-forms/models';
import hapiFhirProvider from '../providers/hapiFhirProvider';
import { questionnaireMapper } from '@art-forms/fhir-converter';

export const modelsService = {
    getMockQuestionnaireModel(): Promise<Models.IQuestionnaire> {
        return hapiFhirProvider.getQuestionnaireByPass('devdays-q-1/_history/2')
            .then(questionnaireFhir => questionnaireMapper.toModel(questionnaireFhir));
    }
}

export default modelsService;