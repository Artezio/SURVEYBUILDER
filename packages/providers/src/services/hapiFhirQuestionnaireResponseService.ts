import HapiFhirProvider from '../providers/hapiFhir';

const hapiFhirProvider = new HapiFhirProvider('/QuestionnaireResponse');

export const hapiFhirQuestionnaireResponseService = {
    getResponseListByQuestionnaireId(id: string) {
        return hapiFhirProvider.getResource(`?_include=QuestionnaireResponse:questionnaire&questionnaire=${id}`);
    },
    getResponseById(id: string) {
        return hapiFhirProvider.getResource('/' + id);
    }
}

export default hapiFhirQuestionnaireResponseService;