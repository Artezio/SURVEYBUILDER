import * as Models from '@art-forms/models';
import hapiFhirProvider from '../providers/hapiFhirProvider';
import { questionnaireMapper } from '@art-forms/fhir-converter';

export const modelsService = {
    getMockQuestionnaireModel(): Promise<Models.IQuestionnaire> {
        const path: string = '1378262/_history/9'; // 'devdays-q-1/_history/2';
        return hapiFhirProvider.getQuestionnaireByPass(path)
            .then(questionnaireFhir => questionnaireMapper.toModel(questionnaireFhir));
    }
}

export default modelsService;